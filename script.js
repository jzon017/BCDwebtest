const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const emailAdd = document.getElementById('emailAdd')
const addr1 = document.getElementById('addr1')
const addr2 = document.getElementById('addr2')
const gender = document.getElementById('gender')
// const bDay = document.getElementById('bDay')
const shirtSize = document.getElementById('shirtSize')
const form = document.getElementById('registerForm')
const errorElement = document.getElementById('error')
const emailCheck = /\S+@\S+\.\S+/;

var button = document.getElementById("submit");

function validateEmail() {
    let messages = []
    var checkEA = emailCheck.test(emailAdd.value)
    return checkEA;
}

document.getElementById("fullNameResult").innerHTML=localStorage.getItem("fullName");
document.getElementById("categoryResult").innerHTML=localStorage.getItem("categoryUser");
document.getElementById("genderResult").innerHTML=localStorage.getItem("genderUser");
document.getElementById("shirtSizeResult").innerHTML=localStorage.getItem("shirtSizeUser");
document.getElementById("regDateResult").innerHTML=localStorage.getItem("regDateUser");

// form.addEventListener('submit', (e) => {
//     let messages = []
//     var emailVal = null
//     if (fName.value.length < 2)
//     {
//         messages.push('First Name should be at least 2 characters long')
//     }

//     if (lName.value.length < 2)
//     {
//         messages.push('Last Name should be at least 2 characters long')
//     }

//     emailVal = validateEmail();

//     if ( emailVal === false)
//     {
//         messages.push('Enter a valid email address')
//     }

//     if (messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
// })

function calcAge() {
    var bDayDate = +new Date(bDay.value);
    var age = ((Date.now() - bDayDate) / (31557600000))
    return age;
}

function determineCategory() {
    var category = NULL;
    var bDayDate = +new Date(bDay.value);
    var age = ((Date.now() - bDayDate) / (31557600000))
    if (age <= 18)
        category = 'Junior'
    else 
        category = 'Senior'

    return category;
}

function addData() {

    var bDayDate = +new Date(bDay.value);
    var age = ((Date.now() - bDayDate) / (31557600000))
    if (age <= 18)
        category = 'Junior'
    else 
        category = 'Senior'

    var fullName = fName.value + ' ' + lName.value;
    var categoryUser = category;
    var genderUser = gender.value;
    var shirtSizeUser = shirtSize.value;

    var now = new Date();
    var regDateUser = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
+ ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())));

    localStorage.setItem("regDateUser", regDateUser);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("categoryUser", categoryUser);
    localStorage.setItem("genderUser", genderUser);
    localStorage.setItem("shirtSizeUser", shirtSizeUser);

    return false;
}

function getTimeStamp() {
  

}

calcAge();
validateEmail();
button.addEventListener("submit", validateName)