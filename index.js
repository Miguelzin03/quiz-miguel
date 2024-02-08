const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 1 // A resposta correta é a segunda opção, "let myVar;"
    },
    {
      pergunta: "Qual desses métodos converte uma string para um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "parseFloat()",
      ],
      correta: 0 // A resposta correta é a primeira opção, "parseInt()"
    },
    {
      pergunta: "Qual é o operador usado para comparação estrita (valor e tipo de dados iguais) em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1 // A resposta correta é a segunda opção, "==="
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0 // A resposta correta é a primeira opção, "// Este é um comentário"
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "unshift()",
        "concat()",
      ],
      correta: 0 // A resposta correta é a primeira opção, "push()"
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "32",
        "5",
        "7",
      ],
      correta: 0 // A resposta correta é a primeira opção, "32"
    },
    {
      pergunta: "Qual é a função usada para obter o comprimento de uma string em JavaScript?",
      respostas: [
        "length()",
        "size()",
        "count()",
      ],
      correta: 0 // A resposta correta é a primeira opção, "length()"
    },
    {
      pergunta: "Qual é o resultado da expressão 5 == '5' em JavaScript?",
      respostas: [
        "true",
        "false",
        "null",
      ],
      correta: 0 // A resposta correta é a primeira opção, "true"
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 0 // A resposta correta é a primeira opção, "&&"
    },
    {
      pergunta: "Qual é o método que remove o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0 // A resposta correta é a primeira opção, "pop()"
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  
  //loop ou laço de repetição
  //colocou as perguntas na tela através do template
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    //colocou as respostas na tela através do template
    for(let resposta of item.respostas) {
      //clonou as perguntas
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
          alert('Boaaa, você acetou!')
        }
        else{
          alert('Poxaaa, você errou. Está precisanso estudar mais heinn!')
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
       
      }
      
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    //removeu o 'resposta A'
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}