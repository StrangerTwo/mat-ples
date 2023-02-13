import initBattlefield from "../battlefield";
import useLayout, { shake } from "../layout";
import write, { clearCode, setSpeed } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportProgrammer } from "../teleport";

const {setProgrammerWidth, setGraphicWidth} = useLayout();

const stage1 = async () => {
    setGraphicWidth("0vw", 0)
    setProgrammerWidth("55vw", 1000);
    setSpeed(40);

    await sleep(1500);

    await write({v: "this", c: "this"}, {v: "."}, {v: "world", c: "prop"}, {v: "."}, {v: "init", c: "method"}, {v: "("}, {v: "{theme", c: "prop"}, {v: ": "}, {v: "BATTLEFIELD", c: "const"}, {v: "}", c: "prop"}, {v: ");"})
    await sleep(1500);

    // ACTIVATING CODE //
    teleportProgrammer();
    await sleep(1000);

    clearCode();
    clearTeleport();
    // ACTIVATING CODE //

    setProgrammerWidth("0vw", 1000);
    await sleep(1500);

    await shake();
    await sleep(1500);

    await initBattlefield();
}

export default stage1;