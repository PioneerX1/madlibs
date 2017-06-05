$(document).ready(function() {
  $("#formOne").submit(function() {
    var answers = ["person", "animal", "place"];

    answers.forEach(function(answer) {
      //answers.push($("input#" + answer).val());
      var userInput = $("input#" + answer).val();
      $("." + answer).text(userInput);
    });

    /*
    var personInput = $("input#person").val();
    var animalInput = $("input#animal").val();
    var placeInput = $("input#place").val();

    $(".person").text(personInput);
    $(".animal").text(animalInput);
    $(".place").text(placeInput);

    */

    $("#story").show();

    event.preventDefault();
  });
});
