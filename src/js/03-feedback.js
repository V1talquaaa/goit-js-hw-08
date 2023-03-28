import _throttle from 'lodash.throttle';

const FORM_INPUT = "feedback-form-state";

const formData = {};

const form = document.querySelector('.feedback-form');
const textAreaEl = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);

textAreaEl.addEventListener('input', _throttle(onTextareaInput, 500));

form.addEventListener('input', e => {

    formData[e.target.name] = e.target.value;

})

populateMessageOutput();


function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FORM_INPUT);
};

function onTextareaInput(e) {
    const message = e.target.value;

    localStorage.setItem(FORM_INPUT, JSON.stringify(formData));
};


function populateMessageOutput() {
    const savedMessage = localStorage.getItem(FORM_INPUT);

    if(savedMessage) {

    const data = JSON.parse(savedMessage);
    form.email.value = data.email;
    form.message.value = data.message;

    }
};

