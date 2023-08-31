const motos = [
  {
    modelo: "Harley-Davidson Street Glide Special 2023 FLHXS",
    preco: 80900,
    imagem: "img/glide.png",
    status: "Nova",
  },
  {
    modelo: "Harley-Davidson Low Rider ST 2023 FXLRST",
    preco: 42490,
    imagem: "img/lowrider.webp",
    status: "Seminova",
  },
  {
    modelo: "Harley-Davidson Low Rider S 2021 FXLRS",
    preco: 73990,
    imagem: "img/lowriders.png",
    status: "Usada",
  },
  {
    modelo: "Harley-Davidson Iron 883 2021 XL 883N",
    preco: 73990,
    imagem: "img/iron.png",
    status: "Nova",
  },
  {
    modelo: "Harley-Davidson Electra Glide Highway King 2023 FLHFB",
    preco: 73990,
    imagem: "img/electra.png",
    status: "Nova",
  },
  {
    modelo: "Honda XRE-190 2023",
    preco: 23990,
    imagem: "img/xre190.webp",
    status: "Nova",
  },
  {
    modelo: "Honda CB 500X",
    preco: 41600,
    imagem: "img/cb500x.png",
    status: "Nova",
  },
  {
    modelo: "Honda CB 1000R Black Edition",
    preco: 87990,
    imagem: "img/1000r.png",
    status: "Nova",
  },
  {
    modelo: "Kawasaki Ninja 300",
    preco: 33990,
    imagem: "img/ninja300.png",
    status: "Nova",
  },
  {
    modelo: "Kawasaki Versys 1000 Grand Tourer D",
    preco: 73990,
    imagem: "img/versys.png",
    status: "Nova",
  },
  {
    modelo: "BMW R 1250 GS Adventure",
    preco: 127990,
    imagem: "img/r1250.webp",
    status: "Nova",
  },
  {
    modelo: "BMW K 1600 GTL",
    preco: 300000,
    imagem: "img/k1600.png",
    status: "Nova",
  },
];

const catalogo = document.getElementById("catalogo"); // mostra todas as motos

const semResultados = document.createElement("p");
semResultados.innerText = "Não encontramos esse modelo disponível em nosso catálogo.";

const searchInput = document.getElementById("search"); // barra de pesquisa

function exibirMotos(motos) {
  // limpa o catálogo antes de exibir as novas motos
  catalogo.innerHTML = "";


  if (motos.length === 0) { // se não houver resultados, exibe o elemento "semResultados"
    catalogo.appendChild(semResultados);
  } else {
  // adiciona as motos filtradas no catálogo
  motos.forEach((moto) => {
    const div = document.createElement("div");
    div.classList.add("moto");
    div.innerHTML = `
    <span><i class='bx bxs-cog'></i>${moto.status}</span>
      <h2>${moto.modelo}</h2>
      <img src="${moto.imagem}">
      <b>R$ ${moto.preco.toFixed(2)}</b>
    `;
    catalogo.appendChild(div);
  });
}
}

function filtrarMotos(termo) {
  const motosFiltradas = motos.filter((moto) =>
    moto.modelo.toLowerCase().includes(termo.toLowerCase())
  );
  exibirMotos(motosFiltradas);
}

// ordena as motos por ordem alfabética
motos.sort(function (a, b) {
  var modeloA = a.modelo.toUpperCase();
  var modeloB = b.modelo.toUpperCase();
  if (modeloA < modeloB) {
    return -1;
  }
  if (modeloA > modeloB) {
    return 1;
  }
  return 0;
});

// exibe todas as motos ao carregar a página
exibirMotos(motos);

// atualiza as motos sempre que o usuário digitar algo na barra de pesquisa
searchInput.addEventListener("input", (event) => {
  filtrarMotos(event.target.value);
});

const marcas = document.getElementById("marcas");

const imagens = [
  "img/suzuki.png",
  "img/yamaha.png",
  "img/harley.png",
  "img/kawasaki.png",
  "img/honda.png",
  "img/bmw.png",
  "img/suzuki.png",
  "img/yamaha.png",
  "img/harley.png",
  "img/kawasaki.png",
  "img/honda.png",
  "img/bmw.png",
  "img/suzuki.png",
  "img/yamaha.png",
  "img/harley.png",
  "img/kawasaki.png",
  "img/honda.png",
  "img/bmw.png",
  "img/bmw.png",
  "img/suzuki.png",
  "img/yamaha.png",
  "img/bmw.png",
  "img/suzuki.png",
  "img/yamaha.png",
];

imagens.forEach((imagem) => {
  const img = document.createElement("img");
  img.src = imagem;
  marcas.appendChild(img);
});

