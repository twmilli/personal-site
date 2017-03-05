$(function(){
  mentoringBubbleClick();
})


$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
});

function youtubeVidScroll(){
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
}

function startMentoring(){
  var wScroll = $(window).scrollTop();
  if ($('section.mentoring').offset().top - 500 < wScroll){
    if ($(window).width() > 640){
      $('.faces').addClass('launched');
      if (!$('.face').hasClass('has-bubble-open')){
        setTimeout(function(){
            $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 400);
      }
    }else{
      mentoringNarrowStart();
    }
  }
}

function mentoringBubbleClick(){
  $('.face').on('click', function(){
    var $this = $(this),
    faceTop = $this.position().top,
      vertMath = 230-faceTop,
      faceLeft = $this.position().left,
      horzMath = 0 - faceLeft;
    if ($(window).width() > 640){
      $this.parent().css('top', + vertMath + 'px');
    } else{
      if ($this.hasClass('back-btn')){
        mentoringNarrowStart();
        return;
      }else{
        $this.parent().css('left', horzMath + 'px');
      }
    }
    $this.addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');

  });
}

function mentoringNarrowStart(){
  $('.faces').css({
    'top':'230px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open')
  .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart(){
  $('.faces').css({
    'top':'0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open')
  .siblings().removeClass('has-bubble-open');
}

$(window).resize(function(){
  if ($(window).width() > 640){
    mentoringWideStart();
  }else{
    mentoringNarrowStart();
  }
});
