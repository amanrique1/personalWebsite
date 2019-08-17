
function main() {

  (function () {
    'use strict';

    $('a.page-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    // affix the navbar after scroll below header
    $('#nav').affix({
      offset: {
        top: $('header').height()
      }
    });

    // skills chart
    $(document).ready(function (e) {
      //var windowBottom = $(window).height();
      var index = 0;
      $(document).scroll(function () {
        var top = $('#skills').height() - $(window).scrollTop();
        if (top < -300) {
          if (index == 0) {

            $('.chart').easyPieChart({
              easing: 'easeOutBounce',
              onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
              }
            });

          }
          index++;
        }
      })
      //console.log(nagativeValue)
    });


    // Portfolio isotope filter
    $(window).load(function () {
      var $container = $('.portfolio-items');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $('.cat a').click(function () {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });

    });


    // CounterUp
    $(document).ready(function ($) {
      if ($("span.count").length > 0) {
        $('span.count').counterUp({
          delay: 10, // the delay time in ms
          time: 1500 // the speed time in ms
        });
      }
    });




  }());


}
function modal(pModal, pBtn, pPos,pType) {
  // Get the modal
  var modal = document.getElementById(pModal);

  // Get the button that opens the modal
  var btn = document.getElementById(pBtn);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[pPos];

  // When the user clicks the button, open the modal 
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    pauseVideo(modal);
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      pauseVideo(modal);
      modal.style.display = "none";
    }
  }
}
function pauseVideo(modal,pType){
  var iframe = modal.querySelector( 'iframe');
  if(pType==0){
  var obj = modal.querySelector( 'video' );
  }else{
    var obj = modal.querySelector( 'audio' );
  }
  if ( iframe ) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if ( obj ) {
    obj.pause();
  }
}
main();
modal();