var displayQuestion = document.getElementById('displayQuestion');
var answerParent = document.getElementById('answerParent');
var currentQuestionNumber = document.getElementById('currentQuestionNumber');
var totalQuestionNumber = document.getElementById('totalQuestionNumber');
var questionDisplay = document.getElementById('questionDisplay');
var resultDisplay = document.getElementById('resultDisplay');
var percentage = document.getElementById('percentage');
var indexValue = 0;
var marks = 0;

var questions = [
    {
        question: 'HTML Stand for ________________________',
        options: ['Hypertext Mark Languege', 'HTML', 'HTML', 'HTML'],
        correctAns: "Hypertext Mark Languege",
    },
    {
        question: 'CSS Stand for ________________________',
        options: ['Cascading Style Sheet', 'CSS', 'CSS', 'CSS'],
        correctAns: "Cascading Style Sheet",
    },
    {
        question: 'JS Stand for ________________________',
        options: ['JavaScript', 'JS', 'JS', 'JS'],
        correctAns: "JavaScript",
    },
    {
        question: 'DOM Stand for ________________________',
        options: ['Document Object Module', 'DOM', 'DOM', 'DOM'],
        correctAns: "Document Object Module",
    },
    {
        question: 'ROM Stand for ________________________',
        options: ['ROM', 'ISA', 'Read Only Memory', 'Recover of Memory'],
        correctAns: "Read Only Memory",
    },
    {
        question: 'RAM Stand for ________________________',
        options: ['RAM', 'Random Access Memory', 'Reduce Air', 'CPU'],
        correctAns: "Random Access Memory",
    },
];

function renderQuestion() {
    displayQuestion.innerHTML = questions[indexValue].question;
    for (var i = 0; i < questions[indexValue].options.length; i++) {

        var optvalue = questions[indexValue].options[i];
        var corrvalue = questions[indexValue].correctAns
        
        answerParent.innerHTML += ` <div class="col-md-6 my-3">
        <button 
        onclick="checkQuestion( '${optvalue}','${corrvalue}')"
          class="btn 
          p-3 
          btn-outline-success 
          w-100 
          txtPrimary 
          rounded-pill 
          shadow 
          fw-bold 
          d-block">
          ${optvalue}
          </button>
    </div>`;
    }
    totalQuestionNumber.innerHTML = questions.length;
    currentQuestionNumber.innerHTML = indexValue + 1;
}

renderQuestion();

function nextQuestion(){
    answerParent.innerHTML = "";
    if (indexValue + 1 == questions.length){
        resultDisplay.style.display= 'block';
        questionDisplay.style.display= 'none';

        var totalpercentage = (marks/questions.length)*100;
        percentage.innerHTML = totalpercentage.toFixed(2);
    }else{
        indexValue++;
        renderQuestion();
    }
}

function checkQuestion(optionsValue, correctValue){
    if(optionsValue == correctValue){
        marks++;
        console.log(marks);
    }
    nextQuestion();
}