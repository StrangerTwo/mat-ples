import { addToBattlefied, fight, floodBattlefield, jumpIn, removeFromBattleField, zoomIn, zoomOut } from "../battlefield";
import { clearCanvas, drawBoty, drawMrkev, drawRucnik, drawVlna } from "../graphic";
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

    // GRAFIK RUCNIK //
    drawRucnik(1500);
    await sleep(2000);

    teleportGraphic();
    await sleep(1000);

    clearCanvas();
    clearTeleport();
    // GRAFIK RUCNIK //

    setGraphicWidth("0vw", 800);
    await sleep(1000);

    removeFromBattleField("knight_prog_2");
    addToBattlefied("knight_prog_3", {right: 75, bottom: -235, height: 275});

    await sleep(1500);

    zoomIn();
    await sleep(1000);

    jumpIn();
    await sleep(1000);

    fight();
    await sleep(8000);

    zoomOut();
    await sleep(1000);

    setGraphicWidth("40vw", 800);
    await sleep(1000);

    // GRAFIK VODA //
    drawVlna(1500);
    await sleep(2000);

    teleportGraphic();
    await sleep(1000);

    clearCanvas();
    clearTeleport();
    // GRAFIK VODA //

    setGraphicWidth("0vw", 800);
    await sleep(1000);

    await floodBattlefield();
}

export default stage5;