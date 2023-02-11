const teleportableProgrammer = document.querySelector("#programmer .teleportable");
const teleportableGraphic = document.querySelector("#graphic .teleportable");

if (!teleportableProgrammer) throw new Error('x');
if (!teleportableGraphic) throw new Error('x');

export const teleportProgrammer = () => {
    teleportableProgrammer.classList.add('teleporting');
}

export const teleportGraphic = () => {
    teleportableGraphic.classList.add('teleporting');
}

export const clearTeleport = () => {
    teleportableProgrammer.classList.remove('teleporting');
    teleportableGraphic.classList.remove('teleporting');
}