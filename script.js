// Banco de dados simulado de questões
const questionsDatabase = [
    {
        id: 1,
        question: "Resolva a seguinte equação do segundo grau:",
        equation: "x² - 5x + 6 = 0",
        description: "Encontre as raízes da equação e indique qual das alternativas abaixo apresenta o conjunto solução correto.",
        points: 2.0,
        options: [
            { letter: "A", text: "S = {1, 6}" },
            { letter: "B", text: "S = {2, 3}" },
            { letter: "C", text: "S = {-2, -3}" },
            { letter: "D", text: "S = {0, 5}" },
            { letter: "E", text: "Não possui solução real" }
        ],
        correctAnswer: "b" // Apenas para fins de demonstração
    },
    {
        id: 2,
        question: "Qual é o valor de x na equação:",
        equation: "3x + 12 = 27",
        description: "Resolva a equação e marque a alternativa correta.",
        points: 1.5,
        options: [
            { letter: "A", text: "x = 3" },
            { letter: "B", text: "x = 5" },
            { letter: "C", text: "x = 7" },
            { letter: "D", text: "x = 9" },
            { letter: "E", text: "x = 15" }
        ]
    },
    {
        id: 3,
        question: "Calcule a área de um triângulo com base 8cm e altura 5cm:",
        description: "Use a fórmula A = (b × h) / 2",
        points: 2.0,
        options: [
            { letter: "A", text: "20 cm²" },
            { letter: "B", text: "40 cm²" },
            { letter: "C", text: "13 cm²" },
            { letter: "D", text: "10 cm²" },
            { letter: "E", text: "16 cm²" }
        ]
    },
    {
        id: 4,
        question: "Qual é o resultado de 15% de 200?",
        description: "Calcule o valor percentual.",
        points: 1.0,
        options: [
            { letter: "A", text: "15" },
            { letter: "B", text: "20" },
            { letter: "C", text: "25" },
            { letter: "D", text: "30" },
            { letter: "E", text: "35" }
        ]
    },
    {
        id: 5,
        question: "Simplifique a expressão algébrica:",
        equation: "2x + 3x - x + 5",
        description: "Reduza aos termos semelhantes.",
        points: 1.5,
        options: [
            { letter: "A", text: "4x + 5" },
            { letter: "B", text: "5x + 5" },
            { letter: "C", text: "6x + 5" },
            { letter: "D", text: "4x" },
            { letter: "E", text: "3x + 5" }
        ]
    },
    {
        id: 6,
        question: "Qual é o perímetro de um quadrado com lado de 7 cm?",
        description: "Lembre-se que o perímetro é a soma de todos os lados.",
        points: 1.0,
        options: [
            { letter: "A", text: "14 cm" },
            { letter: "B", text: "21 cm" },
            { letter: "C", text: "28 cm" },
            { letter: "D", text: "35 cm" },
            { letter: "E", text: "49 cm" }
        ]
    },
    {
        id: 7,
        question: "Resolva a inequação:",
        equation: "2x - 4 > 10",
        description: "Encontre o conjunto solução.",
        points: 2.0,
        options: [
            { letter: "A", text: "x > 7" },
            { letter: "B", text: "x > 3" },
            { letter: "C", text: "x < 7" },
            { letter: "D", text: "x < 3" },
            { letter: "E", text: "x = 7" }
        ]
    },
    {
        id: 8,
        question: "Qual é o valor de √144?",
        description: "Calcule a raiz quadrada.",
        points: 1.0,
        options: [
            { letter: "A", text: "10" },
            { letter: "B", text: "11" },
            { letter: "C", text: "12" },
            { letter: "D", text: "13" },
            { letter: "E", text: "14" }
        ]
    },
    {
        id: 9,
        question: "Em uma sala com 40 alunos, 25% são meninas. Quantas meninas há na sala?",
        description: "Calcule a porcentagem.",
        points: 1.5,
        options: [
            { letter: "A", text: "8 meninas" },
            { letter: "B", text: "10 meninas" },
            { letter: "C", text: "12 meninas" },
            { letter: "D", text: "15 meninas" },
            { letter: "E", text: "20 meninas" }
        ]
    },
    {
        id: 10,
        question: "Calcule o valor de:",
        equation: "(5 + 3) × 2 - 4",
        description: "Resolva respeitando a ordem das operações.",
        points: 1.5,
        options: [
            { letter: "A", text: "10" },
            { letter: "B", text: "12" },
            { letter: "C", text: "14" },
            { letter: "D", text: "16" },
            { letter: "E", text: "20" }
        ]
    },
    {
        id: 11,
        question: "Qual é o valor de x no sistema de equações:",
        equation: "x + y = 10\nx - y = 2",
        description: "Resolva o sistema.",
        points: 2.5,
        options: [
            { letter: "A", text: "x = 4" },
            { letter: "B", text: "x = 5" },
            { letter: "C", text: "x = 6" },
            { letter: "D", text: "x = 7" },
            { letter: "E", text: "x = 8" }
        ]
    },
    {
        id: 12,
        question: "Qual é a fração equivalente a 0,75?",
        description: "Marque a alternativa correta.",
        points: 1.0,
        options: [
            { letter: "A", text: "1/2" },
            { letter: "B", text: "2/3" },
            { letter: "C", text: "3/4" },
            { letter: "D", text: "4/5" },
            { letter: "E", text: "5/6" }
        ]
    },
    {
        id: 13,
        question: "Calcule a média aritmética dos números: 8, 12, 15, 9, 6",
        description: "Some todos os valores e divida pela quantidade.",
        points: 1.5,
        options: [
            { letter: "A", text: "8" },
            { letter: "B", text: "9" },
            { letter: "C", text: "10" },
            { letter: "D", text: "11" },
            { letter: "E", text: "12" }
        ]
    },
    {
        id: 14,
        question: "Qual é o próximo número na sequência: 2, 6, 12, 20, 30, ?",
        description: "Identifique o padrão e complete.",
        points: 2.0,
        options: [
            { letter: "A", text: "38" },
            { letter: "B", text: "40" },
            { letter: "C", text: "42" },
            { letter: "D", text: "44" },
            { letter: "E", text: "46" }
        ]
    },
    {
        id: 15,
        question: "Converta 3,5 horas em minutos:",
        description: "Lembre-se que 1 hora = 60 minutos.",
        points: 1.0,
        options: [
            { letter: "A", text: "180 minutos" },
            { letter: "B", text: "200 minutos" },
            { letter: "C", text: "210 minutos" },
            { letter: "D", text: "220 minutos" },
            { letter: "E", text: "240 minutos" }
        ]
    },
    {
        id: 16,
        question: "Qual é o volume de um cubo com aresta de 4 cm?",
        description: "Use a fórmula V = a³",
        points: 2.0,
        options: [
            { letter: "A", text: "16 cm³" },
            { letter: "B", text: "32 cm³" },
            { letter: "C", text: "48 cm³" },
            { letter: "D", text: "64 cm³" },
            { letter: "E", text: "80 cm³" }
        ]
    },
    {
        id: 17,
        question: "Simplifique a fração:",
        equation: "24/36",
        description: "Reduza à forma mais simples.",
        points: 1.5,
        options: [
            { letter: "A", text: "1/2" },
            { letter: "B", text: "2/3" },
            { letter: "C", text: "3/4" },
            { letter: "D", text: "4/5" },
            { letter: "E", text: "5/6" }
        ]
    },
    {
        id: 18,
        question: "Qual é o valor de 2⁵ (2 elevado à quinta potência)?",
        description: "Calcule a potência.",
        points: 1.0,
        options: [
            { letter: "A", text: "16" },
            { letter: "B", text: "24" },
            { letter: "C", text: "32" },
            { letter: "D", text: "40" },
            { letter: "E", text: "64" }
        ]
    },
    {
        id: 19,
        question: "Em um mapa, 1 cm representa 50 km. Qual a distância real se no mapa há 7 cm?",
        description: "Use regra de três simples.",
        points: 2.0,
        options: [
            { letter: "A", text: "300 km" },
            { letter: "B", text: "325 km" },
            { letter: "C", text: "350 km" },
            { letter: "D", text: "375 km" },
            { letter: "E", text: "400 km" }
        ]
    },
    {
        id: 20,
        question: "Qual é o MDC (Máximo Divisor Comum) entre 36 e 48?",
        description: "Encontre o maior divisor comum entre os números.",
        points: 2.0,
        options: [
            { letter: "A", text: "6" },
            { letter: "B", text: "8" },
            { letter: "C", text: "10" },
            { letter: "D", text: "12" },
            { letter: "E", text: "18" }
        ]
    }
];

