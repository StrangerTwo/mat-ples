const useLayout = () => {
    const root = document.querySelector<HTMLElement>(":root");
    if (!root) throw new Error("xd");

    const setProgrammerWidth = (width: string) => {
        root.style.setProperty("--programmer-width", width)
    }

    const setGraphicWidth = (width: string) => {
        root.style.setProperty("--graphic-width", width)
    }

    return {setProgrammerWidth, setGraphicWidth}
}

export default useLayout;