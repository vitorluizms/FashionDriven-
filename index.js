axios.defaults.headers.common["Authorization"] = "UyFdKh3ePjzKZlAEacL7QBdd";
let user = prompt("Digite o seu nome:");
while (user.length > "24" || user === "") {
  user = prompt("Digite um nome válido:");
}

const showUser = () => {
  const rightHeader = document.querySelector(".rightHeader");
  rightHeader.innerHTML += `
    <p> Olá, <strong>${user}<strong></p>`;
};

const x = document.querySelector(".linkImg");
const selectItem = (item, tipo) => {
  const x = document.querySelector(".linkImg");
  const itemSelected = document.querySelector(`${tipo} .itemSelected`);
  if (itemSelected !== null) {
    itemSelected.classList.remove("itemSelected");
  }
  item.classList.add("itemSelected");

  const model = document.querySelector(".model .itemSelected");
  console.log(model);
  const collar = document.querySelector(".collar .itemSelected");
  console.log(collar);
  const tissue = document.querySelector(".tissue .itemSelected");
  console.log(tissue);
  if (model !== null && collar !== null && tissue !== null) {
    confirmBtn(model, collar, tissue);
  }
  if (model !== null && collar !== null && tissue !== null && x.value !== "") {
    sendBody(model.id, collar.id, tissue.id, model, collar, tissue);
  }
};

const sendBody = (model, collar, tissue) => {
  let modelType;
  let collarType;
  let tissueType;
  if (model == 1) {
    modelType = "t-shirt";
  }
  if (model == 2) {
    modelType = "top-tank";
  }
  if (model == 3) {
    modelType = "long";
  }
  if (collar == 4) {
    collarType = "v-neck";
  }
  if (collar == 5) {
    collarType = "round";
  }
  if (collar == 6) {
    collarType = "polo";
  }
  if (tissue == 7) {
    tissueType = "silk";
  }
  if (tissue == 8) {
    tissueType = "cotton";
  }
  if (tissue == 9) {
    tissueType = "polyester";
  }
  const input = document.querySelector(".linkImg");
  const inputValue = input.value;

  let body = {
    model: modelType,
    neck: collarType,
    material: tissueType,
    image: inputValue,
    owner: user,
    author: user,
  };
  sendPromise(body);
};

const sendPromise = (body) => {
  console.log(body);
  const promise = axios.post(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
    body
  );
  promise.then(successPromise);
  promise.catch(errorPromise);
};

const errorPromise = () => {
  const leftHidden = document.querySelectorAll(".shirts");
  const buttonBlue = document.querySelector(".confirmBtn1");
  buttonBlue.classList.add("hidden");
  for (let i = 0; i < leftHidden.length; i++) {
    leftHidden[i].classList.add("hidden");
  }
  const referenceHidden = document.querySelector(".reference");
  const buttonHidden = document.querySelector(".confirmBtn");
  referenceHidden.classList.add("hidden");
  buttonHidden.classList.add("hidden");
  const errorContent = document.querySelector(".leftContent");

  errorContent.innerHTML += `
  <div class = "errorContent">
    <h5>Algo deu errado</h5>
    <h6>Um passarinho me contou que a</h6>
    <h6>imagem não é válida. Tente novamente!</h6>
    <img src="./imagens/image1.svg" alt="errrorImage">
    <h6>Voltando para a página</h6>
    <h6>principal em 10s</h6>
  </div>`;

  setTimeout(finishError, 10000);
};

const successPromise = () => {
  const leftHidden = document.querySelectorAll(".shirts");
  const buttonBlue = document.querySelector(".confirmBtn1");
  buttonBlue.classList.add("hidden");
  for (let i = 0; i < leftHidden.length; i++) {
    leftHidden[i].classList.add("hidden");
  }
  const referenceHidden = document.querySelector(".reference");
  const buttonHidden = document.querySelector(".confirmBtn");
  referenceHidden.classList.add("hidden");
  buttonHidden.classList.add("hidden");
  const successContent = document.querySelector(".leftContent");

  successContent.innerHTML += `
    <div class="successContent">
      <h5>Pedido feito com sucesso!</h5>
      <img src="./imagens/Seda.png" alt="sucessImage">
      <h6>Voltando para a página</h6>
      <h6> principal em 10s</h6>
    </div>`;
  setTimeout(finishSuccess, 10000);
};

