const checkNullValidation = (value) => {
    let error = {};
    if(!value){
        error["error"] = "Field Can't be Empty."
    }
    return error;
}


const checkNameValidation = (value) => {
    const validName = new RegExp('^[a-zA-Z0-9_.]{2,20}$');
    let error = {};
    if(!validName.test(value)){
        error["error"] = "Name must not contain any Special Symbol."
    }
    return error;
}

const checkEmailValidation = (value) => {
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    let error = {};
    if(!validEmail.test(value)){
        error["error"] = "Email is Invliad."
    }
    return error;
} 

const checkPasswordValidation = (value) => {
    let error = {};
    const validPass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    if(value.length<8){
        error["error"] = "Password must be least 8 characters long.."
        return error;
    }
    if(!validPass.test(value)){
        error["error"] = "password must include  atleast one lowercase and uppercase letter, 1 number ,1 special character => !@#$%^&*"
        return error;
    } 
    return error;
}

const checkConfirmPassValiation = (value)=>{
    let error ={};
    error["error"]="Password Does not match"
    return error;
}

const checkMobNoValidation = (value) => {
    let error = {};
    const validNumber = new RegExp('[6789][0-9]{9}$');
    if(!validNumber.test(value) || value.length>10){
        error["error"]="Invalid number"
    }
    return error;
}

const Indexvaliadtion = {  
    checkNameValidation,
    checkEmailValidation,
    checkPasswordValidation,
    checkConfirmPassValiation,
    checkMobNoValidation,
    checkNullValidation
}
export default Indexvaliadtion;
