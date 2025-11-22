const perguntas = [
    {
        enunciado: "1. O que são sistemas inteligentes?",
        imagem: "pergunta1.jpg",
        alternativas: [
            { texto: "Sistemas capazes de aprender e tomar decisões.", correta: true,
              explicacao: "Correto! Sistemas inteligentes aprendem padrões e tomam decisões com base neles." },
            { texto: "Programas que só repetem comandos.", correta: false,
              explicacao: "Incorreto. Repetir comandos não envolve aprendizado, apenas execução fixa." },
            { texto: "Máquinas movidas manualmente.", correta: false,
              explicacao: "Incorreto. Movimentação manual não envolve inteligência artificial." },
            { texto: "Robôs físicos apenas.", correta: false,
              explicacao: "Incorreto. Sistemas inteligentes podem ser softwares, não só robôs." }
        ]
    },

    {
        enunciado: "2. Diferença entre AGI e ANI:",
        imagem: "pergunta2.jpg",
        alternativas: [
            { texto: "AGI é inteligência geral; ANI é especializada.", correta: true,
              explicacao: "Perfeito! AGI resolve qualquer tarefa; ANI só tarefas específicas." },
            { texto: "O contrário disso.", correta: false,
              explicacao: "Incorreto. ANI é limitada; AGI é ampla." },
            { texto: "ANI é superior à AGI.", correta: false,
              explicacao: "Incorreto. AGI seria mais avançada e geral." },
            { texto: "Ambas resolvem qualquer tarefa.", correta: false,
              explicacao: "Incorreto. Só uma AGI faria isso; ANI é limitada." }
        ]
    },

    {
        enunciado: "3. IA em sistemas de recomendação:",
        imagem: "pergunta3.jpg",
        alternativas: [
            { texto: "Analisa padrões para sugerir conteúdos.", correta: true,
              explicacao: "Isso mesmo! Recomendação funciona analisando hábitos do usuário." },
            { texto: "Escolhe aleatoriamente.", correta: false,
              explicacao: "Incorreto. As recomendações não são aleatórias, mas baseadas em padrões." },
            { texto: "Depende só de humanos.", correta: false,
              explicacao: "Incorreto. O sistema usa algoritmos automáticos." },
            { texto: "Usa somente conteúdo popular.", correta: false,
              explicacao: "Incorreto. Popularidade é só um dos fatores." }
        ]
    },

    {
        enunciado: "4. Para que serve a Alexa?",
        imagem: "pergunta4.jpg",
        alternativas: [
            { texto: "Automatizar tarefas e responder perguntas.", correta: true,
              explicacao: "Certo! Assistentes usam IA para executar tarefas e responder." },
            { texto: "Só toca músicas.", correta: false,
              explicacao: "Incorreto. Ela faz muito mais do que tocar músicas." },
            { texto: "Só funciona como despertador.", correta: false,
              explicacao: "Incorreto. Alarmes são só uma pequena função." },
            { texto: "Realiza tarefas físicas.", correta: false,
              explicacao: "Incorreto. Ela não tem corpo físico para isso." }
        ]
    },

    {
        enunciado: "5. Machine Learning funciona como:",
        imagem: "pergunta5.jpg",
        alternativas: [
            { texto: "Aprendizado a partir de dados.", correta: true,
              explicacao: "Isso mesmo! Machine Learning aprende padrões em grandes quantidades de dados." },
            { texto: "Comandos fixos.", correta: false,
              explicacao: "Incorreto. Comandos fixos não aprendem; apenas executam." },
            { texto: "Intervenção humana constante.", correta: false,
              explicacao: "Incorreto. ML busca reduzir a intervenção humana." },
            { texto: "Apenas com redes neurais.", correta: false,
              explicacao: "Incorreto. ML tem vários métodos além de redes neurais." }
        ]
    },

    {
        enunciado: "6. Exemplo de visão computacional:",
        imagem: "pergunta6.jpg",
        alternativas: [
            { texto: "Reconhecimento facial.", correta: true,
              explicacao: "Correto! Visão computacional reconhece imagens e padrões visuais." },
            { texto: "Tradução automática.", correta: false,
              explicacao: "Incorreto. Tradução envolve processamento de linguagem, não visão." },
            { texto: "Recomendação do YouTube.", correta: false,
              explicacao: "Incorreto. Isso é aprendizado de máquina, não visão." },
            { texto: "Cálculos avançados.", correta: false,
              explicacao: "Incorreto. Cálculo não envolve interpretação de imagens." }
        ]
    },

    {
        enunciado: "7. O que é um chatbot?",
        imagem: "pergunta7.jpg",
        alternativas: [
            { texto: "Software que conversa automaticamente.", correta: true,
              explicacao: "Certo! Chatbots simulam conversas com IA." },
            { texto: "Criador de imagens 3D.", correta: false,
              explicacao: "Incorreto. Isso é outra área." },
            { texto: "Hardware de robôs.", correta: false,
              explicacao: "Incorreto. Chatbots são softwares." },
            { texto: "Ferramenta matemática.", correta: false,
              explicacao: "Incorreto. Chatbots não têm essa função." }
        ]
    },

    {
        enunciado: "8. Limitação da IA:",
        imagem: "pergunta8.jpg",
        alternativas: [
            { texto: "Precisa de muitos dados.", correta: true,
              explicacao: "Correto! Sem muitos dados, IA não aprende bem." },
            { texto: "Tem emoções humanas.", correta: false,
              explicacao: "Incorreto. IAs não têm sentimentos." },
            { texto: "Generaliza perfeitamente.", correta: false,
              explicacao: "Incorreto. IA generaliza mal quando os dados são limitados." },
            { texto: "Independe de computadores.", correta: false,
              explicacao: "Incorreto. IA só existe com hardware computacional." }
        ]
    },

    {
        enunciado: "9. Tecnologia que dirige sozinha:",
        imagem: "pergunta9.jpg",
        alternativas: [
            { texto: "Carros autônomos.", correta: true,
              explicacao: "Correto! Eles usam sensores e IA para dirigir." },
            { texto: "Drone simples.", correta: false,
              explicacao: "Incorreto. Drones comuns não dirigem ruas." },
            { texto: "Bike elétrica.", correta: false,
              explicacao: "Incorreto. Bicicletas elétricas não têm piloto automático." },
            { texto: "Patinete público.", correta: false,
              explicacao: "Incorreto. Patinetes não possuem sistema autônomo." }
        ]
    },

    {
        enunciado: "10. O que é PLN?",
        imagem: "pergunta10.jpg",
        alternativas: [
            { texto: "Compreender e gerar linguagem humana.", correta: true,
              explicacao: "Correto! PLN permite que máquinas entendam e produzam texto/habla." },
            { texto: "Criar vídeos automáticos.", correta: false,
              explicacao: "Incorreto. Isso pertence à área de visão e multimídia." },
            { texto: "Hardware robótico.", correta: false,
              explicacao: "Incorreto. PLN é software." },
            { texto: "Método baseado só em números.", correta: false,
              explicacao: "Incorreto. PLN trabalha com texto natural." }
        ]
    }
];




