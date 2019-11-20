$(document).ready(function () {

    const answerKey = ["#q1o4", "#q2o1", "#q3o3", "#q4o2", "#q5o1", "#q6o3", "#q7o4", "#q8o1", "#q9o2", "#q10o1"];

    const questionNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    function submitAnswers() {
        for (i = 0; i < answerKey.length; i++) {
            let correctAnswerSelected = $(answerKey[i]).is(":checked");
            let questionAnswered = $('[name="question-' + questionNumbers[i] + '"]').is(":checked");
            if (questionAnswered) {
                console.log($('[name="question-' + questionNumbers[i] + '"]').val());
            }
            //console.log(questionAnswered);
            //console.log("yo");
/*             if (correctAnswerSelected === true) {
                correctAnswers++;
            };
            if (questionAnswered === true && correctAnswerSelected === false) {
                incorrectAnswers++;
            };
            if (questionAnswered === false) {
                unansweredQuestions++;
            }; */
        };
    };

    for (i = 0; i < questionNumbers.length; i++) {
        //console.log($('[name="question-' + questionNumbers[i] + '"]'));
        for (j = 1; j <= 5; j++) {

        }
    }

    $(".submit-button").click(function() {
        //submitAnswers();
        //const answer = $(".form")
/*          for (i = 0; i < questionNumbers.length; i++) {
            const question = $('[name="question-' + questionNumbers[i] + '"]');
            for (j = 0; j < question.length; j++) {
                //if (question[j].is(":checked")) {
                    console.log(question[j]);
                //}
            }
        } */
        console.log($("input:checked"))
        const answers = $('input:checked');
        for (let i = 0; )

    });


});