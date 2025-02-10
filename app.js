const entrada = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let listaNomes = [];

// Estilização
ulListaAmigos.style.width = '600px';
ulListaAmigos.style.textAlign = 'center';

// Função para limpar o campo de entrada
function limparCampo() {
    entrada.value = '';
}
limparCampo();

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = entrada.value.trim();

    // Verificando se o campo está vazio
    if (entrada.value === '') {
        alert("O campo está vazio!");
        return;
    }

    // Verificando se existe caractere
    if (!existeChar(nomeAmigo)) {
        alert("O nome não contém caracteres válidos!");
        return limparCampo();
    }

    // Verificar se o nome digitado já está na lista de nomes
    if (listaNomes.includes(nomeAmigo)) {
        alert(`O nome "${nomeAmigo}" já está na lista.`);
        return limparCampo();
    }

    // Acrescentando nome na lista
    listaNomes.push(nomeAmigo);
    const novoLi = document.createElement("li");
    novoLi.innerText = nomeAmigo;
    ulListaAmigos.appendChild(novoLi);

    console.log(`Nome digitado: ${nomeAmigo}`);
    console.log(listaNomes);

    return limparCampo();
}

// Função para sortear um amigo
function sortearAmigo() {
    console.log(`Sorteando amigo...`);

    // Verificando se há nomes na lista
    if (listaNomes.length <= 0) {
        console.log(`Não há nomes na lista.`);
        alert(`Não há nomes na lista`);
        return;
    }

    // Sorteando um nome
    let indiceDoNome = gerarNumeroAleatorio(listaNomes.length) - 1;
    while (isNaN(indiceDoNome) || indiceDoNome < 0) {
        console.log(`ERROR: Variável indiceDoNome é NaN ou fora do intervalo: ${indiceDoNome}`);
        indiceDoNome = gerarNumeroAleatorio(listaNomes.length) - 1;
    }
    const nomeSorteado = listaNomes[indiceDoNome];
    console.log(`Nome sorteado: ${nomeSorteado}`);
    resultado.innerText = `O amigo sorteado foi: ${nomeSorteado}`;

    // Removendo nome sorteado da lista
    listaNomes.splice(indiceDoNome, 1);
    ulListaAmigos.removeChild(ulListaAmigos.children[indiceDoNome]);
    console.log(listaNomes);
}

// Função que retorna um número aleatório de 1 a x
let listNumRandom = [];
function gerarNumeroAleatorio(limite) {
    console.log(`Gerando numero aleatorio...`);

    if (limite === undefined || isNaN(limite)) {
        console.log(`(ERRO!) O parâmetro na função gerarNumeroAleatorio() não foi definido, ou não é um número: ${limite}`);
        return NaN;
    }

    //gerando numero aleatorio
    let numRamdom = parseInt(Math.random() * limite + 1);
    // limpando a lista de números sorteados se ela for maior ou igual ao limite
    listNumRandom = listNumRandom.length >= limite ? [] : listNumRandom;

    // Verificando se o número gerado já foi sorteado
    if (listNumRandom.includes(numRamdom) || isNaN(numRamdom)) {
        return gerarNumeroAleatorio(limite);
    } else {
        listNumRandom.push(numRamdom);
        return numRamdom;
    }
}

// Função para verificar se existe algum caractere dentro da string enviada por parâmetro
function existeChar(texto) {
    console.log(`Verificando se o texto "${texto}" contém caractere...`);
    return texto.trim().length > 0;
}