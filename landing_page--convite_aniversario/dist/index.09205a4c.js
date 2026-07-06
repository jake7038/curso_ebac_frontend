//script para a contagem da data
var dataEvento = new Date("November 17, 2024 03:24:00");
const timeStampDoEvento = dataEvento.getTime();
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const conta = timeStampDoEvento - timeStampAtual;
    const dias = Math.floor(conta / 86400000);
    const horas = Math.floor(conta % 86400000 / 3600000);
    const minutos = Math.floor(conta % 3600000 / 60000);
    const segundos = Math.floor(conta % 60000 / 1000);
    document.getElementById("contador").innerHTML = `${dias}D ${horas}H ${minutos}M ${segundos}S`;
    if (conta < 0) {
        clearInterval(contaHoras);
        document.getElementById("contador").innerHTML = `Nada`;
    }
}, 1000);

//# sourceMappingURL=index.09205a4c.js.map
