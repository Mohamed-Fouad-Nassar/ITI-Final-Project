const form = document.getElementById("form");
const user_name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    ValidateInputs();
});

function ValidateInputs() {
    // get the entered values
    const Name_value = user_name.value.trim();
    const Phone_value = phone.value.trim();
    const Email_value = email.value.trim();

    // name validation 
    if (Name_value === '') {
        SetError(user_name, "Name Can't Be Empty!");
    } else if (Name_value.length <= 2) {
        SetError(user_name, "Name Must be More Than 2 chars!");
    } else {
        SetSuccess(user_name);
    }

    // phonr validation 
    if (Phone_value === '') {
        SetError(phone, "Phone Number Can't Be Empty!");
    } else if (!IsPhoneNumber(Phone_value)) {
        SetError(phone, "Invalid Phone Number Format!");
    } else {
        SetSuccess(phone);
    }

    // email validation 
    if (Email_value === '') {
        SetError(email, "E-mail Can't Be Empty!");
    } else if (!IsEmail(Email_value)) {
        SetError(email, "Invalid Email Format!");
    } else {
        SetSuccess(email);
    }
}

// set error function 
function SetError(input, message) {
    const from_cont = input.parentElement;
    const small = from_cont.querySelector("small");
    small.innerText = message;
    from_cont.className = 'control-input col-lg-6 col-md-6 col-sm-12 error';
}

// set success function 
function SetSuccess(input) {
    const from_cont = input.parentElement;
    from_cont.className = 'control-input col-lg-6 col-md-6 col-sm-12 success';
}

// email format validate function 
function IsEmail(e) {
    return /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(e);
}

// phone format validate function 
function IsPhoneNumber(p) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(p);
}