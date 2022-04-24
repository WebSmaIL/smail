let svg = document.getElementById("animated");


let $count = $(('#count'));
$({ Counter: 0 }).animate({ Counter: $count.text() }, {
  duration: 1500,
  easing: 'linear',
  step: function () {
    $count.text(Math.ceil(this.Counter)+ "%");

    if ($count.text() == "90%") {
       $(this).stop();
       svg.pauseAnimations();
    }
  }
});