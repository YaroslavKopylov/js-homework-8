const throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form"),
    email = document.querySelector("[type=email]"),
    message = document.querySelector("[name=message]");

function onLoad(e) {
    const formData = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function formText() {
    const saveData = localStorage.getItem("feedback-form-state");
    if (saveData) {
        const parceSaveData = JSON.parse(
            localStorage.getItem("feedback-form-state")
        );
        console.log(parceSaveData);
        email.value = parceSaveData.email;
        message.value = parceSaveData.message;
    }
}
formText();

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    const resultObject = JSON.parse(
        localStorage.getItem("feedback-form-state")
    );
    console.log(resultObject);
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
}

form.addEventListener("input", throttle(onLoad, 500));
