const generatePwd = require("generate-password");
const pwd = generatePwd.generate({
    length: 10,
    numbers: true, 
    lowercase: true, 
    strict : true
    
})
console.log(pwd);
