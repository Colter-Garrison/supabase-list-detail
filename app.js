import { getInsects } from './fetch-utils.js';
import { renderInsectCard } from './render-utils.js';

const insectList = document.getElementById('insect-list');

async function loadData() {
    const insects = await getInsects();
    console.log(insects);

    for (let insect of insects) {
        const insectDiv = renderInsectCard(insect);
        insectList.append(insectDiv);
    }
}

loadData();