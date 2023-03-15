let formButton = document.querySelector('.button');

export function validationForm(form) {
    formButton.disabled = false;
    let result = true;

    for (const input of form.elements) {
        removeError(input);

        if (input.dataset.required === 'true') {
            if (input.value === '' || input.value.trim() === '') {
                removeError(input);
                createError(input, 'Поле должно быть заполнено!');
                formButton.disabled = true;
                formButton.classList.add('button_disabled');
                result = false;
            }
        }
    }

    return result;
}

export function validationInput(element) {
    formButton.disabled = false;
    let result = true;

    removeError(element);
    if (element.dataset.required === 'true') {
        if (element.value === '' || element.value.trim() === '') {
            removeError(element);
            createError(element, 'Поле должно быть заполнено!');
            formButton.disabled = true;
            formButton.classList.add('button_disabled');
            result = false;
        }
    }

    return result;
}

function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.className = 'error-label';
    errorLabel.textContent = text;

    parent.classList.toggle('input-wrapper_error')
    parent.append(errorLabel);
}

export function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('input-wrapper_error')) {
        formButton.disabled = false;
        formButton.classList.remove('button_disabled');
        parent.querySelector('.error-label').remove();
        parent.classList.toggle('input-wrapper_error');
    }
}