function tocaSom(idAudio) {
    document.querySelector(idAudio).play()
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom //nao utiliza o () depois do tocaSomPom para nao ser executado assim que a pagina carregar

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]

    const instrumento = tecla.classList[1]

    const idAu = `#som_${instrumento}`
    
    tecla.onclick = function (){
        tocaSom(idAu)
    }
    
}