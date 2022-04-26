function animator(id, svgId, str) {
  let $count = $(('#' + id));
  let svg = document.getElementById(svgId);

  $({ Counter: 0 }).animate({ Counter: $count.text() }, {
    duration: 1500,
    easing: 'linear',
    step: function () {
      $count.text(Math.ceil(this.Counter)+ "%");
  
      if ($count.text() == str) {
         $(this).stop();
         svg.pauseAnimations();
      }
    }
  });
}



// HTML5
animator('textAnim-1', 'svg-1', '93%');

// CSS3
animator('textAnim-2', 'svg-2', '87%');

// JS
animator('textAnim-3', 'svg-3', '80%');

// SCSS
animator('textAnim-4', 'svg-4', '89%');

// GULP
animator('textAnim-5', 'svg-5', '74%');

// GIT
animator('textAnim-6', 'svg-6', '80%');