// Estado da aplicação
let studentName = '';
let examLink = '';
let currentQuestionIndex = 0;
let answers = {}; // Armazena as respostas: { questionId: selectedAnswer }
let timerSeconds = 5400; // 1h30min em segundos
let timerInterval;

// Elementos do DOM - Login
const loginScreen = document.getElementById('loginScreen');
const examScreen = document.getElementById('examScreen');
const loginForm = document.getElementById('loginForm');

// Elementos do DOM - Prova
const questionTitle = document.getElementById('questionTitle');
const questionPoints = document.getElementById('questionPoints');
const questionContent = document.getElementById('questionContent');
const answersForm = document.getElementById('answersForm');
const btnPrevious = document.getElementById('btnPrevious');
const btnNext = document.getElementById('btnNext');
const btnSave = document.getElementById('btnSave');
const btnFinishExam = document.getElementById('btnFinishExam');
const finishModal = document.getElementById('finishModal');
const btnCancelFinish = document.getElementById('btnCancelFinish');
const btnConfirmFinish = document.getElementById('btnConfirmFinish');
const questionsGrid = document.getElementById('questionsGrid');
const progressFill = document.getElementById('progressFill');
const progressCount = document.getElementById('progressCount');
const timerElement = document.getElementById('timer');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Configurar evento do formulário de login
    setupLoginForm();
});

