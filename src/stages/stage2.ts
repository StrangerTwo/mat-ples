import { addToBattlefied, removeFromBattleField } from "../battlefield";
import useLayout from "../layout";
import write, { clearCode } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportGraphic, teleportProgrammer } from "../teleport";

import { clearCanvas, drawRytir } from "../graphic";

const {setProgrammerWidth, setGraphicWidth} = useLayout();

const stage2 = async () => {
    setGraphicWidth("0vw", 0);
    setProgrammerWidth("55vw", 600);

    await sleep(500);

    await write({v: "Knight ", c: "class"}, {v: "knight", c: "prop"}, {v: " = "}, {v: "new ", c: "key"}, {v: "Knight ", c: "class"}, {v: "();"});
    await write({v: "this", c: "this"}, {v: "."}, {v: "world", c: "prop"}, {v: "."}, {v: "add", c: "method"}, {v: "("}, {v: "knight", c: "prop"}, {v: ");"});

    await sleep(1000);

    // ACTIVATING CODE //
    teleportProgrammer();
    await sleep(500);

    clearCode();
    clearTeleport();
    // ACTIVATING CODE //

    setProgrammerWidth("15vw", 800);
    await sleep(1000);

    addToBattlefied("knight_prog_1", {right: -50, bottom: -250, height: 500});
    await sleep(500);

    setProgrammerWidth("0vw", 400);
    await sleep(2000);

    setGraphicWidth("30vw", 800);
    await sleep(1000);

    // GRAFIK RYTIR //
    drawRytir(6500);
    await sleep(7500);

    teleportGraphic();
    await sleep(1000);

    clearCanvas();
    clearTeleport();
    // GRAFIK RYTIR //

    setGraphicWidth("0vw", 800);
    await sleep(1000);

    addToBattlefied("knight_graf_1", {left: 0, bottom: -250, height: 500});

    await sleep(1000);

    addToBattlefied("emoji_1", {left: 375, bottom: 55, width: 200});
    await sleep(1500);

    removeFromBattleField("emoji_1");
    await sleep(500);

    addToBattlefied("emoji_2", {right: 165, bottom: 55, width: 200});
    await sleep(1500);

    removeFromBattleField("emoji_2");
    await sleep(500);
}

export default stage2;