import initProps from './graphic';
import useLayout from './layout'
import write, { clearCode, setSpeed } from './programmer';
import sleep from './sleep';
import './style.css'
import { teleportProgrammer } from './teleport';

initProps();
const {setProgrammerWidth, setGraphicWidth} = useLayout();

setGraphicWidth("15vw");
setProgrammerWidth("35vw");
setSpeed(25);

await write({v: "Scanner ", c: "name"}, {v: "scanner", c: "var"}, {v: " = "}, {v: "new "}, {v: "Scanner", c: "name"}, {v: "(System.in);"});
await write()

await write({v: "System", c: "name"}, {v: ".out.println"}, {v: '('}, {v: '"Zadej jméno"', c: "str"}, {v: ');'});
await write({v: "String ", c: "name"}, {v: "jmeno", c: "var"}, {v: " = "}, {v: "scanner", c: "var"}, {v: ".nextLine();"});
await write()

await write({v: "System", c: "name"}, {v: ".out.println("}, {v: '"Zadej příjmení"', c: "str"}, {v: ");"});
await write({v: "String ", c: "name"}, {v: "prijmeni", c: "var"}, {v: " = "}, {v: "scanner.nextLine();"});
await write()

await write({v: "String ", c: "name"}, {v: "celeJmeno", c: "var"}, {v: " = "}, {v: "jmeno", c: "var"}, {v: ' + '}, {v: '" "', c: "str"}, {v: ' + '}, {v: 'prijmeni', c: "var"}, {v: ";"});
await write()

await write({v: "System", c: "name"}, {v: ".out.println"}, {v: '('}, {v: '"Ahoj "', c: "str"}, {v: " + "}, {v: "celeJmeno", c: "var"}, {v: " + "}, {v: '" !"', c: "str"}, {v: ");"});

await sleep(5000);
teleportProgrammer();

await sleep(500);
clearCode();
setProgrammerWidth("20vw");

await sleep(2000);

setGraphicWidth("40vw");