import { Request } from "express";
import { generateToken } from "../../auth/token";
import { LoginAttempt, Users } from "../../model";
import { isNull } from "../../helper/global";
import moment from "moment";

interface Search {
  mobile?: number;
  username?: string;
}
//original login
// let loginUser = (req: Request) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let { username, password } = req.body;
//       if (isNull(username))
//         return reject({
//           status: 400,
//           message: "Please provide a username",
//         });
//       if (isNull(password))
//         return reject({
//           status: 400,
//           message: "Please provide a password",
//         });
//       let search: Search = { username: username };
//       if (!isNaN(username)) {
//         username = parseInt(username);
//         search = { mobile: username };
//       }
//       let user = await Users.findOne({
//         $or: [search, { email: username }],
//       }).select("-__v -createdAt -updatedAt");
//       if (user) {
//         let pass = user.validatePassword(password, user.password);
//         if (pass) {
//           user = user.toObject();
//           delete user.password;
//           let token: string = generateToken({ _id: user._id });
//           user.token = token;
//           return resolve({ status: 200, data: user });
//         } else {
//           return reject({ status: 401, message: "Password is incorrect" });
//         }
//       } else {
//         return reject({ status: 404, message: "No account exits" });
//       }
//     } catch (error) {
//       reject({ status: 400, message: error.message });
//     }
//   });
// };

// login not woring properly block user
let loginUser = (req: Request) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { username, password } = req.body;
      if (isNull(username))
        return reject({
          status: 400,
          message: "Please provide a username",
        });
      if (isNull(password))
        return reject({
          status: 400,
          message: "Please provide a password",
        });
      let search: Search = { username: username };
        // <<======= checking username is mobile no =======>>
      if (!isNaN(username)) {
        username = parseInt(username);
        search = { mobile: username };
      }
      let user = await Users.findOne({
        $or: [search, { email: username }],
      }).select("-__v -createdAt -updatedAt");

      if (user) {
          // <<======= Checking user account blocked =======>>
        const blockedUser = await LoginAttempt.findOne({username:user?.username})
        if(blockedUser){
        if (blockedUser && blockedUser.blockedUntil && moment(blockedUser?.blockedUntil).isAfter(moment())) {
        const remainingTime = moment(blockedUser.blockedUntil).diff(moment(), 'seconds');
        const formattedTime = moment.utc(remainingTime * 1000).format('llll') // Format as mm:ss
        // const formattedTime = moment.utc(remainingTime * 1000).format('mm:ss'); // Format as mm:ss
        return reject({status:403, message: `Your account is blocked. Please try again after ${formattedTime} .` });
            }
        }else{
        await new LoginAttempt({
        ip:req.ip,
          username:username
      }).save()
        }
         // <<======= Validate Password =======>> 
        let pass = user.validatePassword(password, user.password);
        if (pass) {

            // <<======= User first login time =======>>
          if(blockedUser){
            blockedUser.loginAttempts = 0;
            await blockedUser.save();
          }        
            user = user.toObject();
          delete user.password;
          let token: string = generateToken({ _id: user._id });
          user.token = token;
          return resolve({ status: 200, data: user });
        } else {
        // <<======= checking user allready exist =======>>
        if(blockedUser){
          blockedUser.loginAttempts++;
          if (blockedUser.loginAttempts === 3) {
            blockedUser.blockedUntil = moment().add(15, 'minutes').toDate(); // <<======= 15 minutes block  =======>>
          } else if (blockedUser.loginAttempts === 6) {
            blockedUser.blockedUntil = moment().add(30, 'minutes').toDate();
          } else if (blockedUser.loginAttempts === 9) {
            blockedUser.blockedUntil = moment().add(1, 'hours').toDate(); 
          } else if (blockedUser.loginAttempts === 12) {
            blockedUser.blockedUntil = moment().add(12, 'hours').toDate(); 
          }
          await blockedUser.save();
        }else{
          const blockedUser = new LoginAttempt({
            ip:req.ip,
            username:username
          }).save()
        }
          return reject({ status: 401, message: "Password is incorrect" });
        }
      } else {
        return reject({ status: 404, message: "No account exits" });
      }
    } catch (error) {
      reject({ status: 400, message: error.message });
    }
  });
};

export default loginUser;
