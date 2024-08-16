var carrinho = 0;

function MostrarCombos() {
    var Container = document.querySelector(".Container");

    Container.innerHTML = "";

    for (i=0; i < combos.length; i++) {
       // console.log("Descrição: ", combos[i].descricao);
       // console.log("Preço: ", combos[i].preço);
        var combo = document.createElement("div");
        combo.classList.add("combo");

        combo.innerHTML = `
        <img src="${combos[i].url}">
        <p>${combos[i].descricao}</p>
        <h2>${combos[i].preco}</h2>
        `;

        var btn = document.createElement("button");
        btn.innerHTML = "Comprar";
        btn.addEventListener("click", efetuarCompra);

        combo.appendChild(btn);

        Container.appendChild(combo);
    }
}

function efetuarCompra(event) {
    var pai = event.target.parentElement;

    var valor = Number(pai.children[2].innerHTML);

    carrinho = carrinho + valor;

    alert ("Valor Total: " + carrinho.toFixed(2));
}

MostrarCombos();