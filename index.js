var setadireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita(){
    Leonardo.style ="display:none",
    Bruna.style ="display:flex"
    Samantha.style ="margin-left= 250px"
    setaesquerda.style ="display:flex"
    setadireita.style ="display:none"
}

function RolarParaEsquerda(){
    Leonardo.style ="display:flex"; 
    Bruna.style ="display:none"
    setaesquerda.style ="display:none"
    setadireita.style ="display:flex"
}

