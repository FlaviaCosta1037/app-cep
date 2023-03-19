//variável criada para capturar lista informada no html
lista = document.querySelector('ul')
//variável criada para capturar informações dentro do formulário no html
formularioCep = document.querySelector('form')
//variável criada para capturar o input do cep no html
cep = document.querySelector('#cep')
endereco = document.querySelector('#buscar-nome')
nomeUf = document.querySelector('#uf')
nomeCidade = document.querySelector('#nome-cidade')
nomeRua = document.querySelector('#nome-rua')

//testes para verificar se os dados estão sendo realmente capturados
console.log(lista)
console.log(formularioCep)
console.log(uf)
console.log(nomeCidade)
console.log(nomeRua)


//Função criada pelo professor em sala de aula
function buscaCep() {
  fetch('https://viacep.com.br/ws/' + cep.value + '/json/')
    .then(function(response) {
      return response.json();
    })
    .then(function(cep) {
      lis = ''
      for (let li in cep) {
        console.log(cep[li])
        lis += '<li>' + cep[li] + '</li>'
      }
      lista.innerHTML = lis
      console.log(cep);
    })

  console.log('Buscando cep na função', cep.value)
}

//função criada para utilização da api buscacep e demonstração dos dados dentro dos inputs do formulário no html
function buscaCep2() {
  //captura dos valores do input cep automatizado através do buscacep
  fetch('https://viacep.com.br/ws/' + cep.value + '/json/')
    .then(function(response) {
      return response.json();
    })
    //funcao de chamada dos ids. Trazendo os valores contidos no cep.
    .then(function(cep) {
      document.getElementById('rua').value = cep.logradouro;
      document.getElementById('bairro').value = cep.bairro;
      document.getElementById('cidade').value = cep.localidade;
      document.getElementById('estado').value = cep.uf;
    })

  console.log('Buscando cep na função', cep.value)
}

//
function buscaNome() {
  fetch(`https://viacep.com.br/ws/${nomeUf.value}/${nomeCidade.value}/${nomeRua.value}/json/`)
    .then(function(response) {
      return response.json()
    })
    .then(function(enderecos) {
      //For para percorrer todos os ids e trazer as informações dos inputs para o formulário 
      for (let endereco of enderecos) {
        //teste
        console.log('teste endereco', endereco)
        document.getElementById('rua').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
      }
    })

  // Testes 
  console.log('Buscando uf na função', nomeUf.value)
  console.log('Buscando cidade na função', nomeCidade.value)
  console.log('Buscando rua na função', nomeRua.value)
}

