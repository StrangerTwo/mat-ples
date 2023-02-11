import initBattlefield from "../battlefield";
import useLayout, { shake } from "../layout";
import write, { clearCode } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportProgrammer } from "../teleport";

const {setProgrammerWidth, setGraphicWidth} = useLayout();

const stage2 = async () => {
    setProgrammerWidth("35vw");

    
}

export default stage2;