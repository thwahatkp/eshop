import{u as w,a as y,r as l,j as e,L as v,p as N,b as S,g as _}from"./index-f80cf2ba.js";import{T as i,I,a as C,d as M,b as L}from"./VisibilityOff-7d560912.js";function T(){const d=w(),u=y(),[r,g]=l.useState({rememberMe:localStorage.getItem("rememberMe")}),[n,m]=l.useState(""),[c,x]=l.useState(!1),b=()=>x(s=>!s);let a=s=>{m("");let{name:o,type:t,value:p,checked:k}=s.target,j=t==="checkbox"?k:p;g({...r,[o]:j})},h=(s,o)=>{s.preventDefault(),N("login",o).then(t=>{t.code===200&&(localStorage.setItem("details",JSON.stringify(t.data)),r.rememberMe?(localStorage.setItem("rememberMe",!0),S.set("_token",t.refreshToken,{secure:!0,expires:30})):(localStorage.removeItem("rememberMe"),sessionStorage.setItem("_token",t.refreshToken)),u(_()),d("/"))}).catch(t=>{t.code>=400&&m(t.message)})};const f=()=>{window.open("http://localhost:3001/auth/google","_self")};return e.jsxs("div",{className:"h-full max-w-md md:max-w-xl mx-auto bg-background rounded-lg shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] my-12 p-8 w-full",children:[e.jsx("h1",{className:"text-center text-3xl font-semibold mb-2",children:"Login"}),e.jsx("div",{className:"h-auto flex flex-col p-8",children:e.jsxs("form",{onSubmit:s=>h(s,r),children:[e.jsx(i,{fullWidth:!0,className:"",onChange:a,label:"Username",name:"username",size:"small",sx:{mb:1}}),e.jsx(i,{label:"Password",size:"small",name:"password",onChange:a,sx:{mb:2},type:c?"text":"password",fullWidth:!0,margin:"normal",InputProps:{endAdornment:e.jsx(I,{position:"end",children:e.jsx(C,{onClick:b,edge:"end",children:c?e.jsx(M,{}):e.jsx(L,{})})})}}),n&&e.jsx("span",{className:"text-center font-medium text-red-500 text-sm flex justify-center mb-2 -mt-2",children:n}),e.jsxs("div",{className:"flex items-center mb-2 ml-1",children:[e.jsx("label",{htmlFor:"checked-checkbox",className:"text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300",children:"Remember me"}),e.jsx("input",{id:"checked-checkbox",type:"checkbox",onClick:a,name:"rememberMe",checked:r.rememberMe,className:"w-4 h-4 ml-2  cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"})]}),e.jsx("button",{type:"submit",className:"w-full text-white  bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",children:"Login"}),e.jsxs("span",{className:"text-center text-base flex justify-center my-2",children:["Dont have an account? ",e.jsx(v,{className:"hover:text-blue-800 hover:underline",to:"/signup",children:"Sign up"})]}),e.jsx("span",{className:"flex justify-center my-3 text-lg font-semibold",children:"OR"}),e.jsxs("button",{type:"button",onClick:f,className:"w-full text-black  bg-white shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:shadow-[rgba(0,0,0,0.25)_1.95px_1.95px_2.6px] border hover:border-gray-500 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center",children:[e.jsx("img",{src:"google.svg",alt:"google logo",className:"mr-2 -ml-1 w-6 h-6"}),"Sign up with Google",e.jsx("div",{})]})]})})]})}export{T as default};
