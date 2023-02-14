import { clearCanvas, drawTuzka } from "../graphic";
import useLayout, { shake } from "../layout";
import write, { clearCode, setSpeed } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportGraphic, teleportProgrammer } from "../teleport";

const {setProgrammerWidth, setGraphicWidth} = useLayout();

const stage0 = async () => {
    setGraphicWidth("0vw", 0);
    setProgrammerWidth("55vw", 800);
    setSpeed(20);

    await sleep(1000);

    await write({v: "Scanner ", c: "class"}, {v: "scanner", c: "prop"}, {v: " = "}, {v: "new "}, {v: "Scanner", c: "class"}, {v: "("}, {v: "System", c: "class"}, {v: "."}, {v: "in", c: "prop"}, {v: ");"});
    await write()

    await write({v: "System", c: "class"}, {v: ".out."}, {v: "println", c: "prop"}, {v: '('}, {v: '"Zadej jméno"', c: "str"}, {v: ');'});
    await write({v: "String ", c: "class"}, {v: "jmeno", c: "prop"}, {v: " = "}, {v: "scanner", c: "prop"}, {v: ".nextLine();"});
    await write()

    await write({v: "System", c: "class"}, {v: ".out."}, {v: "println", c: "prop"}, {v: '('}, {v: '"Zadej příjmení"', c: "str"}, {v: ");"});
    await write({v: "String ", c: "class"}, {v: "prijmeni", c: "prop"}, {v: " = "}, {v: "scanner.nextLine();"});
    await write()

    await write({v: "String ", c: "class"}, {v: "celeJmeno", c: "prop"}, {v: " = "}, {v: "jmeno", c: "prop"}, {v: ' + '}, {v: '" "', c: "str"}, {v: ' + '}, {v: 'prijmeni', c: "prop"}, {v: ";"});
    await write()

    await write({v: "System", c: "class"}, {v: ".out."}, {v: "println", c: "prop"}, {v: '('}, {v: '"Ahoj "', c: "str"}, {v: " + "}, {v: "celeJmeno", c: "prop"}, {v: " + "}, {v: '" !"', c: "str"}, {v: ");"});

    await sleep(2000);

    teleportProgrammer();
    await sleep(500);

    clearCode();
    clearTeleport();

    setProgrammerWidth("0vw", 300);

    await sleep(1000);

    setGraphicWidth("40vw", 300);
    await sleep(500);

    drawTuzka(3500);
    await sleep(5000);

    teleportGraphic();
    await sleep(500);

    clearCanvas();
    clearTeleport();

    await sleep(500);

    setGraphicWidth("0vw", 0);
}

export default stage0;