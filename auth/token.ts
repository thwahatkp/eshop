import { sign, verify } from "jsonwebtoken";
export let generateToken = (data : object) => {
  if (typeof data === "object") {
    if (Object.keys(data).length === 0) return "object is null";
    // let token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 60 });
    let token = sign(data, process.env.JWT_SECRET, { expiresIn: "2 days" });
    return token;
  } else {
    return "parameter must be object";
  }
};

export let verifyToken = (token : any) => {
  try {
    let response = verify(token, process.env.JWT_SECRET);
    return response;
  } catch (error) {
    return error.name;
  }
};
