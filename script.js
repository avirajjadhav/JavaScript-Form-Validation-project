
function data() {  
let nameinput=document.getElementById("Name").value;
let emailinput=document.getElementById("email").value;
let contactinput=document.getElementById("contact").value;
let passwordinput=document.getElementById("password").value;
let confpasswordinput=document.getElementById("confirmPassword").value;
let agreeinput = document.getElementById("agree");

if(nameinput=="" ||emailinput=="" ||contactinput==""||passwordinput=="" || confpasswordinput==""|| !agreeinput.checked ){
    alert("Please fill all the required fields and accept the terms.")
    return false;
}else if (isNaN(contactinput)) {
    alert("Contact number must contain only numbers.");
    return false;
}
else if (contactinput.length !== 10) {
    alert("Please enter a valid 10-digit contact number.");
    return false;
}else if (passwordinput !== confpasswordinput) {
    alert("Passwords do not match.");
    return false;
}
else{
    return true;
}
}

// let nameinput=document.getElementById("Name").value;
// let emailinput=document.getElementById("email").value;
// let contactinput=document.getElementById("contact").value;
// let passwordinput=document.getElementById("password").value;
// let confpasswordinput=document.getElementById("confirmPassword").value;
// let agreeinput=document.getElementById("agree").value;

// if(nameinput=="" ||emailinput=="" ||contactinput==""||passwordinput=="" || confpasswordinput==""|| !agreeinput.checked ){
//     alert("Please fill all the required fields and accept the terms.")
// }