let hoverButton = document.getElementById('hoverButton');
let hoverMessage = document.getElementById('hoverMessage');

hoverButton.addEventListener('mouseenter', () => {
    hoverMessage.textContent = "Go away im coding 👩‍💻!!";
});

hoverButton.addEventListener('mouseleave', () => {
    hoverMessage.textContent = "I need a nap 💤..";
});



let keyboardInput = document.getElementById('keyboardInput');
let keyPressedMessage = document.getElementById('keyPressedMessage');

keyboardInput.addEventListener('keydown', (event) => {
    keyPressedMessage.textContent = `Latest key pressed: ${event.key}`;
});



document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('myForm');
    let username = document.getElementById('username');
    let formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let userValue = username.value;

        if (userValue.trim() == '') {
            formMessage.textContent = "Please enter a username.";
        } else {
            formMessage.textContent = `Form submitted successfully! Username: ${userValue}`;
        }
    });

    username.addEventListener('input', function() {
        console.log('Input changed: ', this.value);
    });
});



let skyInput = document.getElementById('skyInput');
let focusMessage = document.getElementById('focusMessage');

skyInput.addEventListener('focus', () => {
    skyInput.style.background = 'lightblue';
    focusMessage.textContent = "What color is the textbox?";
});

skyInput.addEventListener('blur', () => {
    skyInput.style.background = '';
    focusMessage.textContent = "Click the textbox for a hint.";
});



let buttonContainer = document.getElementById('buttonContainer');
let delegationMessage = document.getElementById('delegationMessage');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('childButton')) {
        
        let message = '';
        switch (event.target.textContent) {
            case 'Button 1':
                message = "You clicked on Button 1! Take some dust 💨";
                break;
            case 'Button 2':
                message = "You clicked on Button 2! Here's a dog 🐕";
                break;
            case 'Button 3':
                message = "You clicked on Button 3! Here's some more dust 💨";
                break;
            default:
                message = "hey im not a button 😠.";
        }

        delegationMessage.textContent = message;
    }
});
