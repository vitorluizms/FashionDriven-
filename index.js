axios.defaults.headers.common["Authorization"] = "UyFdKh3ePjzKZlAEacL7QBdd";
let user = prompt('Digite o seu nome:')
while (user.length > '24' || user === '') {
    user = prompt('Digite um nome válido:')
}


const showUser = () => {
    const rightHeader = document.querySelector('.rightHeader');
    rightHeader.innerHTML += `
    <p> Olá, <strong>${user}<strong></p>`
    getPromise();
}


const x = document.querySelector(".linkImg");
const selectItem = (item, tipo) => {
  const itemSelected = document.querySelector(`${tipo} .itemSelected`);
  if (itemSelected !== null) {
    itemSelected.classList.remove("itemSelected");
  }
  item.classList.add("itemSelected");
  confirmBtn(`.model`, `.collar`, `.tissue`);
};
const confirmBtn = (tipo1, tipo2, tipo3) => {
x.addEventListener("input", (event) => {
    let receive = event.data;
  const grupo1 = document.querySelector(`${tipo1} .itemSelected`);

  const grupo2 = document.querySelector(`${tipo2} .itemSelected`);
  const grupo3 = document.querySelector(`${tipo3} .itemSelected`);
  console.log(event.target.value)
    if (grupo1 && grupo2 && grupo3 && event.target.value !== undefined) {
        const add = document.querySelector(".confirmBtn1");
        add.classList.add("confirmSelected");
        add.classList.remove("hidden");
        const remove = document.querySelector(".confirmBtn");
        remove.classList.add("hidden");
      }
      if (grupo1 && grupo2 && grupo3 && event.target.value === undefined || event.target.value === '') {
        const add1 = document.querySelector(".confirmBtn1");
        add1.classList.remove("confirmSelected");
        add1.classList.add ("hidden");
        const remove1 = document.querySelector(".confirmBtn");
        remove1.classList.remove("hidden");
    }
    });
}
    
//   if (grupo1 && grupo2 && grupo3 && z[0] !== undefined) {
//     const add = document.querySelector(".confirmBtn1");
//     add.classList.add("confirmSelected");
//     add.classList.remove("hidden");
//     const remove = document.querySelector(".confirmBtn");
//     remove.classList.add("hidden");
//   }

const getPromise = () => {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
  );
  promise.then(renderModels);

  const searchSelected = document.querySelector(".filterSelected");
  if (searchSelected !== null) {
    searchSelected.classList.remove("filterSelected");
  }
  const filterAll = document.querySelector(".allModels");
  filterAll.classList.add("filterSelected");
};

let arrayModels = [];
const renderModels = (allModels) => {
  let models;
  models = document.querySelector(".shirtArea");
  arrayModels = allModels.data;
  models.innerHTML = "";
  for (let i = 0; i < arrayModels.length; i++) {
    models.innerHTML += `
        <div class="models" name="${arrayModels[i].model}">
            <img src="${arrayModels[i].image}" alt="image">
            <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
        </div>`;
  }
};

const getPromise1 = () => {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
  );
  promise.then(filterTshirt);

  const searchSelected = document.querySelector(".filterSelected");
  if (searchSelected !== null) {
    searchSelected.classList.remove("filterSelected");
  }
  const filterAll = document.querySelector(".tshirt");
  filterAll.classList.add("filterSelected");
};

const filterTshirt = (tShirts) => {
  let models;
  models = document.querySelector(".shirtArea");
  arrayModels = tShirts.data;
  models.innerHTML = "";
  for (let i = 0; i < arrayModels.length; i++) {
    if (arrayModels[i].model === "t-shirt") {
      models.innerHTML += `
            <div class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </div>`;
    }
  }
};

const getPromise2 = () => {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
  );
  promise.then(filterShirt);

  const searchSelected = document.querySelector(".filterSelected");
  if (searchSelected !== null) {
    searchSelected.classList.remove("filterSelected");
  }
  const filterAll = document.querySelector(".shirt");
  filterAll.classList.add("filterSelected");
};

const filterShirt = (tShirts) => {
  let models;
  models = document.querySelector(".shirtArea");
  arrayModels = tShirts.data;
  models.innerHTML = "";
  for (let i = 0; i < arrayModels.length; i++) {
    if (arrayModels[i].model === "top-tank") {
      models.innerHTML += `
            <div class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </div>`;
    }
  }
};

const getPromise3 = () => {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
  );
  promise.then(filterLong);

  const searchSelected = document.querySelector(".filterSelected");
  if (searchSelected !== null) {
    searchSelected.classList.remove("filterSelected");
  }
  const filterAll = document.querySelector(".long");
  filterAll.classList.add("filterSelected");
};

const filterLong = (tShirts) => {
  let models;
  models = document.querySelector(".shirtArea");
  arrayModels = tShirts.data;
  models.innerHTML = "";
  for (let i = 0; i < arrayModels.length; i++) {
    if (arrayModels[i].model === "long") {
      models.innerHTML += `
            <div class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </div>`;
    }
  }
};
// const test = () => {
//     const name = document.querySelector('.linkImg')
//     if (name.value === '') {
//         console.log('mt bem')
//     }
//     else {
//         console.log('oh não')
//     }
// }

showUser()
