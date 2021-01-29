$(function () {
  // Custom JS

  /*------------ Modal leave reviews --------------*/
  $('#setReview').click(function (e) {
    e.preventDefault();
    $('body').addClass('no-scroll');
    $('.modal-review').addClass('active');
  });
  $('.close-btn').click(function () {
    $('body').removeClass('no-scroll');
    $('.modal-review').removeClass('active');
  });

  var hashLinks = document.querySelectorAll("a[href^='#']");
  [].forEach.call(hashLinks, function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      history.pushState({}, '', link.href);
      history.pushState({}, '', link.href);
      history.back();
    });
  });
});
