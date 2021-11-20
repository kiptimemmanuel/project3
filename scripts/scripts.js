function fn() {
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let commentInput = document.getElementById("comment").value;
  console.log(nameInput, emailInput, commentInput);
  alert(
    nameInput +
      " we have received your message. Thank you for reaching out to us"
  );
}
$(document).ready(function () {
  $(".p-design").click(function () {
    console.log("clicked");
    $(".design-hidden").toggle();
    $(".design-showing").toggle();
  });
});

$(document).ready(function () {
  $(".pdevelop").click(function () {
    console.log("clicked");
    $(".develop-hidden").toggle();
    $(".develop-showing").toggle();
  });
});
$(document).ready(function () {
  $(".product").click(function () {
    console.log("clicked");
    $(".product-hidden").toggle();
    $(".product-showing").toggle();
  });
});
$(document).ready(function(){
    $(".portfolio-1").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text").css("visibility") == "hidden") {
          $(".inner-text").css("visibility", "visible");
        }
      });
      $(".portfolio-1").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text").css("visibility") == "visible") {
          $(".inner-text").css("visibility", "hidden");
        }
      });
      $(".portfolio-2").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text2").css("visibility") == "hidden") {
          $(".inner-text2").css("visibility", "visible");
        }
      });
      $(".portfolio-2").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text2").css("visibility") == "visible") {
          $(".inner-text2").css("visibility", "hidden");
        }
      });
      $(".portfolio-3").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text3").css("visibility") == "hidden") {
          $(".inner-text3").css("visibility", "visible");
        }
      });
      $(".portfolio-3").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text3").css("visibility") == "visible") {
          $(".inner-text3").css("visibility", "hidden");
        }
      });
      $(".portfolio-4").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text4").css("visibility") == "hidden") {
          $(".inner-text4").css("visibility", "visible");
        }
      });
      $(".portfolio-4").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text4").css("visibility") == "visible") {
          $(".inner-text4").css("visibility", "hidden");
        }
      });
      $(".portfolio-5").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text5").css("visibility") == "hidden") {
          $(".inner-text5").css("visibility", "visible");
        }
      });
      $(".portfolio-5").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text5").css("visibility") == "visible") {
          $(".inner-text5").css("visibility", "hidden");
        }
      });
      $(".portfolio-6").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text6").css("visibility") == "hidden") {
          $(".inner-text6").css("visibility", "visible");
        }
      });
      $(".portfolio-6").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text6").css("visibility") == "visible") {
          $(".inner-text6").css("visibility", "hidden");
        }
      });
      $(".portfolio-7").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text7").css("visibility") == "hidden") {
          $(".inner-text7").css("visibility", "visible");
        }
      });
      $(".portfolio-7").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text7").css("visibility") == "visible") {
          $(".inner-text7").css("visibility", "hidden");
        }
      });
      $(".portfolio-8").mouseover(function () {
        console.log("MOUSE IS OVER");
        if ($(".inner-text8").css("visibility") == "hidden") {
          $(".inner-text8").css("visibility", "visible");
        }
      });
      $(".portfolio-8").mouseout(function () {
        console.log("MOUSE IS out");
        if ($(".inner-text8").css("visibility") == "visible") {
          $(".inner-text8").css("visibility", "hidden");
        }
      });
      
      
      
})
