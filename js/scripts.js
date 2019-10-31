

function convertatron(num) {
 if (isNaN(num) || num > 4000 || num < 1) {
    return "Enter a number between 1 and 3,999. Or you may have typed in a something that was not a number, pal.";
 } else if (num >= 1000){
   var m = parseInt(num / 1000);
   var mRemain = (num % 1000);
   return m;
   return mRemain;
   

 }





};


















$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var number = parseInt($("input#inputField").val());
    var result = convertatron(number);

    $("ul").append("<li>" + result + "</li>")
  });
});
