
// var num = ();
// var numM = ();
// var numD
function convertatron(num) {

 for (var z = num; z > 0; z--){
   if (z >= 10){
     var x = parseInt(z / 10);
     z = (z % 10);
     console.log(x + " Xs");
     if (z >= 5){
       var v = parseInt(z / 5);
       z =(z % 5);
       console.log(v + " Vs");
     }
     if (z >= 1){
         var i = parseInt(z / 1);
         z = (z % 1);
         console.log(i + " Is");
       }
   }
   else if (z >= 5){
     var v = parseInt(z / 5);
     z =(z % 5);
     console.log(v + " Vs");
     if (z >= 1){
       var i = parseInt(z / 1);
       z = (z % 1);
       console.log(i + " Is");
     }
   } else if (z >= 1){
     var i = parseInt(z / 1);
     z = (z % 1);
     console.log(i + " Is");
   }
 }
}


$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var number = parseInt($("input#inputField").val());
    var result = convertatron(number);

    $("ul").append("<li>" + result + "</li>")
  });
});
