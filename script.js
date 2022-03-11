let listaAtores = [
    {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
    },
    {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
    {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
    },
    {
      nome: 'Joaquin Phoenix',
      personagem: 'Coringa',
      filme: 'Joker'
    },
]

function escrever(){
  for(let contador = 0; contador <= listaAtores.length - 1; contador++){

  var nome = listaAtores[contador].nome
  var personagem = listaAtores[contador].personagem
  var filme = listaAtores[contador].filme
  
  document.getElementById('conteudo').innerHTML += (`<div id="caixa"><h1 id="caixa-texto h1">${nome}</h1><p id="caixa-texto">Interpreta o personagem ${personagem} no filme ${filme}</p></div>`)
  }
}

escrever()