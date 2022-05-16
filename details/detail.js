import { getInsect } from '../fetch-utils.js';
import { renderInsectDetail } from '../render-utils.js';

const insectDetail = document.getElementById('insect-detail');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = (params.get('id'));
    const insect = await getInsect(id);
    const insectDiv = renderInsectDetail(insect);
    insectDetail.append(insectDiv);
}

loadData();