function tocaSom(idAudio) {
     const audio = document.querySelector(idAudio)

     if(audio != null && audio.localName === "audio"){
        audio.play()
     } else{
        console.log("Audio nao encontrado ou seletor não encontrado")
     }
}

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]

    const instrumento = tecla.classList[1]

    const idAu = `#som_${instrumento}`
    
    tecla.onclick = function (){
        tocaSom(idAu)
    }

    tecla.onkeydown = function (evento){
        if(evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add("ativa")
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove("ativa")
    }
    
}