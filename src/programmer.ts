import sleep from "./sleep";

interface Word {
    v: string,
    c?: string
}

type _Linebreak = "|||"

export const linebreak: _Linebreak = "|||";

const codeElement = document.querySelector("#programmer code");
if (!codeElement) throw new Error("x");

var _speed = 50;
const wait = async () => {
    await sleep(_speed);
}

export const setSpeed = (speed: number) => {
    _speed = speed
}

const writeWord = async (word: Word | _Linebreak) => {
    if (word === linebreak) {
        codeElement.innerHTML += "<p></p>";
        return;
    }

    var pElement = codeElement.querySelector("p:last-child");
    if (!pElement) {
        pElement = document.createElement('p');
        codeElement.appendChild(pElement);
    }

    const spanElement = document.createElement('span');
    pElement.appendChild(spanElement);

    for (const letter of word.v) {
        spanElement.innerHTML += letter;
        await wait();
    }
    word.c && spanElement.classList.add(word.c);
}

export const clearCode = () => {
    codeElement.innerHTML = "";
}

const write = async (...words: Word[]) => {
    for (const word of words) {
        await writeWord(word);
    }
    await writeWord(linebreak);
}

export default write