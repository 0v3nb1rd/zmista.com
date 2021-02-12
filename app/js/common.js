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

  /*------------ Accordion Marketing page --------------*/

  $('.accord .accord__btn').click(function () {
    $(this).next('.accord__content').slideToggle();
    $(this).closest('li').siblings().find('.active').removeClass('active');
    $(this).toggleClass('active');
    $(this).closest('li').siblings().find('.accord__content').slideUp();
  });

  /*------------ jquery-circle-progress Marketing page --------------*/
  const firstProc = $('#circle_first').find('strong').html();
  $('#circle_first')
    .circleProgress({
      value: `0.${firstProc}`,
      fill: '#71B21d',
      size: 240,
      thickness: 24,
      startAngle: (-Math.PI / 4) * 2,
    })
    .on('circle-animation-progress', function (event, progress) {
      $(this)
        .find('strong')
        .html('+' + Math.round(firstProc * progress) + '%');
    });

  const secProc = $('#circle_second').find('strong').html();
  $('#circle_second')
    .circleProgress({
      value: `0.${secProc}`,
      fill: '#71B21d',
      size: 180,
      thickness: 18,
      startAngle: (-Math.PI / 4) * 2,
    })
    .on('circle-animation-progress', function (event, progress) {
      $(this)
        .find('strong')
        .html('+' + Math.round(secProc * progress) + '%');
    });
});
