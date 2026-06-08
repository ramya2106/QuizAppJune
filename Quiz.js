const quizData = [
                {
                    question: "Which language runs in the browser?",
                    a: "Java",
                    b: "C",
                    c: "Python",
                    d: "JavaScript",
                    correct: "d"
                },
                {
                    question: "What does HTML stand for?",
                    a: "Hyper Text Markup Language",
                    b: "High Text Machine Language",
                    c: "Hyperlinks Text Mark Language",
                    d: "None",
                    correct: "a"
                },
                {
                    question: "Which one is a CSS framework?",
                    a: "Django",
                    b: "React",
                    c: "Bootstrap",
                    d: "Node",
                    correct: "c"
                }
            ];

const quizContainer = document.getElementById("quiz-container");
let currentQuestion = 0;
let score = 0;

function loadQuestion(){
    const q = quizData[currentQuestion];
    let html = `<h2>${q.question}</h2>`;
    Object.keys(q).forEach(key => {
        if(key!=="question" && key!=="correct"){
            html += `<label>
                <input type="radio" name="answer" value="${key}">
                ${q[key]}
            </label>`
        }
    })
    html += `<button onClick="checkAnswer()">Next Question</button>`
    quizContainer.innerHTML = html;
}

function checkAnswer(){
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected){
        alert("Please select an answer");
    }
    if(selected.value === quizData[currentQuestion].correct){
        score++
    }
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else {
        quizContainer.innerHTML = `
        <h2>Quiz Completed</h2>
        <h3>Score: ${score}/${quizData.length}</h3>
        <button onClick="location.reload()">Restart</button>`
    }
}

loadQuestion();