// Configurar formulário de login
function setupLoginForm() {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const studentNameInput = document.getElementById('studentName');
        const examLinkInput = document.getElementById('examLink');
        
        // Validar campos
        if (!studentNameInput.value.trim()) {
            showLoginError('Por favor, digite seu nome completo');
            studentNameInput.focus();
            return;
        }
        
        if (!examLinkInput.value.trim()) {
            showLoginError('Por favor, cole o link da prova');
            examLinkInput.focus();
            return;
        }
        
        // Salvar dados
        studentName = studentNameInput.value.trim();
        examLink = examLinkInput.value.trim();
        
        // Aqui você pode fazer a validação do link com o backend
        console.log('Nome do aluno:', studentName);
        console.log('Link da prova:', examLink);
        
        // Iniciar a prova
        startExam();
    });
}

// Mostrar erro no login
function showLoginError(message) {
    const existingError = document.querySelector('.login-error');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'login-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background: #dc3545;
        color: white;
        padding: 0.8rem 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        text-align: center;
        font-size: 0.9rem;
        animation: shake 0.5s ease;
    `;
    
    loginForm.insertBefore(errorDiv, loginForm.firstChild);
    
    setTimeout(() => {
        errorDiv.style.opacity = '0';
        errorDiv.style.transition = 'opacity 0.3s ease';
        setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
}

// Iniciar a prova
function startExam() {
    // Esconder tela de login
    loginScreen.style.display = 'none';
    
    // Mostrar tela da prova
    examScreen.style.display = 'block';
    
    // Atualizar nome do aluno no header
    const userNameElement = document.querySelector('.user-name');
    if (userNameElement) {
        userNameElement.textContent = `Aluno: ${studentName}`;
    }
    
    // Inicializar componentes da prova
    initializeQuestionsGrid();
    loadQuestion(currentQuestionIndex);
    startTimer();
    setupEventListeners();
    updateProgress();
}

// Criar grid de navegação de questões
function initializeQuestionsGrid() {
    questionsGrid.innerHTML = '';
    questionsDatabase.forEach((q, index) => {
        const btn = document.createElement('button');
        btn.className = 'question-nav-btn unanswered';
        btn.textContent = index + 1;
        btn.dataset.index = index;
        btn.addEventListener('click', () => {
            saveCurrentAnswer();
            loadQuestion(index);
        });
        questionsGrid.appendChild(btn);
    });
}

// Carregar questão
function loadQuestion(index) {
    currentQuestionIndex = index;
    const question = questionsDatabase[index];
    
    // Atualizar título e pontos
    questionTitle.textContent = `Questão ${index + 1}`;
    questionPoints.textContent = `Valor: ${question.points.toFixed(1)} pontos`;
    
    // Montar conteúdo da questão
    let contentHTML = '<div class="question-text">';
    contentHTML += `<p>${question.question}</p>`;
    
    if (question.equation) {
        contentHTML += `<p class="equation">${question.equation}</p>`;
    }
    
    if (question.description) {
        contentHTML += `<p>${question.description}</p>`;
    }
    
    contentHTML += '</div>';
    
    // Montar opções de resposta
    contentHTML += '<form class="answers-form" id="answersForm">';
    question.options.forEach((option) => {
        const optionId = `option-${option.letter.toLowerCase()}-${index}`;
        const isChecked = answers[question.id] === option.letter.toLowerCase() ? 'checked' : '';
        
        contentHTML += `
            <div class="answer-option">
                <input type="radio" id="${optionId}" name="answer" value="${option.letter.toLowerCase()}" ${isChecked}>
                <label for="${optionId}">
                    <span class="option-letter">${option.letter})</span>
                    <span class="option-text">${option.text}</span>
                </label>
            </div>
        `;
    });
    contentHTML += '</form>';
    
    questionContent.innerHTML = contentHTML;
    
    // Atualizar estado dos botões de navegação
    updateNavigationButtons();
    updateQuestionNavigation();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Salvar resposta atual
function saveCurrentAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const currentQuestion = questionsDatabase[currentQuestionIndex];
    
    if (selectedAnswer) {
        answers[currentQuestion.id] = selectedAnswer.value;
        updateProgress();
        updateQuestionNavigation();
        
        // Feedback visual
        showSaveNotification();
    }
}

// Mostrar notificação de salvamento
function showSaveNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = '✓ Resposta salva com sucesso!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Atualizar botões de navegação
function updateNavigationButtons() {
    btnPrevious.disabled = currentQuestionIndex === 0;
    btnNext.disabled = currentQuestionIndex === questionsDatabase.length - 1;
    
    if (btnPrevious.disabled) {
        btnPrevious.style.opacity = '0.5';
        btnPrevious.style.cursor = 'not-allowed';
    } else {
        btnPrevious.style.opacity = '1';
        btnPrevious.style.cursor = 'pointer';
    }
    
    if (btnNext.disabled) {
        btnNext.style.opacity = '0.5';
        btnNext.style.cursor = 'not-allowed';
    } else {
        btnNext.style.opacity = '1';
        btnNext.style.cursor = 'pointer';
    }
}

// Atualizar navegação de questões
function updateQuestionNavigation() {
    const navButtons = document.querySelectorAll('.question-nav-btn');
    navButtons.forEach((btn, index) => {
        const questionId = questionsDatabase[index].id;
        btn.classList.remove('current', 'answered', 'unanswered');
        
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        } else if (answers[questionId]) {
            btn.classList.add('answered');
        } else {
            btn.classList.add('unanswered');
        }
    });
}

// Atualizar progresso
function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const totalCount = questionsDatabase.length;
    const percentage = (answeredCount / totalCount) * 100;
    
    progressCount.textContent = `${answeredCount}/${totalCount}`;
    progressFill.style.width = `${percentage}%`;
    
    document.getElementById('answeredCount').textContent = answeredCount;
    document.getElementById('totalCount').textContent = totalCount;
}

// Timer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            autoFinishExam();
        } else if (timerSeconds <= 300) { // Últimos 5 minutos
            timerElement.style.background = 'rgba(220, 53, 69, 0.3)';
            timerElement.style.color = '#dc3545';
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    
    timerElement.textContent = `Tempo: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function autoFinishExam() {
    alert('O tempo da prova acabou! A prova será finalizada automaticamente.');
    finishExam();
}

