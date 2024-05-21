const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("[name='email']");
const messageTextarea = document.querySelector("[name='message']");
// завантаження даних форми з localStorage
const loadFormData = () => {
    const storedData = localStorage.getItem("feedback-form-state");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        formData.email = parsedData.email;
        formData.message = parsedData.message;
        fillForm();
    }
};
// заповнення форми збереженими даними
const fillForm = () => {
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
};
// збереження даних форми в localStorage
const saveFormData = () => {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
// обробник зміни вхідних даних форми
const handleInputChange = () => {
    formData.email = emailInput.value.trim();
    formData.message = messageTextarea.value.trim();
    saveFormData();
};
// обробник відправлення форми
const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email && formData.message) {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        fillForm();
    } else {
        alert("Будь ласка, заповніть всі поля!");
    }
};

form.addEventListener("input", handleInputChange);
form.addEventListener("submit", handleSubmit);

loadFormData();