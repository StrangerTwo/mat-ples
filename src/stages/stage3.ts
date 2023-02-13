import { addToBattlefied, dropSpears, removeFromBattleField } from "../battlefield";
import { clearCanvas, drawRoh, drawUsi } from "../graphic";
import useLayout from "../layout";
import write, { clearCode } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportGraphic, teleportProgrammer } from "../teleport";

const {setProgrammerWidth, setGraphicWidth} = useLayout();

const stage3 = async () => {
    await sleep(500);

    dropSpears();

    await sleep(4000);

    setProgrammerWidth("55vw", 800);

    await sleep(1500);

    await write({v: "#Grafik", c: "str"}, {v: " .rytíř", c: "str"}, {v: " {"});
    await write({v: "    color", c: "prop"}, {v: ": "}, {v: "purple", c: "purple"});
    await write({v: "}"});

    await sleep(1000);

    teleportProgrammer();
    await sleep(500);

    // ACTIVATING CODE //
    setProgrammerWidth("10vw", 800);
    await sleep(1000);

    clearCode();
    clearTeleport();
    // ACTIVATING CODE //

    removeFromBattleField("knight_graf_1");
    addToBattlefied("knight_graf_2", {left: 0, bottom: -250, height: 310})

    await sleep(500);

    setProgrammerWidth("0vw", 200);
    await sleep(1000);

    addToBattlefied("emoji_3", {right: 165, bottom: 55, width: 200});
    await sleep(1500);

    removeFromBattleField("emoji_3");
    await sleep(500);

    addToBattlefied("emoji_4", {left: 375, bottom: 55, width: 200});
    await sleep(1500);

    removeFromBattleField("emoji_4");
    await sleep(500);

    setGraphicWidth("35vw", 800);
    await sleep(1000);

    // GRAFIK USI //
    drawUsi(3500);
    await sleep(4000);

    teleportGraphic();
    await sleep(1000);

    clearCanvas();
    clearTeleport();
    // GRAFIK USI //

    // GRAFIK ROH //
    drawRoh(2000);
    await sleep(2500);

    teleportGraphic();
    await sleep(1000);

    clearCanvas();
    clearTeleport();
    // GRAFIK ROH //

    setGraphicWidth("0vw", 800);
    await sleep(1000);

    removeFromBattleField("knight_prog_1");
    addToBattlefied("knight_prog_2", {right: -50, bottom: -250, height: 500})
}

export default stage3;