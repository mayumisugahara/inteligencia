
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O QUE É ECOLOGIA?",
        alternativas: [
            {
                texto: "Área da Biologia que estuda as interações entre os seres vivos e destes com o ambiente. É A Ciência das relações do organismo com o meio ambiente.",
                afirmacao: "isso mesmo."
            },
            {
                texto: "materia da escola",
                afirmacao: "errou."
            }
        ]
    },
    {
        enunciado: "O QUE É UM ECOSSISTEMA?",
        alternativas: [
            {
                texto: "É Formado pela interação entre comunidade biológica (seres vivos) e fatores ambientais, como água, luz, calor, umidade…",
                afirmacao: "boa boa."
            },
            {
                texto: "Minha casa",
                afirmacao: "ta bobo."
            }
        ]
    },
    {
        enunciado: "DEFINA CADEIA ALIMENTAR?",
        alternativas: [
            {
                texto: "Cadeia alimentar é uma sequência linear de organismos onde nutrientes e energia são transferidos de um organismo para outro. Ela basicamente explica qual organismo se alimenta de outro organismo no meio ambiente. Há um fluxo de nutrientes e energia de um organismo para outro em diferentes níveis tróficos e isso forma uma cadeia alimentar.",
                afirmacao: "isso memo"
            },
            {
                texto: "sua familia",
                afirmacao: "e nada."
            }
        ]
    },
    {
        enunciado: "que é sustentabilidade?",
        alternativas: [
            {
                texto: "A palavra sustentabilidade vem de “sustentar”, que significa essencialmente fornecer suporte e manter ou preservar algo. O que esperamos preservar e apoiar, é a vida no planeta Terra.",
                afirmacao: "isso."
            },
            {
                texto: "minha carteira",
                afirmacao: "nada."
            }
        ]
    },
    {
        enunciado: "Quais são os pilares da sustentabilidade?",
        alternativas: [
            {
                texto: "Os pilares ou as três dimensões da sustentabilidade são o ambiente, a economia e a sociedade. Todos eles, direta e indiretamente, impactam-se uns aos outros – nenhum desses três pilares é independente –. É por isso, que é importante considerar tudo quando falamos sobre sustentabilidade, desde recursos naturais e desperdício até ao tratamento humano e às condições de trabalho.",
                afirmacao: "isso."
            },
            {
                texto: "n tem",
                afirmacao: "erro por pouco."
            }
        ]
    },
];

 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();