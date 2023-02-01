const teleportableProgrammer = document.querySelector("#programmer .teleportable");

if (!teleportableProgrammer) throw new Error('x');

export const teleportProgrammer = () => {
    teleportableProgrammer.classList.add('teleporting');
}