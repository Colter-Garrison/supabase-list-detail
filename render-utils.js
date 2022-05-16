export function renderInsectCard(insect) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');

    div.classList.add('insect-card');

    h1.textContent = insect.name;
    img.src = `${insect.image}`;
    a.href = `./details/?id=${insect.id}`;

    div.append(h1, img);

    a.append(div);

    return a;
}

export function renderInsectDetail(insect) {
    const div = document.createElement('div');
    const nameEl = document.createElement('h1');
    const img = document.createElement('img');
    const nativeEl = document.createElement('p');
    const lengthEl = document.createElement('p');
    const foundEl = document.createElement('p');

    div.classList.add('insect-detail');

    nameEl.textContent = insect.name;
    nameEl.classList.add('name');

    nativeEl.textContent = `This insect is ${insect.native}.`;
    nativeEl.classList.add('native');

    lengthEl.textContent = `This insect ${insect.length}.`;
    lengthEl.classList.add('length');

    foundEl.textContent = `Among other places, this insect is found in ${insect.found}.`;
    foundEl.classList.add('found');

    img.src = `.${insect.image}`;

    div.append(nameEl, img, nativeEl, lengthEl, foundEl);

    return div;
}