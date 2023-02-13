import sleep from "./sleep";

const root = document.querySelector<HTMLElement>(":root");
const appEl = document.querySelector<HTMLElement>("#app");
if (!root) throw new Error("xd");

export const shake = async () => {
    appEl?.classList.add("shaking");
    new Audio("/fast-huge-thunderbolt.mp3").play()
    await sleep(1500);
    appEl?.classList.remove("shaking");
}

const useLayout = () => {

    const setProgrammerWidth = (width: string, speed: number) => {
        root.style.setProperty("--editor-speed", `${speed}ms`)
        root.style.setProperty("--programmer-width", width)
    }

    const setGraphicWidth = (width: string, speed: number) => {
        root.style.setProperty("--editor-speed", `${speed}ms`)
        root.style.setProperty("--graphic-width", width)
    }

    return {setProgrammerWidth, setGraphicWidth}
}

export default useLayout;