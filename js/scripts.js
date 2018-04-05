$(document).ready(function() {
  $(".submit form").submit(function(event) {
    var firstInput = $("#fname").val();
    var lastInput = $("#lname").val();
    var streetInput = $("#street").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipInput = $("#zip").val();
    var productInput = $("#product").val();
    var priceInput = $("#price").val();

    $("#receipt-product").text(productInput);
    $("#receipt-total").text(priceInput);
    $("#receipt-fname").text(firstInput);
    $("#receipt-lname").text(lastInput);
    $("#receipt-street").text(streetInput);
    $("#receipt-city").text(cityInput);
    $("#receipt-state").text(stateInput);
    $("#receipt-zip").text(zipInput);

    $("#enter-info").toggle();
    $(".receipt").show();

    event.preventDefault();
  });
});