let participantes = [
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 01, 19, 23),
    dataCheckin: new Date(2024, 2, 01, 20, 20)
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 02, 19, 23),
    dataCheckin: new Date(2024, 2, 05, 20, 20)
  },
  {
    nome: "João Pedro",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 2, 03, 14, 12),
    dataCheckin:null
  },
  {
    nome: "Cleiton Souza",
    email: "cleiton@gmail.com",
    dataInscricao: new Date(2024, 2, 30, 08, 20),
    dataCheckin: new Date(2024, 2, 04, 09, 45)
  },
  {
    nome: "Dani Leão",
    email: "dani@gmail.com",
    dataInscricao: new Date(2024, 2, 05, 11, 30),
    dataCheckin: new Date(2024, 2, 05, 12, 15)
  },
  {
    nome: "Erik Fig",
    email: "erik@gmail.com",
    dataInscricao: new Date(2024, 2, 19, 13, 45),
    dataCheckin: new Date(2024, 2, 06, 14, 30)
  },
  {
    nome: "Filipe Deschamps",
    email: "filipe@gmail.com",
    dataInscricao: new Date(2024, 2, 07, 16, 00),
    dataCheckin: new Date(2024, 2, 07, 17, 05)
  },
  {
    nome: "Laura Beatris",
    email: "laura@gmail.com",
    dataInscricao: new Date(2024, 2, 08, 09, 50),
    dataCheckin: null
  },
  {
    nome: "Robson Marques",
    email: "robson@gmail.com",
    dataInscricao: new Date(2024, 2, 18, 17, 33),
    dataCheckin: new Date(2024, 2, 10, 22, 47)
  },
  {
    nome: "Simone Amorim",
    email: "simone@gmail.com",
    dataInscricao: new Date(2024, 2, 10, 20, 21),
    dataCheckin: new Date(2024, 2, 10, 21, 30)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

  // condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes) {
    // faça alguma coisa
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document
    .querySelector('tbody')
    .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante já existe
  const participanteExiste = participantes.find((p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulário
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find((p) =>  p.email == event.target.dataset.email
  )
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  
  // atualizar a lista de participantes
  atualizarLista(participantes)
}