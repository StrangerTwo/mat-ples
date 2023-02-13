import { addToBattlefied, removeFromBattleField } from "../battlefield";
import { clearCanvas, drawBoty, drawMrkev } from "../graphic";
import useLayout from "../layout";
import sleep from "../sleep";
import { clearTeleport, teleportGraphic } from "../teleport";

const {setGraphicWidth} = useLayout();

const stage5 = async () => {

    addToBattlefied("emoji_7", {left: 375, bottom: 55, width: 200});
    await sleep(1500);

    removeFromBattleField("emoji_7");
    await sleep(500);

    setGraphicWidth("35vw", 800);
    await sleep(1000);

    // GRAFIK BOTY //
    drawBoty(3500);
    await sleep(4000);

    throw "x"

    teleportGraphic();
    await sleep(1000);

    clearCanvas();
    clearTeleport();
    // GRAFIK BOTY //

    // GRAFIK MRKEV //
    drawMrkev(2000);
    await sleep(2500);

    teleportGraphic();
    await sleep(1000);

    clearCanvas();
    clearTeleport();
    // GRAFIK MRKEV //
}

export default stage5;