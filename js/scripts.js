$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var paymentSelect = $("select#payment").val();
    var addressInput= $("input#address").val();
    var shipmentInput = $("input:radio[name=shipment]:checked").val();
    var productInput = $("input:radio[name=product]:checked").val();
    var ddateInput= $("input#ddate").val();

    $(".person1").text(person1Input);
    $(".payment").text(paymentSelect);
    $(".address").text(addressInput);
    $(".shipment").text(shipmentInput);
    $(".product").text(productInput);
    $(".ddate").text(ddateInput);

    $("#confirmation receipt").show();

    event.preventDefault();
  });
});