let pontuacao = 0;
let quizIniciado = false;
let perguntasRespondidas = 0;



function iniciarQuiz() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";
    gerarQuiz();
    quizIniciado = true;
    atualizarBarra();
}


function gerarQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    perguntas.forEach((p, index) => {
        const div = document.createElement("div");
        div.className = "question";

        let html = `<h3>${p.enunciado}</h3>`;

        html += `<img src="${p.imagem}" alt="Imagem da Pergunta">`;

        html += `<div class="options">`;

        p.alternativas.forEach((alt, i) => {
            html += `
                <button onclick="responder(${index}, ${i}, this)">
                    ${alt.texto}
                </button>
            `;
        });

        html += `</div><div id="feedback-${index}" class="feedback"></div>`;

        div.innerHTML = html;
        quizDiv.appendChild(div);
    });
}



function responder(numPergunta, numAlternativa, botao) {
    const p = perguntas[numPergunta];
    const alternativa = p.alternativas[numAlternativa];
    const feedbackDiv = document.getElementById(`feedback-${numPergunta}`);

    const botoes = botao.parentNode.querySelectorAll("button");
    botoes.forEach(b => b.disabled = true);

    // Se não houver explicação, cria uma padrão automaticamente
    const explicacaoFinal = alternativa.explicacao || 
        (alternativa.correta 
            ? "Resposta correta!"
            : "Esta alternativa está incorreta porque não representa corretamente o conceito explicado na pergunta.");

    if (alternativa.correta) {
        pontuacao++;
        feedbackDiv.className = "feedback correct";
        feedbackDiv.innerHTML = `<strong>✔ Resposta correta!</strong><br>${explicacaoFinal}`;
    } else {
        feedbackDiv.className = "feedback incorrect";
        feedbackDiv.innerHTML = `<strong>✘ Resposta incorreta.</strong><br>${explicacaoFinal}`;
    }

    feedbackDiv.style.display = "block";

    perguntasRespondidas++;
    atualizarBarra();
}



function atualizarBarra() {
    const barra = document.getElementById("progressBar");
    const progresso = (perguntasRespondidas / perguntas.length) * 100;
    barra.style.width = progresso + "%";
}



function finalizarQuiz() {
    if (!quizIniciado) return;

    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";

    document.getElementById("pontuacao").innerHTML =
        `Você acertou <strong>${pontuacao}</strong> de <strong>${perguntas.length}</strong> perguntas.`;
}



function reiniciar() {
    pontuacao = 0;
    quizIniciado = false;
    perguntasRespondidas = 0;

    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";

    atualizarBarra();
}


window.onload = () => {
    document.getElementById("startScreen").style.display = "block";
};
