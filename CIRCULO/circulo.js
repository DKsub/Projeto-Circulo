const circuloProgresso = document.querySelector("#circuloProgresso")
const inputNum = document.querySelector("#inputNum")
const btnEnviar = document.querySelector("#btnEnviar")
const divNumero = document.querySelector(".numero")

btnEnviar.addEventListener("click", () =>{
    divNumero.innerHTML = inputNum.value + '%'
    circuloProgresso.style.strokeDashoffset = 440 - (440 * inputNum.value) / 100
})

const criarNum= () =>{

    let num =  Math.round(Math.random()*100)

    divNumero.innerHTML = num + '%'
    circuloProgresso.style.strokeDashoffset = 440 - (440 * num) / 100

    }

setInterval(criarNum, 5000)