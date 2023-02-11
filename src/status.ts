const statusElm = document.getElementById("status");

if (!statusElm) throw new Error("x");

export const setStatusMessage = (msg: string) => {
    statusElm.innerHTML = msg;
}