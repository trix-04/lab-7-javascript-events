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