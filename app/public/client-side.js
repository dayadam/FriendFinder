$(document).ready(function () {

    function createScoresArray(scoresThatAreChecked) {
        const scoresArray = [];
        for (i = 0; i < scoresThatAreChecked.length; i++) {
            const scores = scoresThatAreChecked[i].value.split("n")[1]; //removing "option" from html value
            scoresArray.push(scores);
        };
        return scoresArray;
    };

    function CreateFriendObj(name, photo, scoresArray) {
        this.name= name;
        this.photo= photo;
        this.scoresArray= scoresArray;
    };

    function postNewFriend(newFriend){
        $.ajax({
            url: "/api/friends",
            type: "POST",
            data: newFriend //why does JSONstringify kill this?
        }).then(function(response){
            console.log(response);
        });
    };

    $(".submit-button").click(function () {
        const name = $("#user-name").val();
        const photo= $("#user-img").val();
        const scoresArray= createScoresArray($('input:checked'));
        const newFriend = new CreateFriendObj(name, photo, scoresArray);
        postNewFriend(newFriend);
    });

});