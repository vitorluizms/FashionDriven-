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
  const collar = document.querySelector(".collar .itemSelected");
  const tissue = document.querySelector(".tissue .itemSelected");
  if (model !== null && collar !== null && tissue !== null) {
    confirmBtn(model, collar, tissue);
  }
  if (model !== null && collar !== null && tissue !== null && x.value !== "") {
    sendBody(model.id, collar.id, tissue.id, model, collar, tissue);
  }
};

const confirmBtn = (tipo1, tipo2, tipo3) => {
  const x = document.querySelector(".linkImg");
  x.addEventListener("input", (event) => {
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
  const promise = axios.post(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
    body
  );
  promise.then(successPromise(body.image));
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
  const successDiv = document.querySelector(".successContent");
  const successDiv2 = document.querySelector(".successContent h5");
  const successDiv3 = document.querySelector(".successContent img");
  const successDiv4 = document.querySelector(".successContent h6");
  const successDiv5 = document.querySelector(".successContent p");
  console.log(successDiv);
  successDiv.classList.add("escondido");
  successDiv2.classList.add("hidden");
  successDiv3.classList.add("hidden");
  successDiv4.classList.add("hidden");
  successDiv5.classList.add("hidden");
  referenceHidden.classList.add("hidden");
  buttonHidden.classList.add("hidden");
  const errorContent = document.querySelector(".leftContent");
  errorContent.innerHTML += `
  <div class = "errorContent">
    <h5>Algo deu errado</h5>
    <h6>Um passarinho me contou que a</h6>
    <h6>imagem não é válida. Tente novamente!</h6>
    <img src="./imagens/image1.svg" alt="errorImage">
    <h6>Voltando para a página</h6>
    <h6>principal em 10s</h6>
  </div>`;

  setTimeout(finishError, 10000);
};

const successPromise = (image) => {
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
      <img src="${image}" alt="sucessImage">
      <h6>Voltando para a página</h6>
      <p> principal em 10s</>
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
};

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
  let answer = confirm("Deseja confirmar o pedido desse modelo?");
  if (answer === true) {
    let body = {
      model: model,
      neck: neck,
      material: material,
      image: image,
      owner: user,
      author: author,
    };
    sendReadyPromise(body);
  } else {
    alert("Pedido cancelado");
  }
};

const sendReadyPromise = (body) => {
  const promise = axios.post(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
    body
  );
  promise.then(alert("Pedido feito com sucesso!"), getPromise());
  promise.catch("Algo deu errado!");
};
showUser();
getPromise();
