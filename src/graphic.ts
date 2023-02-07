import rytirObrys from "./images/rytir-obrys.svg";

const graphicCanvas = document.querySelector("#canvas");
if (!graphicCanvas) throw new Error("x");

export const initProps = () => {
    // graphicCanvas.innerHTML = `<img src="${rytirObrys}" class="logo vanilla" alt="TypeScript logo" />`;
}

export default initProps;