const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        //0
        enunciado: "Você faz academia pra que?",
        alternativas: [
            {
                texto: "saúde",
                afirmacao: "Você faz academia pra saúde e eu sou o Batmann.",
                id: "1"    
            },
            {
                texto: "estetica",
                afirmacao: "Mas você iniciou a academia agora?",
                id: "1"
            }
        ]
    },
    //cabelo 1-3
    {//1
        enunciado: "Dove ou Nivea?",
        alternativas: [
            {
                texto: "Dove",
                afirmacao: "E errou, é pantene.",
                id: "2"
            },
            {
                texto: "Nivea",
                afirmacao: "E errou, é pantene.",
                id: "3"
            }
        ]
    },
    {//2
        enunciado: "Fuma?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Ah, e você vai adorar o Edmundo, ele tambem fuma.",
                id: "5"
            },
            {
                texto: "Não.",
                afirmacao: "E você parece que fuma.",
                id: "6"
            }
        ]
    },
    {//3
        enunciado: "Mas você vai pra igreja?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Graças a Deus, tem pessoas que vão pra igreja.",
                id: "5"
            },
            {
                texto: "Não.",
                afirmacao: "E você é da macumba, que eu tenho o carioca e o heros de macumbeiros.",
                id: "6"
            }
        ]
    },
    //elex
    {//4
        enunciado: "Você tem pronome neutre?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Ai que linde.",
                id: "5"
            },
            {
                texto: "Não",
                afirmacao: "Mas tem certeza que você não é boyceta?",
                id: "6"
            }
        ]
    },
    //n5-6
    {//5
        enunciado: "Mas tem certeza sobre a igreja?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "E você tem que aceitar Jesus mesmo, só ele. Viu?",
                id: "7"
            },
            {
                texto: "Não.",
                afirmacao: "Quer que eu passe o numero do casal macumbeiro que eu falei, os dois vão saber dizer se você é de Deus.",
                id: "7"
            }
        ]
    },
    {//6
            enunciado: "Quase que eu esqueci. Catolica ou envangelica?",
            alternativas: [
                {
                    texto: "Catolica.",
                    afirmacao: "Ah e eu nunca gostei da igreja catolica, não sei, não é a mesma coisa.",
                    id: "7"
                },
                {
                    texto: "Evangelica.",
                    afirmacao: "Gloria a Deus irmão.",
                    id: "7"
                }
            ]
        },
        {//7
            enunciado: "Se sentiu confortavel com as perguntas?",
            alternativas: [
                {
                    texto: "Sim.",
                    afirmacao: "E que bom que gostou das perguntas.",
                    id: "8"
                },
                {
                    texto: "Não.",
                    afirmacao: "Pq nn gostou? Só pq eu não te chamei de menine?",
                    id: "8"
                    
                }
            ]
        }
       
   
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
    const id = opcaoSelecionada.id;
    atual = id;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
