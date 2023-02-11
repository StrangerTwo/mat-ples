import mrkevDrawSvg from "./images/drawing/tuzka.svg?raw";

const graphicCanvas = document.querySelector("#canvas");
if (!graphicCanvas) throw new Error("x");

const drawElement = (svg: string, duration: number) => {
    graphicCanvas.innerHTML = svg;
    
    const svgElem = graphicCanvas.querySelector("svg");
    svgElem?.style.setProperty("--anim-dur", `${duration}ms`);

    svgElem?.classList.add("drawing");
}

export const drawMrkev = (duration: number) => {
    drawElement(mrkevDrawSvg, duration);
}

export const clearCanvas = () => {
    graphicCanvas.innerHTML = "";
}