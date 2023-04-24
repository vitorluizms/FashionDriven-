axios.defaults.headers.common['Authorization'] = 'UyFdKh3ePjzKZlAEacL7QBdd';
const getPromise = () => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    promise.then(renderModels)

    const searchSelected = document.querySelector('.filterSelected')
    if (searchSelected !== null) {
        searchSelected.classList.remove('filterSelected')
    }
    const filterAll = document.querySelector('.allModels')
    filterAll.classList.add('filterSelected')
}
let arrayModels = [];
const renderModels = (allModels) => {
    
    let models;
    models = document.querySelector('.shirtArea')
    arrayModels = allModels.data;
    models.innerHTML = '';
    for (let i = 0; i < arrayModels.length; i++){
        models.innerHTML += `
        <div class="models" name="${arrayModels[i].model}">
            <img src="${arrayModels[i].image}" alt="image">
            <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
        </div>`
    }
}


const getPromise1 = () => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    promise.then(filterTshirt)

    const searchSelected = document.querySelector('.filterSelected')
    if (searchSelected !== null) {
        searchSelected.classList.remove('filterSelected')
    }
    const filterAll = document.querySelector('.tshirt')
    filterAll.classList.add('filterSelected')
}

const filterTshirt = (tShirts) => {
    let models;
    models = document.querySelector('.shirtArea')
    arrayModels = tShirts.data
    models.innerHTML = '';
    for (let i = 0; i < arrayModels.length; i++) {
        if (arrayModels[i].model === 't-shirt') {
            models.innerHTML += `
            <div class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </div>`
        }
    }
}


const getPromise2 = () => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    promise.then(filterShirt)

    const searchSelected = document.querySelector('.filterSelected')
    if (searchSelected !== null) {
        searchSelected.classList.remove('filterSelected')
    }
    const filterAll = document.querySelector('.shirt')
    filterAll.classList.add('filterSelected')
}

const filterShirt = (tShirts) => {
    let models;
    models = document.querySelector('.shirtArea')
    arrayModels = tShirts.data
    models.innerHTML = '';
    for (let i = 0; i < arrayModels.length; i++) {
        if (arrayModels[i].model === 'top-tank') {
            models.innerHTML += `
            <div class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </div>`
        }
    }
}


const getPromise3 = () => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    promise.then(filterLong)

    const searchSelected = document.querySelector('.filterSelected')
    if (searchSelected !== null) {
        searchSelected.classList.remove('filterSelected')
    }
    const filterAll = document.querySelector('.long')
    filterAll.classList.add('filterSelected')
}

const filterLong = (tShirts) => {
    let models;
    models = document.querySelector('.shirtArea')
    arrayModels = tShirts.data
    models.innerHTML = '';
    for (let i = 0; i < arrayModels.length; i++) {
        if (arrayModels[i].model === 'long') {
            models.innerHTML += `
            <div class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </div>`
        }
    }
}
getPromise2()