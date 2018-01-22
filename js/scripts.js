//Business Logic
var upCase = function(item) {
  return item.toUpperCase();
};

//User Interface
$(document).ready(function() {
  $("#groceryList").submit(function(event) {
  event.preventDefault();
    var q1=$("#q1").val();
    var q2=$("#q2").val();
    var q3=$("#q3").val();
    var q4=$("#q4").val();
    var q5=$("#q5").val();
    var grocery = [q1,q2,q3,q4,q5];
    //make upercase --->
    upGrocery = grocery.map(upCase);
    //alphetize --->
    alephGrocery = upGrocery.sort();
    $("#groceryList").hide();
    //put into a list
    var listGrocery = [];
    alephGrocery.forEach(function(a) {
      listGrocery += "<li>" + a + "</li>"
    });
    $(".fullList").html("<h1>"+"Your Grocery List is as Follows:"+"</h1>"+"<br>"+listGrocery)
  });
});
