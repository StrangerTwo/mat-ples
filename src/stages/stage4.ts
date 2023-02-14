import { addToBattlefied, removeFromBattleField } from "../battlefield";
import useLayout from "../layout";
import write, { clearCode, setSpeed } from "../programmer";
import sleep from "../sleep";
import { clearTeleport, teleportProgrammer } from "../teleport";

const {setProgrammerWidth} = useLayout();

const stage4 = async () => {

    addToBattlefied("emoji_5", {right: 165, bottom: 55, width: 200});
    await sleep(1500);

    removeFromBattleField("emoji_5");
    await sleep(1000);

    setProgrammerWidth("55vw", 800);

    await sleep(1500);

    await write({v: "Duck", c: "class"}, {v: " duck", c: "prop"}, {v: " = "}, {v: "new ", c: "key"}, {v: "Duck", c: "class"}, {v: "()"});
    await write();
    await write({v: "Horse", c: "class"}, {v: " horse", c: "prop"}, {v: " = "}, {v: "select", c: "method"}, {v: "("}, {v: "#Grafik .horse", c: "str"}, {v: ");"});
    await write();
    await write({v: "horse", c: "prop"}, {v: "."}, {v: "replace", c: "method"}, {v: "("}, {v: "duck", c: "prop"}, {v: ");"});

    await sleep(1000);

    teleportProgrammer();
    await sleep(500);

    // ACTIVATING CODE //
    setProgrammerWidth("0vw", 800);
    await sleep(1000);

    clearCode();
    clearTeleport();
    // ACTIVATING CODE //

    removeFromBattleField("knight_graf_2");
    addToBattlefied("knight_graf_3", {left: 0, bottom: -230, height: 250})

    await sleep(2000);

    addToBattlefied("emoji_6", {right: 165, bottom: 55, width: 200});
    await sleep(3000);

    removeFromBattleField("emoji_6");
    await sleep(1000);

    setProgrammerWidth("55vw", 800);

    await sleep(1500);

    setSpeed(32);
    await write({v: "duck", c: "prop"}, {v: "."}, {v: "size", c: "prop"}, {v: " = "}, {v: '"80 px"', c: "str"});
    await write();
    await write({v: "Spear", c: "class"}, {v: " spear", c: "prop"}, {v: " = "}, {v: "select", c: "method"}, {v: "("}, {v: "#Grafik .spear", c: "str"}, {v: ");"});
    await write({v: "spear", c: "prop"}, {v: "."}, {v: "replace", c: "method"}, {v: "("}, {v: "new", c: "key"}, {v: " Hračka", c: "class"}, {v: "());"});
    await write();
    await write({v: "Shield", c: "class"}, {v: " shield", c: "prop"}, {v: " = "}, {v: "select", c: "method"}, {v: "("}, {v: "#Grafik .shield", c: "str"}, {v: ");"});
    await write({v: "shield", c: "prop"}, {v: "."}, {v: "replace", c: "method"}, {v: "("}, {v: "new", c: "key"}, {v: " Ručník", c: "class"}, {v: "());"});
    setSpeed(40);

    await sleep(2500);

    teleportProgrammer();
    await sleep(500);

    // ACTIVATING CODE //
    setProgrammerWidth("0vw", 800);
    await sleep(1000);

    clearCode();
    clearTeleport();
    // ACTIVATING CODE //

    removeFromBattleField("knight_graf_3");
    addToBattlefied("knight_graf_4", {left: 0, bottom: -230, height: 250})
}

export default stage4;