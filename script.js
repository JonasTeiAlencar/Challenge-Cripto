function criptografa() {
    var output = document.querySelector("#textosaida");

    document.getElementById("digitetexto").style.display = "none";
    document.getElementById("resultado").style.display = "inline-block";

    // pega texto do input

    var input = document.querySelector("#textArea");
    var mensagem = input.value;
    var novaMensagem = "";

    //transforma em array

    var listaCaractere = mensagem.split("");

    //usa for para percorrer array

    for(var i = 0; i < listaCaractere.length; i++){
        if(listaCaractere[i] == "a") {
            listaCaractere[i] = "ai";
        }

        else if(listaCaractere[i] == "e") {
            listaCaractere[i] = "enter";
        }

        else if(listaCaractere[i] == "i") {
            listaCaractere[i] = "imes";
        }

        else if(listaCaractere[i] == "o") {
            listaCaractere[i] = "ober";
        }

        else if(listaCaractere[i] == "u") {
            listaCaractere[i] ="ufat";
        }

        novaMensagem = novaMensagem + listaCaractere[i];

    }
    output.value = novaMensagem
}

function descriptografa() {
    var output = document.querySelector("#textosaida");

    document.getElementById("digitetexto").style.display = "none";
    document.getElementById("resultado").style.display = "inline-block";

    //pega texto do input

    var input = document.querySelector("#textArea");
    var mensagem = input.value;

    //decodificando a mensagem
    mensagem = mensagem.replaceAll("ai", "a");
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u")


    //enviando a mensagem criptograda para o output

    output.value = mensagem;
}

function copia() {
    var output = document.querySelector("#textosaida");
    navigator.clipboard.writeText(output.value);
    alert("Seu texto foi copiado com sucesso")
}