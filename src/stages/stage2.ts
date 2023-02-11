import useLayout from "../layout";
import write, { clearCode } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportProgrammer } from "../teleport";

const {setProgrammerWidth} = useLayout();

const stage2 = async () => {
    setProgrammerWidth("35vw");
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
}

export default stage2;