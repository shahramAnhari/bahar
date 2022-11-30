$(document).ready(function(){




    //   $("a.btn").click(function(){
    //     $("div.bg2").hide();
    //   });



    //   $("a.btn2").click(function(){
    //     $("div.bg2").show();
    //   });


    $("a.btn").click(function(){
            $("div.bg2").fadeOut(3000);
          });



      $("a.btn2").click(function(){
        $("div.bg2").fadeIn(3000);
      });


    $("a.btn3").click(function(){
        $("div.bg2").fadeToggle(3000);
      });


    });