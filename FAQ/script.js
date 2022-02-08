//Criando o saiba mais
let geral = document.querySelector('.containet span')
let geral1 = document.querySelector('.containet1 span')
let geral2 = document.querySelector('.containet2 span')
let geral3 = document.querySelector('.containet3 span')
let geral4 = document.querySelector('.containet4 span')
let geral5= document.querySelector('.containet5 span')

geral.addEventListener('click', function(){
  let conteudo = document.querySelector('.containet p')

  if(conteudo.classList.contains('mostrar')){
    conteudo.classList.remove('mostrar')
    geral.innerHTML = '- Mostrar resposta';

  }
  else {
    conteudo.classList.add('mostrar')
    geral.innerHTML = '- Ocultar resposta';
  }
})  
geral1.addEventListener('click', function(){
  let conteudo = document.querySelector('.containet1 p')

  if(conteudo.classList.contains('mostrar1')){
    conteudo.classList.remove('mostrar1')
    geral1.innerHTML = '- Mostrar resposta';

  }
  else {
    conteudo.classList.add('mostrar1')
    geral1.innerHTML = '- Ocultar resposta';
  }
})
geral2.addEventListener('click', function(){
    let conteudo = document.querySelector('.containet2 p')
  
    if(conteudo.classList.contains('mostrar2')){
      conteudo.classList.remove('mostrar2')
      geral2.innerHTML = '- Mostrar resposta';
  
    }
    else {
      conteudo.classList.add('mostrar2')
      geral2.innerHTML = '- Ocultar resposta';
    }
})  
geral3.addEventListener('click', function(){
    let conteudo = document.querySelector('.containet3 p')
  
    if(conteudo.classList.contains('mostrar3')){
      conteudo.classList.remove('mostrar3')
      geral3.innerHTML = '- Mostrar resposta';
  
    }
    else {
      conteudo.classList.add('mostrar3')
      geral3.innerHTML = '- Ocultar resposta';
    }
})  
geral4.addEventListener('click', function(){
    let conteudo = document.querySelector('.containet4 p')
  
    if(conteudo.classList.contains('mostrar4')){
      conteudo.classList.remove('mostrar4')
      geral4.innerHTML = '- Mostrar resposta';
  
    }
    else {
      conteudo.classList.add('mostrar4')
      geral4.innerHTML = '- Ocultar resposta';
    }
})  
geral5.addEventListener('click', function(){
    let conteudo = document.querySelector('.containet5 p')
  
    if(conteudo.classList.contains('mostrar5')){
      conteudo.classList.remove('mostrar5')
      geral5.innerHTML = '- Mostrar resposta';
  
    }
    else {
      conteudo.classList.add('mostrar5')
      geral5.innerHTML = '- Ocultar resposta';
    }
})  