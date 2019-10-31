

function convertatron(num) {


  while (num > 0){
 // if (isNaN(num) || num > 4000 || num < 1) {
 //    return "Enter a number between 1 and 3,999. Or you may have typed in a something that was not a number, pal.";
   if (num >= 1000){
   var m = parseInt(num / 1000);
   num = (num % 1000);
   return m + "Ms";
 } else if (num >= 500){
   var d = parseInt(num / 500);
   num = (num % 500);
   return d + "Ds";
 } else if (num >= 100){
   var c = parseInt(num / 100);
   num = (num % 100);
   return c + "Cs";
 } else if (num <= 50){
   var l = parseInt(num / 50);
   num = (num % 50);
   return l + "Ls";
 } else if (num <= 10) {
   var x = parseInt(num / 10);
   num = (num % 10);
   return x + "Xs";
 }else if (num <= 5) {
   var v = parseInt(num / 5);
   num = (num % 5);
   return v + "Vs";
 }else if (num <= 1) {
   var i = parseInt(num / 1);
   num = (num % 1);
   return i + "Is";
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
