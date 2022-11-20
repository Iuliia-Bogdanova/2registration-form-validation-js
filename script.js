//вызываем функцию в onSubmit для валидации
function formValidation() {
    let uname = document.registration.username;
    let ucountry = document.registration.country;
    let uemail = document.registration.email;
        if(allLetter(uname)) {
            if(countryselect(ucountry)) {
                if(ValidateEmail(uemail)) {
                }
            } 
        }
    return false;
} 

//проверяем имя пользователя
function allLetter(uname) { 
    let letters = /^[A-Za-z]+$/;
        if(uname.value.match(letters)) {
        return true;
    } else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

//проверка страны
function countryselect(ucountry) {
    if(ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}

//проверяем email
function ValidateEmail(uemail) {
    let mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if(uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}