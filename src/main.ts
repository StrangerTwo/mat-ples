import sleep from './sleep';
import stage0 from './stages/stage0';
import stage1 from './stages/stage1';
import stage2 from './stages/stage2';
import stage3 from './stages/stage3';
import stage4 from './stages/stage4';
import './style.css'

async function play() {
    await stage0();

    await sleep(1000);

    await stage1();

    await sleep(1000);

    await stage2();

    await sleep(1000);

    await stage3();

    await sleep(1000);

    await stage4();
}

document.getElementById("play")?.addEventListener('click', (e) => {
    e.preventDefault();
    (e.target as any).remove();

    play();
})