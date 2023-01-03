export const Valid = data => {
    const error = {
        name: "",
        emile: "",
        password: "",
        confirmpassword: "",
        Isaccept: false,
    };
if(!data.name){
    error.name ="username invalid"
}
else if(!data.name.trim()){
error.name ="username reqired"
}else {
    delete error.name
}

if(!data.emile){
    error.emile = "Emile reqired"
} else if (!/\S+@\S+\.\S+/.test(data.emile)){
    error.emile = "Emile invalid"
}else {
    delete error.emile
}
if(!data.password){
    error.password = "password required  "
}else if(data.password.length < 6){
    error.password= "The password should be more than  6 letters  "
}else {
    delete error.password
}
if(!data.confirmpassword){
    error.confirmpassword = "confirm password required  "
}else if(data.confirmpassword !== data.password ){
    error.confirmpassword = "The password is not the same"
}else {
    delete error.confirmpassword
}

 if(!data.Isaccept){
    error.Isaccept = "To enter the need to fill this field"
 }else {
    delete error.checked
}
return error;
}