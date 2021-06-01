var user = $("#username").val();
$("#boton").click(function(){
    var user = $("#username").val();
    var pass= $("#password").val();
    $("#boton").removeClass("btn-primary");
    $("#boton").addClass("btn-danger");
    alert(user+" /"+pass);
});

function cambio(){
    $("#boton").css({
        color:"yellow",
        backgroundColor:"black"
    });
}
function diseño(){
    $("#c2").attr("href", "css/estilos2.css")
}
function relleno(){
    $("#username").attr("value", "Alvaro Alva Chipana")
    $("#password").attr("value", "12345678")
    $("#dni").attr("value", "73057953")
    $("#distrito").attr("value", "Chaclacayo")
}


  $(document).ready(function(){
    $("input").keydown(function(){
      $("input").css("background-color", "yellow");
    });
    $("input").keyup(function(){
      $("input").css("background-color", "red");
    });
  });


  $("#bo1").click(function() {
    $("#img1").hide(1500);
    });
    

    $("#bo2").click(function() {
    $("#img1").show("slow");
    });
    


    $("#bo3").click(function() {
    $("#img1").animate({fontSize:'2em',width:205,padding:25}, 1500);
    });
    

    $("#bo4").click(function() {
    $("#img1").fadeToggle(3000);
    });


    $("#bo5").click(function() {
        $("#img1").fadeIn(3000);
        });
        var user =document.getElementById("username");
        $("#bo6").on("click",{mensaje:"Un momento..."}, function(event) {
          alert("Enviando tus datos ->["+ event.data.mensaje+" "+user.value+"]");
          });