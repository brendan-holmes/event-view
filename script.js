const minFontSize = 50;
const maxFontSize = 500;
const w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const content = document.getElementById("content");

const appendNewLine = (stringMessage) => {
    
    // new element
    var newElement = document.createElement("span"); 
    newElement.innerText = stringMessage;
    
    // set style
    newElement.style.position = "fixed";
    newElement.style.left = `${randomInt(0, w)}px`;
    newElement.style.top = `${randomInt(0, h)}px`;
    newElement.style.fontSize = `${randomInt(minFontSize, maxFontSize)}px`;
    newElement.style.color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;
    newElement.className = "visible";
    
    // append
    content.appendChild(newElement);
}

const randomInt = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const handleKeyboardEvent = (keyboardEvent) => {
    const key = keyboardEvent.key;
    const message = `${key}`;
    appendNewLine(message);
};

window.addEventListener("keydown", handleKeyboardEvent);
