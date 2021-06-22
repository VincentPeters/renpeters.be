require('js/favicon.js');


$(document).ready(function () {
  $('.js-show-info').on('click', (e) => {
    e.preventDefault();
    $('.js-text').addClass('hidden');
    $('.js-info').removeClass('hidden');
  })

  $('.js-start-ar').on('click', (e) => {
    e.preventDefault();
    $('.ar').addClass('show')
    $('.js-kaartje').addClass('hidden')
    $(".ar").load("ar");
  })

  var isPlaying = false;
  var first = true;
  const audio = document.getElementById("audio")

  $('*').click(function () {
    if (first) {
      isPlaying = true;
      $('.js-mute').removeClass('hidden');
      audio.play();
      first = false;
    }
  });

  $('.js-mute').click(function () {
    isPlaying ? audio.pause() : audio.play();
  });

  audio.onplaying = function () {
    isPlaying = true;
  };

  audio.onpause = function () {
    isPlaying = false;
  };
});