$(document).ready(function () {

    const answerKey = ["#q1o4", "#q2o1", "#q3o3", "#q4o2", "#q5o1", "#q6o3", "#q7o4", "#q8o1", "#q9o2", "#q10o1"];
    const questionNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    function createScoresArray(scoresThatAreChecked) {
        const scoresArray = [];
        for (i = 0; i < scoresThatAreChecked.length; i++) {
            const scores = scoresThatAreChecked[i].value.split("n")[1];
            scoresArray.push(scores);
        };
        return scoresArray;
    }

    function submitAnswers(scoresArray) {
        console.log(scoresArray);
    };

    $(".submit-button").click(function () {
        createScoresArray($('input:checked'));
        submitAnswers(createScoresArray($('input:checked')));
    });

});