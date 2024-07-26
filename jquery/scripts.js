    $(".dark-btn").click(
        function(){
          $(".box").toggleClass("dark");
          $("body").toggleClass("dark");
          $(".dark-btn").toggleClass("engaged");
        }
);

$(".glow-btn").click(
    function(){
      $(".box").toggleClass("glow");
      $(".glow-btn").toggleClass("engaged");
    }
);

$(".spin-btn").click(
    function(){
      $(".box").toggleClass("spin");
      $(".spin-btn").toggleClass("engaged");
    }
);

$(".reveal-btn").click(
  function(){
    $(".chair").toggleClass("reveal");

    $(".reveal-btn").toggleClass("engaged");
  }
);