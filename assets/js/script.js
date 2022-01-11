function start (){ // incio da função start

    $("#inicio").hide(); //só é possivel chamar a div dessa forma devido o framework jquery

    $("#fundoGame").append("<div id='jogador' class = 'anima1'></div>"); //comando append cria novas div dentro das divs apontada
    $("#fundoGame").append("<div id='inimigo1'class = 'anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //variaveis do jogo
	var velocidade = 5;
	var posicaoY = parseInt(Math.random()*334)
    var jogo = {};
	var TECLA ={
		W:87,
		S:83,
		D:68
	};
	var podeAtirar = true;


	jogo.pressionou = [];

	//Verifica se o usuário pressionou alguma tecla

	$(document).keydown (function(e){
	jogo.pressionou[e.which] = true;
	});

	$(document).keyup (function(e) {
	jogo.pressionou[e.which] = false;
	});
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	
	movefundo();
	movejogador();
	moveinimigo1();
	moveinimigo2();
	moveamigo();
	disparo();


	} // Fim da função loop()

//Função que movimenta o fundo do jogo
	
	function movefundo() {
	
	esquerda = parseInt($("#fundoGame").css("background-position"));
	$("#fundoGame").css("background-position",esquerda-1);
	
	} // fim da função movefundo()

	function movejogador() {

	if (jogo.pressionou[TECLA.W]){

		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top", topo-10);

			if (topo <=10) {
			$("#jogador").css("top", topo+10);
			}
	}

	if (jogo.pressionou[TECLA.S]){

		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top", topo-10);

			if (topo <=434) {
			$("#jogador").css("top", topo+10);
			}
	}

	if (jogo.pressionou[TECLA.D]){
		//chama função disparo
		disparo();
	}
}// Fim da função movejogador()

	function moveinimigo1(){ // inicio da função moveinimigo1()

		posicaoX= parseInt($("#inimigo1").css("left"));
		$("#inimigo1").css("left",posicaoX-velocidade);
		$("#inimigo1").css("top",posicaoY);

			if (posicaoX <= 0){

			posicaoY = parseInt(Math.random()*334);
			$("#inimigo1").css("left",694);
			$("#inimigo1").css("top",posicaoY);

			}

	}//fim da função moveinimigo1()

	function moveinimigo2(){ // inicio da função moveinimigo2()

		posicaoX= parseInt($("#inimigo2").css("left"));
		$("#inimigo2").css("left",posicaoX-3);
		

			if (posicaoX <= 0){

			var posicaoY = parseInt(Math.random()*334);
			$("#inimigo2").css("left",775);
			

			}

	}//fim da função moveinimigo2()

	function moveamigo(){

		posicaoX = parseInt($("#amigo").css("left"));
		$("#amigo").css("left", posicaoX +1 );

			if (posicaoX > 906 ){

			$("#amigo").css("left",0);

			}

	}//Fim da função moveamigo ()


}// fim da função start