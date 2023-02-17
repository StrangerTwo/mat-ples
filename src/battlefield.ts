import groundSvg from "./images/ground.svg?raw"
import groundSkySvg from "./images/ground_sky.svg?raw"
import groundDetailSkySvg from "./images/groundx_sky.svg?raw"
import groundTentSvg from "./images/ground_tent.svg?raw"
import groundTentCloudSvg from "./images/ground_tent_cloud.svg?raw"
import groundWaterBackSvg from "./images/ground_water_back.svg?raw"
import groundWaterFrontSvg from "./images/ground_water_front.svg?raw"
import sleep from "./sleep";

const battlefieldEl = document.getElementById("battlefield");
const battleEl = document.getElementById("battle");

if (!battlefieldEl) throw new Error("x");
if (!battleEl) throw new Error("x");

const remove = () => {
    battlefieldEl.querySelectorAll(":scope > svg").forEach(x => {
        x.remove();
    })
}

const initBattlefield = async () => {
    battlefieldEl.innerHTML += groundSvg;
    await sleep(300);

    remove();
    battlefieldEl.innerHTML += groundSkySvg;
    await sleep(300);

    remove();
    battlefieldEl.innerHTML += groundDetailSkySvg;
    await sleep(300);

    remove();
    battlefieldEl.innerHTML += groundTentSvg;
    await sleep(300);

    remove();
    battlefieldEl.innerHTML += groundTentCloudSvg;
    await sleep(300);
}

export const floodBattlefield = async () => {
    remove();
    battlefieldEl.innerHTML += groundWaterBackSvg;
    battlefieldEl.innerHTML += groundWaterFrontSvg;
    battlefieldEl.classList.add('flood');
    setTimeout(() => {
        const x = document.getElementById('knight_prog_3');
        if (!x) throw new Error('x');

        x.style.bottom = "";
        battlefieldEl.classList.add('flooding');
    }, 2000);
    await sleep(300);
}

export default initBattlefield;

interface Options {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    height?: number;
    width?: number;
}

export const addToBattlefied = (id: string, options: Options) => {
    const svgEl = document.getElementById(id);

    if (!svgEl) throw new Error('x');

    options.top && (svgEl.style.top = `${options.top}px`);
    options.bottom && (svgEl.style.bottom = `${options.bottom}px`);
    options.left && (svgEl.style.left = `${options.left}px`);
    options.right && (svgEl.style.right = `${options.right}px`);
    options.height && (svgEl.style.height = `${options.height}px`);
    options.width && (svgEl.style.width= `${options.width}px`);

    svgEl.classList.add("show")
}

export const removeFromBattleField = (id: string) => {
    const svgEl = document.getElementById(id);

    if (!svgEl) throw new Error('x');

    svgEl.classList.remove("show")
}

export const dropSpears = () => {
    document.getElementById("knight_prog_1")?.classList.add("drop");
    document.getElementById("knight_graf_1")?.classList.add("drop");
}

export const zoomIn = () => {
    battlefieldEl.classList.add("zoomed")
}

export const zoomOut = () => {
    battlefieldEl.classList.remove("zoomed")
}

export const jumpIn = () => {
    battlefieldEl.classList.add("jump");
}

export const fight = () => {
    battlefieldEl.classList.add("fight");
    setTimeout(() => {
        battlefieldEl.classList.remove("fight");
        battlefieldEl.classList.remove("jump");
        battlefieldEl.classList.add("fightend");
    }, 8000);
}