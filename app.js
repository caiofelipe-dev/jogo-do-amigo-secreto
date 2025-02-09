const entrada = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

ulListaAmigos.style.width = '600px';
ulListaAmigos.style.textAlign = 'center';

let nomeAmigo;
let listaNomes = ["Caio", "Rodrigo", "Carla", "joana"];

function limparCampo() {
    document.querySelector('input').value = null;
}
limparCampo();


function adicionarAmigo() {
    nomeAmigo = entrada.value;
    const novoLi = document.createElement("li");

    // Verificando se o Campo está vazio.
    if(entrada.value == '') {
        alert("O campo está vazio!");
    } else {
        // Verificando se existe caractere.
        if(existirChar(nomeAmigo)) {
            // Removendo espaço desnecessário.
            nomeAmigo = nomeAmigo.trim();

            // Verificar se o nome digitado já está na lista de nomes.
            if(listaNomes.includes(nomeAmigo)) {
                alert(`O nome "${nomeAmigo}" já está na lista.`);
            } else {
                listaNomes.push(nomeAmigo);

                for(i=0; i<listaNomes.length; i++) {
                    novoLi.innerText = listaNomes[i];
                    ulListaAmigos.appendChild(novoLi);
                }
                
                console.log(`Nome digitado: ${nomeAmigo}`);
                console.log(listaNomes);
            }
        }
    }
    limparCampo();
}

function sortearAmigo() {
    console.log(`Sorteando amigo...`);
    let numAleatorio = parseInt(gerarNumeroAleatorio(listaNomes.length)) - 1;
    let nomeSorteado = listaNomes[numAleatorio];
    console.log(numAleatorio);
    console.log(nomeSorteado);

    listaNomes.splice(numAleatorio, 1);
    // ulListaAmigos.removeChild(ulListaAmigos.children[numAleatorio]);
    console.log(listaNomes);
}

let listNumRandom = [];
function gerarNumeroAleatorio(limite) {
    console.log(`Gerando numero aleatorio...`);
    if(limite === undefined) {
        console.log(`(ERRO!) O parâmetro na função gerarNumeroAleatorio() não foi definido: ${limite}`);
    } else {
        let numRamdom = parseInt(Math.random() * parseInt(limite) + 1);
        listNumRandom = listNumRandom.length == limite ? listNumRandom = [] : listNumRandom;

        if(listNumRandom.includes(numRamdom)) {
            gerarNumeroAleatorio(limite);
        } else {
            listNumRandom.push(numRamdom);
            console.log(Number.isInteger(numRamdom));
            return numRamdom;
        }
    }
}


// Verifica se existe algum caractere dentro da string enviada por parâmetro.
function existirChar(texto) {
    console.log(`Verificando se o texto "${texto}" contém caractere...`);
    let quantidadeEspacos = 0;
    for(i=0; i<texto.length; i++) {
        if(texto[i] == ' ') {
            quantidadeEspacos++;
        } else {
            quantidadeEspacos = 0;
            break;
        }
    }
    if(quantidadeEspacos == 0) {
        console.log(`O texto "${texto}" contém caractere.`);
        return true;
        // Existe Caractere.
    } else {
        console.log(`O texto "${texto}" NÃO contém caractere.`);
        return false;
        // Não existe Caractere.
    }
}