const finishSuccess = () => {
  getPromise();
  const successHidden = document.querySelector(".successContent").remove();
  const leftHidden = document.querySelectorAll(".shirts");
  for (let i = 0; i < leftHidden.length; i++) {
    leftHidden[i].classList.remove("hidden");
  }
  const referenceHidden = document.querySelector(".reference");
  const buttonHidden = document.querySelector(".confirmBtn");
  referenceHidden.classList.remove("hidden");
  buttonHidden.classList.remove("hidden");
  // location.reload()
};

const finishError = () => {
  const successHidden = document.querySelector(".errorContent").remove();
  const leftHidden = document.querySelectorAll(".shirts");
  for (let i = 0; i < leftHidden.length; i++) {
    leftHidden[i].classList.remove("hidden");
  }
  const referenceHidden = document.querySelector(".reference");
  const buttonHidden = document.querySelector(".confirmBtn");
  referenceHidden.classList.remove("hidden");
  buttonHidden.classList.remove("hidden");
  // selectItem()
  // location.reload()
};

const confirmBtn = (tipo1, tipo2, tipo3) => {
  const x = document.querySelector(".linkImg");
  x.addEventListener("input", (event) => {
    console.log(tipo1);
    console.log(tipo2);
    console.log(tipo3);
    console.log(event.target.value);
    if (
      tipo1 !== null &&
      tipo2 !== null &&
      tipo3 !== null &&
      event.target.value !== undefined
    ) {
      const add = document.querySelector(".confirmBtn1");
      add.classList.add("confirmSelected");
      add.classList.remove("hidden");
      const remove = document.querySelector(".confirmBtn");
      remove.classList.add("hidden");
    }
    if (
      tipo1 === null ||
      tipo2 === null ||
      tipo3 === null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      const add1 = document.querySelector(".confirmBtn1");
      add1.classList.remove("confirmSelected");
      add1.classList.add("hidden");
      const remove1 = document.querySelector(".confirmBtn");
      remove1.classList.remove("hidden");
    }
  });
};

const getPromise = () => {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
  );
  promise.then(renderModels);
  console.log(promise)

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
  console.log(arrayModels)
  models.innerHTML = "";
  for (let i = 0; i < arrayModels.length; i++) {
    models.innerHTML += `
        <button onclick= "readyProduct('${arrayModels[i].material}', '${arrayModels[i].neck}', '${arrayModels[i].model}', '${arrayModels[i].image}', '${arrayModels[i].owner}')" class="models" name="${arrayModels[i].model}">
            <img src="${arrayModels[i].image}" alt="image">
            <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
        </button>`;
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
            <button onclick= "readyProduct('${arrayModels[i].material}', '${arrayModels[i].neck}', '${arrayModels[i].model}', '${arrayModels[i].image}', '${arrayModels[i].owner}')" class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </button>`;
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
            <button onclick= "readyProduct('${arrayModels[i].material}', '${arrayModels[i].neck}', '${arrayModels[i].model}', '${arrayModels[i].image}', '${arrayModels[i].owner}')" class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </button>`;
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
            <button onclick= "readyProduct('${arrayModels[i].material}', '${arrayModels[i].neck}', '${arrayModels[i].model}', '${arrayModels[i].image}', '${arrayModels[i].owner}')" class="models" name="${arrayModels[i].model}">
                <img src="${arrayModels[i].image}" alt="image">
                <p><strong>Criador:</strong> ${arrayModels[i].owner}</p>
            </button>`;
    }
  }
};

const readyProduct = (material, neck, model, image, author) => {
  console.log(material)
  console.log(neck)
  console.log(image)
  console.log(model)
  console.log(author)
}
showUser();
getPromise();
