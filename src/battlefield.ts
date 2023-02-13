import groundSvg from "./images/ground.svg?raw"
import groundSkySvg from "./images/ground_sky.svg?raw"
import groundDetailSkySvg from "./images/groundx_sky.svg?raw"
import groundTentSvg from "./images/ground_tent.svg?raw"
import groundTentCloudSvg from "./images/ground_tent_cloud.svg?raw"
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