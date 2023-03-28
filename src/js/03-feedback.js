import _throttle from 'lodash.throttle';

const FORM_INPUT = "feedback-form-state";

const formData = {};

const form = document.querySelector('.feedback-form');


form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', _throttle(throtlleEvent, 1000));

function throtlleEvent(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FORM_INPUT, JSON.stringify(formData));
};



populateMessageOutput();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log (JSON.parse(localStorage.getItem(FORM_INPUT)));
    localStorage.removeItem(FORM_INPUT);
    
};

function populateMessageOutput() {
    const savedMessage = localStorage.getItem(FORM_INPUT);

    if(savedMessage) {

    const data = JSON.parse(savedMessage);

    form.email.value = data.email;
    form.message.value = data.message;
    
    }
};

