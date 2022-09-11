const quizData = [
    {
        question: 'Which of the following is not an operating system?',
        a: 'DOS',
        b: 'Mac',
        c: 'C',
        d: 'Linux',
        correct: 'c'
    }, {
        question: 'Which one is a ‘text editor’ for Microsoft Windows?',
        a: 'Notepad',
        b: 'MS Word',
        c: 'Ms Excel',
        d: 'WordPad',
        correct: 'a'
    }, {
        question: '‘Linux’ is an example of?',
        a: 'Software',
        b: 'Operating System',
        c: 'Application',
        d: 'Browser',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Document Object Module',
        d: 'Application Programming Interface',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].
            correct) {
            ++score;
        }

        ++currentQuiz;
        console.log(`quiz - ${currentQuiz},score-${score}`)
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length}questions.</h2>
            
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
