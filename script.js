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



function handleFocus() {
    document.getElementById('skyInput').style.background = 'lightblue';
}

function validateAge() {
    var age = document.getElementById('ageInput');
    var ageValue = parseInt(age.value, 10);
    
    if (ageValue >= 18) {
        age.style.backgroundColor = 'lightgreen';
        console.log('Eligible age confirmed.');
    } else {
        age.style.backgroundColor = 'salmon'; 
        console.log('Check age, may be under 18.');
    }
}

let ageInpput = document.getElementById('ageInput');
let ageMessage = document.getElementById('ageMessage');

ageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

        event.preventDefault();
       
        let ageValue = parseInt(ageInput.value, 10);
        if (ageValue >= 18) {
            ageMessage.textContent = 'Eligible age confirmed.';
        } else {
            ageMessage.textContent = 'Check age eligibility, may be under 18.';
        }
    }
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
                message = "hey don't click that.";
        }

        delegationMessage.textContent = message;
    }
});
