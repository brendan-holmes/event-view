const minFontSize = 32;
const maxFontSize = 500;
const w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const body = document.getElementsByTagName("body")[0];

const appendNewLine = (stringMessage) => {
    var newElement = document.createElement("span"); 
    newElement.innerText = stringMessage;
    
    newElement.style.position = "fixed";
    newElement.style.left = `${randomInt(0, w)}px`;
    newElement.style.top = `${randomInt(0, h)}px`;
    newElement.style.fontSize = `${randomInt(minFontSize, maxFontSize)}px`;
    newElement.style.color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;
    newElement.className = "flash";
    
    body.appendChild(newElement);
}

const randomInt = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

window.addEventListener("keydown", (event) => appendNewLine(`${event.key}`));
window.addEventListener("click", () => appendNewLine(`click`));
window.addEventListener("dblclick", () => appendNewLine(`double click`));
window.addEventListener("touchstart", () => appendNewLine(`touch`));
window.addEventListener("touchmove", () => appendNewLine(`touch move`));
window.addEventListener("focus", () => appendNewLine(`window focus`));

document.addEventListener('mousemove', e => {
    var newElement = document.createElement("span"); 

    newElement.style.left = e.pageX + 'px';
    newElement.style.top = e.pageY + 'px';
    newElement.className = "mouse-object"
    newElement.style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;

    body.appendChild(newElement);
});