# Roteiro para o treinamento

## Introdução
Se apresentar, explicar porquê é importante saber JS, tanto no contexto geral, quanto no contexto da Code.

Lista de coisas para as quais o JS pode ser utilizado:
- [Fazer sites no Front End](https://roadmap.sh/frontend);
- [Fazer sites no Back End](https://roadmap.sh/backend);
- [Fazer APIs](https://erickwendel.teachable.com/p/node-js-para-iniciantes-nodebr);
- [Fazer aplicativos mobile](https://www.youtube.com/playlist?list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_);
- [Fazer aplicações Desktop](https://www.youtube.com/playlist?list=PLSccascWH13sPrITEPYwwpHiSNtYlVruV);
- [Internet das Coisas (IoT)](https://letscode.com.br/blog/a-internet-das-coisas-com-javascript-iot);
- ETC

## JavaScript Básico e Lógica de Programação
Espera-se que o pessoal já tenha feito a disciplina de Algoritmos nesse ponto, então não haverá muita prática nesse momento inicial. Apesar disso, recomenda-se o [Exercism](https://exercism.org/) para prática.
Essa parte inicial estará nos arquivos [programming-logic.html] e [programming-logic.js]

Algoritmo do quê ensinar:
1. Printar no Console um "Hello World", usando o comando `node nomeArquivo.js` e depois no navegador com a tag `<script>`;
2. Criando Variáveis (`var, let e const`);
3. If-Else;
4. For e While;
5. Funções, Funções Anônimas e Arrow Functions;
6. Arrays;
7. Objetos;

## DOM
Aqui, vamos para o Projeto em si. A ideia é criar uma ToDo List, que salve as informações no 

1. Explicar o HTML e linkar o `script`;
2. Mostrar os `querySelectors` do _input_, do _btn insert_;
3. Mostrar o `eventListener`, criar a função de `addTask`:
   1. Pegar o valor do input, printar no console;
   2. Pegar a lista do DOM, criar o elemento e adicioná-lo ao DOM;
   3. Limpar valor do input, verificar se está vazio;
4. Mostrar o `eventListener`, criar a função de `cleanAll`;
   1. Mostrar função `confirm()` e limpar HTML;
5. Adicionar `eventListener` para marcar como completo.

Falando sobre salvar os dados:
1. Criar `array` de tasks, criar função para salvar no `localStorage`;
2. Chamar a função no `addTask` e `cleanAll`;
3. Criar função de render;
4. Mostrar o getter do `localStorage`.

Apresentar desafios.