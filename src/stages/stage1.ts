import initBattlefield from "../battlefield";
import useLayout, { shake } from "../layout";
import write, { clearCode } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportProgrammer } from "../teleport";

const {setProgrammerWidth, setGraphicWidth} = useLayout();

const stage1 = async () => {
    setGraphicWidth("12vw")
    setProgrammerWidth("35vw");

    await write({v: "this", c: "this"}, {v: "."}, {v: "world", c: "prop"}, {v: "."}, {v: "init", c: "method"}, {v: "("}, {v: "{theme", c: "prop"}, {v: ": "}, {v: "BATTLEFIELD", c: "const"}, {v: "}", c: "prop"}, {v: ");"})
    await sleep(500);

    // ACTIVATING CODE //
    teleportProgrammer();
    await sleep(500);

    clearCode();
    clearTeleport();
    // ACTIVATING CODE //

    setProgrammerWidth("12vw");
    await sleep(500);

    await shake();
    await sleep(1500);

    await initBattlefield();
}

export default stage1;