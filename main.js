//Criar constante com chave API
const key = 'e0283766cee7e7e70be7e75409ae8042'

//função para pegar o valor do meu input 
function Coletar() {
    let cidade = document.querySelector('.input-Cidade').value
    console.log(cidade);
    Dados(cidade)
}

//consumindo dados da APi openweather 
async function Dados(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json() )
    console.log(dados)
    ExibirDados(dados)
}

//função trocar dados na tela 
function ExibirDados(dados) {
    document.querySelector('.Cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.Temperatura').innerHTML = "Essa é a Temperatura: " + Math.floor(dados.main.temp) + " °C"
    document.querySelector('.Previsao').innerHTML = dados.weather[0].description
    document.querySelector('.Umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector('.img-Previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.Temperatura-Maxima').innerHTML = "Essa é a Temperatura Maxima: " + Math.floor(dados.main.temp_max) + " °C"
    document.querySelector('.Temperatura-Minima').innerHTML = "Essa é a Temperatura Minima: " + Math.floor(dados.main.temp_min) + " °C"

}  