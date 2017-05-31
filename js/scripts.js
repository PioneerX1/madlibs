$(document).ready(function() {
  $("#formOne").submit(function() {
    var personInput = $("input#person").val();
    var animalInput = $("input#animal").val();
    var placeInput = $("input#place").val();

    $(".person").text(personInput);
    $(".animal").text(animalInput);
    $(".place").text(placeInput);

    $("#story").show();

    event.preventDefault();
  });
});
