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