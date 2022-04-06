var jogador = null;
var selecaoJogador = document.getElementById("jogador-selecionado");
var ai = null;
function selecionarQ(id){
    console.log("clicou no botao " + id);
    var quadrado = document.getElementById(id);
    jogador = "X";
    quadrado.innerHTML = jogador; 
    quadrado.style.color = #000;
    
}
function selecionarJogador(){
    jogador = selecaoJogador;
}