axios.defaults.headers.common['Authorization'] = 'UyFdKh3ePjzKZlAEacL7QBdd';

const getModels = () => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    const promessa = promise;
    promise.then(renderModels)
    // promise.catch()
    console.log(promise)
}
let arrayModels = [];
const renderModels = (allModels) => {
    let models;
    models = document.querySelector('.shirtArea')

    arrayModels = allModels.data;
    for (let i = 0; i < arrayModels.length; i++){
        models.innerHTML += `
        <div class="models" name="${arrayModels[i].model}">
            <img src="${arrayModels[i].image}" alt="image">
            <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
        </div>`
    }

}
getModels()