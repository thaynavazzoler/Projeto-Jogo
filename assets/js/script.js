console.log("JS está ok")

//cria função
//para verificar se os inputs estao funcionando

function verificarInputs() {
    // Verificar se os inputs estão trazendo valor
    //Para isso precisamos de variaveis que coletam e armazenam os inputs
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    console.log(titulo);
    console.log(preco);
    console.log(descricao);
    console.log(plataforma);
    console.log(imgLink);


    //verificar se os inputs estão vazios
    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {
        //verificar se o if ta funcionando
        console.log("Os inputs estão vazios");
        //se ele estiver funcionando, a condicao é true

        //nos deparamos com uma necessidade que pe alertar e mostrar para o usuario o erro
        //vamos criar uma funcao que envie uma msgm de erro ou sucesso
        envieMsg('Preencha todos os campos', 'erro')
        return true;

    }else if(!isURLValida(imgLink)){
        envieMsg("url invalida")
        return true;
    } else {
        console.log("Os inputs estão preenchidos");
        envieMsg('Cadastrado com sucesso', 'sucesso')
        return false


    }
    
}


// criar funcao de erro ou secess que altere o html da div da mensgaem

function envieMsg(msg, tipoMsg) {
    //essa funcao vai colocar uma msgm que vem parametro na tela
    // é usar as tecnicas de html e js

    let msgDiv = document.getElementById("msg")
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class='${tipoMsg}'> ${msg}<p>
    `
    msgDiv.innerHTML = msgParaTela

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}


//agora que tem dados validados
// temos os valores dos inputs passando para variaveis
//agora precisa criar a classe no singular
//ou seja se esta trabalhando com jogos, agora cria como jogo

class Jogo {
    constructor(titulo, preco, descricao, plataforma, imgLink) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;


    }

}

// apos criar constructor, vamos verificar se o constructor esta ok
//const jogoteste = new Jogo("Teste", "222", "descteste", "steam", "url");
//console.log(jogoteste);
//se estiver obejeto no console, ele foi construido.

//como compor jogos?
//pegar valores dos inputs e instanciar um obejto do tipo jogo, mas tem que ser genérico

function comporJogo() {
    //pra compor pega valores dos inputs
    //para isso, precisa criar variavel para cada input
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    const jogo = new Jogo(titulo, preco, descricao, plataforma, imgLink);

    //agora testa se o obejeto esta pegando os valores do input
    console.log(jogo);
    bibliotecaJogos.adicionar(jogo);
    console.log(bibliotecaJogos);
    //agora eu preciso armazenaer esse jogo, em uma lsira
    //entao eu preciso criar uma classe de lista de jogos.
    //preciso adicionar jogo da linha 98 dentro da lista da linha 110
    //entao vou criar metodo da linha 98
    renderizarConteudo();

 
    
}

class ListaJogos {
    constructor() {
        this.listaJogosArray = [];

    }

    adicionar(parametro) {
        //this.listaJogosArray.push(parametro);
        if (verificarInputs() == false && isURLValida(parametro.imgLink)== true) {
            this.listaJogosArray.push(parametro);
            LimparInputs();
        }
    }
    remove(parametro){
        this.listaJogosArray.filter(this.listaJogosArray==)
    }
    //apos criar, vamos testar oc onstructor 
    //apos testado vamos criar o meto que adiciona a instancia de varios param
}
//const listaTeste = new ListaJogos;
//console.log(listaTeste);

//crio a lista que vou utiliza para armazenar meus objetos
const bibliotecaJogos = new ListaJogos();
console.log(bibliotecaJogos);

function LimparInputs() {
    document.getElementById("input-titulo").value = "";
    document.getElementById("input-preco").value = "";
    document.getElementById("input-descricao").value = "";
    document.getElementById("input-plataforma").value = "";
    document.getElementById("input-imgLink").value = "";
}

console.clear();

function renderizarConteudo() {
    const listaHTML = document.getElementById("container-lista");
    listaHTML.innerHTML="";

   const array = bibliotecaJogos.listaJogosArray;

    array.forEach(jogo => {
        const jogoDiv = `
        <div class='jogoDetalhe'>
        <p>Titulo: ${jogo.titulo}</p>
        <p>Titulo: ${jogo.preco}</p>
        <p>Titulo: ${jogo.descricao}</p>
        <p>Titulo: ${jogo.plataforma}</p>
        <img src="${jogo.imgLink}" alt="${jogo.titulo}"/>
   
        <buttonid="botao-RemoverJogo" class="button" onclick="removerJogo">${jogo.remove}</button>
   
        </div>
        `
        listaHTML.innerHTML += jogoDiv;
    });
}

function isURLValida(imgLink) {
    if(imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

