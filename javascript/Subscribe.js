const form = document.querySelector('#new-form');
const nameInput = document.querySelector('#Name');
const emailInput = document.querySelector('#email');
const phone = document.querySelector('#phone');
const Preference = document.querySelector('#preferences');
const terms = document.querySelector('#TestCheck');

form.addEventListener('submit', (event)=>{
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //NAME
    if(nameInput.value.trim()==''){
        setError(nameInput, 'Name can not be empty');
    }else if(nameInput.value.trim().length <2){
        setError(nameInput, 'Name must be more than 2 charecters');
    }else {
        setSuccess(nameInput);
    }
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Email address can not be empty');
    }else {
        setSuccess(emailInput);
    }

    // PHONE
    if(phone.value.trim()==''){
        setError(phone, 'Phone can not be empty');
    }else {
        setSuccess(phone);
    }

    // PREFERENCE
    if(Preference.value.trim()==''){
        setError(Preference, 'Please choose your preferences');
    }else if(Preference.value.trim()!='Skin Care' && Preference.value.trim()!='Body Care'  ){
        setError(Preference, 'Please only choose either Skin Care or Body Care');
    }else {
        setSuccess(Preference);
    }

    // CHECKBOX
    if(terms.checked==false){
        setError(terms,"You must agree to receive newsletter");
    }else{
        setSuccess(terms);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}