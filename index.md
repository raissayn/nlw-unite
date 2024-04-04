```js
// variaveis
const mensagem = "Oi, tudo bem?"

// tipos de dados 
  // number
  // string
// função
alert(mensagem)

const participante = {} - objeto jv

const participante = {
 nome: "Raissa Nunes"
 email: "raissan@gmail.com"
 dataInscricao:new Date(2024, 2, 22, 19, 20)
 dataChecKIn: new Date(2024, 2, 25, 22, 00)
}
// array


let participantes = [
  {
    
  nome: "Raissa Nunes",
  email: "raissan@gmail.com",
  dataInscricao:new Date(2024, 2, 22, 19, 20),
  dataChecKIn: new Date(2024, 2, 25, 22, 00)
  }
]

  // estrutura de repetição - loop
  for (let participante of participantes) {
    //faça alguma coisa aqui
    //enquanto tiver participantes nessa lista
  }
  ```

  let participantes = [
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscrição: new Date(2024, 2, 01, 19, 23),
    dataCheckin: new Date(2024, 2, 01, 20, 20)
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscrição: new Date(2024, 2, 02, 19, 23),
    dataCheckin: new Date(2024, 2, 05, 20, 20)
  },
  {
    nome: "João Pedro",
    email: "joao@gmail.com",
    dataInscrição: new Date(2024, 2, 03, 14, 12),
    dataCheckin: new Date(2024, 2, 03, 15, 35)
  },
  {
    nome: "Cleiton Souza",
    email: "cleiton@gmail.com",
    dataInscrição: new Date(2024, 2, 04, 08, 20),
    dataCheckin: new Date(2024, 2, 04, 09, 45)
  },
  {
    nome: "Dani Leão",
    email: "dani@gmail.com",
    dataInscrição: new Date(2024, 2, 05, 11, 30),
    dataCheckin: new Date(2024, 2, 05, 12, 15)
  },
  {
    nome: "Erik Fig",
    email: "erik@gmail.com",
    dataInscrição: new Date(2024, 2, 06, 13, 45),
    dataCheckin: new Date(2024, 2, 06, 14, 30)
  },
  {
    nome: "Filipe Deschamps",
    email: "filipe@gmail.com",
    dataInscrição: new Date(2024, 2, 07, 16, 00),
    dataCheckin: new Date(2024, 2, 07, 17, 05)
  },
  {
    nome: "Laura Beatris",
    email: "laura@gmail.com",
    dataInscrição: new Date(2024, 2, 08, 09, 50),
    dataCheckin: new Date(2024, 2, 08, 10, 55)
  },
  {
    nome: "Robson Marques",
    email: "robson@gmail.com",
    dataInscrição: new Date(2024, 2, 09, 17, 33),
    dataCheckin: new Date(2024, 2, 09, 18, 47)
  },
  {
    nome: "Simone Amorim",
    email: "simone@gmail.com",
    dataInscrição: new Date(2024, 2, 10, 20, 21),
    dataCheckin: new Date(2024, 2, 10, 21, 30)
  }
];
const criarNovoParticipante = (participante) =>{
  const dataInscricao = dayjs(Date.now()).to (participante.dataInscricao)
  const dataChecKIn = dayjs(Date.now()).to (participante.dataChecKIn)

  return `
  <tr>
        <strong>
        ${participante.nome}
        </strong>
        <br> 
        <small>
        ${participante.email}
        </small>
      </td>
      <td> ${dataInscricao} </td>
      <td> ${dataChecKIn} </td>
    </tr>
  `
}
const atualizarlista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for (let participante of participantes) {
    output = output +criarNovoParticipante(participante)
    //faça alguma coisa
  }

  //substituir informação do HTML
  document.querySelector('tbody').innerHTML = criarNovoParticipante(participante)
} 

atualizarlista(participantes)
```css
body {
  background-color: #121214;
  color: white;
}
```