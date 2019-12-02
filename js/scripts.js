$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var paymentSelect = $("select#payment").val();
    var addressInput= $("input#address").val();


    $(".person1").text(person1Input);
    $(".payment").text(paymentSelect);
    $(".address").text(addressInput);


    $("#confirmation receipt").show();

    event.preventDefault();
  });
});
