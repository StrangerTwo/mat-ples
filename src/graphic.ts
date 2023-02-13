import tuzkaDrawSvg from "./images/drawing/tuzka.svg?raw";
import mrkevDrawSvg from "./images/drawing/mrkev.svg?raw";
import rytirDrawSvg from "./images/drawing/knight.svg?raw";
import usiDrawSvg from "./images/drawing/usi.svg?raw";
import rohDrawSvg from "./images/drawing/roh.svg?raw";
import botyDrawSvg from "./images/drawing/boty.svg?raw";

const graphicCanvas = document.querySelector("#canvas");
if (!graphicCanvas) throw new Error("x");

const drawElement = (svg: string, duration: number) => {
    graphicCanvas.innerHTML = svg;
    
    const svgElem = graphicCanvas.querySelector("svg");
    svgElem?.style.setProperty("--anim-dur", `${duration}ms`);

    svgElem?.classList.add("drawing");
}

export const drawTuzka = (duration: number) => {
    drawElement(tuzkaDrawSvg, duration);
}

export const drawMrkev = (duration: number) => {
    drawElement(mrkevDrawSvg, duration);
}

export const drawRytir = (duration: number) => {
    drawElement(rytirDrawSvg, duration);
}

export const drawUsi = (duration: number) => {
    drawElement(usiDrawSvg, duration);
}

export const drawRoh = (duration: number) => {
    drawElement(rohDrawSvg, duration);
}

export const drawBoty = (duration: number) => {
    drawElement(botyDrawSvg, duration);
}

export const clearCanvas = () => {
    graphicCanvas.innerHTML = "";
}