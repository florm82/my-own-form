$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var paymentInput = $("input#payment").val();
    var addressInput= $("input#address").val();


    $(".person1").text(person1Input);
    $(".payment").text(paymentInput);
    $(".address").text(addressInput);


    $("#confirmation receipt").show();

    event.preventDefault();
  });
});
