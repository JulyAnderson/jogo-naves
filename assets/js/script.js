function start (){ // incio da função start

    $("#inicio").hide(); //só é possivel chamar a div dessa forma devido o framework jquery

    $("#fundoGame").append("<div id='jogador' class = 'anima1'></div>"); //comando append cria novas div dentro das divs apontada
    $("#fundoGame").append("<div id='inimigo1'class = 'anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //variaveis do jogo

}// fim da função start