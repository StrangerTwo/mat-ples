import groundSvg from "./images/ground.svg?raw"
import groundSkySvg from "./images/ground_sky.svg?raw"
import groundDetailSkySvg from "./images/groundx_sky.svg?raw"
import battlefieldSvg from "./images/battlefield.svg?raw"
import sleep from "./sleep";

const battlefieldEl = document.getElementById("battlefield");

if (!battlefieldEl) throw new Error("x");

const remove = () => {
    battlefieldEl.querySelectorAll("svg").forEach(x => {
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
    battlefieldEl.innerHTML += battlefieldSvg;
    await sleep(300);
}

export default initBattlefield;