// Event Listeners
function setupEventListeners() {
    btnPrevious.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            saveCurrentAnswer();
            loadQuestion(currentQuestionIndex - 1);
        }
    });
    
    btnNext.addEventListener('click', () => {
        if (currentQuestionIndex < questionsDatabase.length - 1) {
            saveCurrentAnswer();
            loadQuestion(currentQuestionIndex + 1);
        }
    });
    
    btnSave.addEventListener('click', () => {
        saveCurrentAnswer();
    });
    
    btnFinishExam.addEventListener('click', () => {
        finishModal.classList.add('active');
    });
    
    btnCancelFinish.addEventListener('click', () => {
        finishModal.classList.remove('active');
    });
    
    btnConfirmFinish.addEventListener('click', () => {
        finishExam();
    });
    
    // Fechar modal clicando fora
    finishModal.addEventListener('click', (e) => {
        if (e.target === finishModal) {
            finishModal.classList.remove('active');
        }
    });
}

// Finalizar prova
function finishExam() {
    clearInterval(timerInterval);
    saveCurrentAnswer();
    
    const answeredCount = Object.keys(answers).length;
    const totalCount = questionsDatabase.length;
    
    // Preparar dados para envio ao backend
    const examData = {
        studentName: studentName,
        examLink: examLink,
        answers: answers,
        answeredCount: answeredCount,
        totalCount: totalCount,
        finishedAt: new Date().toISOString()
    };
    
    // Aqui você faria o envio das respostas para o backend
    console.log('Dados da prova para enviar ao backend:', examData);
    
    alert(`Prova finalizada!\n\nAluno: ${studentName}\nVocê respondeu ${answeredCount} de ${totalCount} questões.\n\nSuas respostas foram enviadas com sucesso!`);
    
    // Redirecionar ou mostrar resultado
    // window.location.href = '/resultado';
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Prevenir recarregamento acidental da página
window.addEventListener('beforeunload', (e) => {
    if (Object.keys(answers).length > 0) {
        e.preventDefault();
        e.returnValue = '';
    }
});