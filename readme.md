# Treinamento JS Code

Repositório do Treinamento de JavaScript Vanilla para a [Code Empresa Júnior de Computação](https://codejr.com.br/).

Desenvolvido por [Isadora Ferreira](https://br.linkedin.com/in/isadorafer), com sugestões de [Gabriel Frasson](https://www.linkedin.com/in/gabriel-frasson-costa-bb4678212/).

| Sumário |
|---|
| [Javascript Básico](#javascript-básico) |
| [Métodos DOM](#métodos-dom) |
| [O Projeto](#o-projeto) |
| [Desafio Final](#desafio-final) |

## JavaScript Básico
[Documentação](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript) | [Tutorial (Inglês)](https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=1&t=2s) | [Tutorial (Português)](https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-java-script) | [CheatSheet](https://htmlcheatsheet.com/js/).

- Imprimindo algo no console:
  ```js
  console.log("Olá, mundo!");
  ```
- Declarando variáveis:
  ```js
  var variavelGlobal = 5; // variável global, que pode ser alterada, e que está disponível em todo o programa (não usar!)
  let variavelEscopadaMutavel = 2;  // variável escopada, que pode ser mudada
  const variavelEscopadaImutavel = 3.14;  // variável escopada, que não pode ser mudada (diretamente)
  ```
- Tomando Decisões:
  ```js
  // Condições com if-else:
  if (estaChovendo) {
    console.log("Leve o guarda-chuva!");
  } else if (estaEnsolarado) {
    console.log("Cadê o óculos de sol?");
  } else {
    console.log("Não esqueça o casaco!");
  }
  // É possível usar switch-case também
  // Expressões e Operadores: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  ```
- Repetindo Instruções:
  ```js
  // Loop for:
  for (let i = 0; i < 10; i++) {
    console.log("Contando: ", i);
  }
  for (comida in comidas) {
    console.log("Eu sei cozinhar: " comida);
  }
  // Há também o forEach e o forOf
  // Loop while:
  while (i > 0)
  {
    console.log("Eu sou maior que 0!");
    i--;
  }
  // do{}while() também existe
  ```
- Funções:
  ```js
  // Funções normais
  function somaNumeros(numA, numB) {
    return numA + numB;
  }
  x = somaNumeros(12, 5);
  // Função Anônima
  const subtraiNumeros = function(numA, numB) {
    return numA - numB;
  }
  y = subtraiNumeros(12, 5);
  // Arrow Functions
  const multiplicaNumeros = (numA, numB) => {
    return numA * numB; // é possível omitir o return e as chaves, escrevendo apenas (numA, numB) => numA * numB;
  }
  z = multiplicaNumeros(12, 5);
  ```
- Arrays:
  ```js
  const meusAnimais = ["Cachorro", "Gato", "Peixinho", "Papagaio", "Irmão"];
  // Adotei um novo animal: o Ganso! Ele vai para o fim do vetor:
  meusAnimais.push("Ganso");
  // Quero imprimir cada um dos meus animais:
  meusAnimais.forEach((animal) => {
    console.log(animal)
  });
  // Quero ordenar meus animais:
  meusAnimais.sort(); // Posso passar uma função para que o JS saiba COMO ordenar
  // Quero remover o primeiro animal, o Cachorro:
  let animalExcluido = meusAnimais.shift();
  // Vou adicionar ele de novo, no início:
  let animalAdicionado = meusAnimais.unshift("Cachorro");
  // Quero remover o último animal, o Ganso:
  meusAnimais.pop();
  // Quero encontrar se existe um Papagaio:
  let papagaio = meusAnimais.find((animal) => animal === "Papagaio");
  // Para saber mais sobre os métodos map(), reduce() e filter(): https://www.youtube.com/watch?v=nYRIRZBHQ3s
  ```
- Objetos:
  ```js
  const meusDados = {
    nome: "Gabriel",
    sobrenome: "Legal",
    idade: 20,
    "curso de graduação": "Ciência da Computação",
    nomeCompleto: function () {
      return (this.nome + " " + this.sobrenome);
    }
  }
  let meuNome = meusDados.nome;
  let meuSobrenome = meusDados[sobrenome];
  let minhaIdadeAnoQueVem = meusDados.idade++;  // Cuidado: altera no objeto também
  let meuCurso = meusDados["curso de graduação"];
  let meuNomeCompleto = meusDados.nomeCompleto();
  meusDados.sobrenome = "Frasson";
  ```

## Métodos DOM
[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model) | [Tutorial (Inglês)](https://www.youtube.com/playlist?list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s) | [Tutorial (Português)](https://www.youtube.com/watch?v=WWZX8RWLxIk&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=14) | [CheatSheet](https://fundamentals.generalassemb.ly/11_unit/dom-cheatsheet.html).

![Árvore DOM](https://miro.medium.com/max/1200/1*mMmuOhNytgqP7lrU9HPTpw.jpeg)

- Selecionando um Elemento:
  ```js
  // Seleciona apenas um usando o ID:
  const lista = document.getElementById('listaDeItens');
  // Seleciona vários usando a classe:
  const showLivros = document.getElementsByClassName('exibidor-de-livros');
  // Seleciona vários usando a tag, pega o primeiro (e setta seu src para o link):
  const imagemLegal = document.getElementsByTagName('img')[0].src = 'https://cdn2.thecatapi.com/images/A1bByKQDn.jpg';
  // Seleciona apenas um usando qualquer seletor CSS:
  const fotoTotoro = document.querySelector('#foto-do-totoro');

  const todasAsAnotacoes = document.querySelectorAll('div.anotacoes-treinamento div.anotacoes-estudo-proprio');
  ```
- Acessando os Parentes:
  ```js
  // Pegando o nó pai:
  const containerDaLista = lista.parentNode;
  // Pegando o nó irmão anterior:
  const irmaoDoTotoro = fotoTotoro.previousSibling;
  // Pegando o nó próximo irmão:
  const irmaoDaImagemLegal = imagemLegal.nextSibling;
  // Pegando o nó primeiro filho:
  const primeiroLivro = showLivros.firstChild;
  ```
- Acessando e atualizando conteúdo:
  ```js
  // Pegando o conteúdo em texto:
  let textoDoPrimeiroLivro = primeiroLivro.textContent;
  // Mudando o texto:
  primeiroLivro.textContent = 'Até mais, e obrigado pelos peixes.';
  // Pegando o conteúdo HTML:
  let htmlDaLista = lista.innerHTML;
  // Adicionando ao conteúdo HTML:
  htmlDaLista = htmlDaLista + '<a href="https://urbanarts.vteximg.com.br/arquivos/ids/8823801-1000-1000/861592_Ampliada.jpg?v=637561430792700000">Não entre em pânico!</a>';
  lista.innerHTML = htmlDaLista;  // não muito seguro!!
  ```
- Acessando e atualizando atributos:
  ```js
  // Pegando o atributo de estilo do livro:
  const estiloLivro = primeiroLivro.getAttribute('style');
  // Mudando o atributo src da imagem:
  fotoTotoro.setAttribute('src', 'https://www.petlove.com.br/images/products/236680/large/Brinquedo_de_Pel%C3%BAcia_Buddy_Totoro_Kawaii_2645045.jpg?1627759854');
  // Adiciona uma classe HTML:
  fotoTotoro.className = 'foto-bonita';
  ```
- Adicionando conteúdo:
  ```js
  // Cria um novo item e setta seu conteúdo em texto:
  const novoItemDaLista = document.createElement('li');
  novoItemDaLista.textContent = 'Restaurante No Fim Do Universo';
  // Adiciona à lista:
  lista.appendChild(novoItemDaLista);
  ```
- Eventos:
  ```js
  novoItemDaLista.addEventListener('click', marcaItem) // quando o elemento for clicado, é acionada a função marcaItem
  ```
  | Eventos |
  |---|
  | 'click' |
  | 'dblclick' |
  | 'keydown' |
  | 'keyup' |
  | 'focus' |
  | 'submit' |
  | 'scroll' |

## O Projeto
Após aprender tudo isso sobre JavaScript e sobre Document-Object Model, precisamos praticar! Para isso, vamos fazer uma To-Do List, com as tarefas que precisamos fazer no dia, e indicando se elas já foram feitas ou não.
Na branch [gabarito-projeto](https://github.com/isa56/treinamento-js-code/tree/gabarito-projeto), há uma sugestão de como o projeto deve ser feito.

## Desafio Final
Para garantir que seus planos na To Do List sejam concretizados, vamos buscar os dados de Clima da sua região e impedir que o mau tempo atrapalhe tudo.
Para isso, sugiro que leia sobre a [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API), ou mesmo assista um [tutorial](https://www.youtube.com/watch?v=1d5jNmKdwlY) sobre.
Para isso, sugerimos que use a [Weather API](https://openweathermap.org/api).

Abaixo da To-Do List, insira os dados recebidos dessa API da forma como preferir.
Na branch [gabarito-desafio](), há uma sugestão de como o desafio deve ser feito.

## Extras
- Materiais Gratuitos para te ajudar:
  - [Trilha Discover da RocketSeat (PT-BR)](https://app.rocketseat.com.br/discover);
  - [Guia de TI](https://guiadeti.com.br/guia-categorias/cursos-gratuitos/);
  - [Roadmap - Trilhas de Aprendizado (EN)](https://roadmap.sh/);
  - [freeCodeCamp (EN)](https://www.freecodecamp.org/learn);
  - [A Melhor Forma de Aprender](https://www.google.com.br/).

- Materiais Pagos para te ajudar:
  - [Cursos da Alura (PT-BR) (Use a conta da Code)](https://alura.com.br/);
  - [Curso de JS e TS do básico ao avançado 2022 (PT-BR)](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/).