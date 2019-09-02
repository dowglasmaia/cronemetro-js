/**@author Dowglas Maia */

/* inserindo ZERO a esquer de numero for menor que 10(DEZ) */
function zero_esquerda(numero) {
    if (numero < 10) {
        return "0" + numero.toString();
    } else {
        return numero.toString();
    }
}

/* VARIAVEIS*/
var iniciando = false, hora_inicio, hora_atual, init_cronometro, tempo_passao, horas, minutos, segundos, milissegundos, resto;

/* Executando o Cronometro*/
document.getElementById("btn-comecar").onclick = function () {
   
    if (!iniciando) {
        iniciando = true; //inicia o cronemetro
        document.getElementById("btn-comecar").innerHTML = "Parar";

        //começar o cronometro
        if (!hora_inicio) {
            hora_inicio = new Date().getTime();
        } else {
            //pegando hora de inicio e descontando o tempo passado
            hora_inicio = new Date().getTime() - tempo_passao;
        }

        init_cronometro = window.setInterval(
            function () {
                hora_atual = new Date().getTime();
                tempo_passao = hora_atual - hora_inicio;

                //formatando o relogio
                horas = Math.floor(tempo_passao / 3600000);
                resto = tempo_passao - (horas * 3600000);

                minutos = Math.floor(resto / 60000);
                resto -= (minutos * 60000);

                segundos = Math.floor(resto / 1000);
                resto -= (segundos * 1000);

                milissegundos = resto;

                //saida na pagina
                document.getElementById("dados").innerHTML = zero_esquerda(horas) + ":" + zero_esquerda(minutos) + ":" + zero_esquerda(segundos) + " "
                    + zero_esquerda(milissegundos);

            }, 10);

    } else {
        window.clearInterval(init_cronometro); // parando cronometro
        iniciando = false;
        document.getElementById("btn-comecar").innerHTML = "Começar";
    }
}

//ZERAR O CRONOMETRO
document.getElementById("btn-zerar").onclick = function () {
    clearInterval(init_cronometro); //para cronometro
    tempo_passao = 0;
    iniciando = false;
    document.getElementById("dados").innerHTML = "00:00:00 000";
    document.getElementById("btn-comecar").innerHTML = "Começar";
}

