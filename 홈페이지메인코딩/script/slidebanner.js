 $(function(){
  /*슬라이드배너1*/
 var swiper = new Swiper('.slide ', {
    speed: 1000,//버튼을 슬라이드가 넘어가는 시간
	  /*autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },*/
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
        type: "progressbar"
      },
    });
/*슬라이드배너2*/
    var swiper = new Swiper('.slide2 ', {
      speed: 1000,//버튼을 슬라이드가 넘어가는 시간
      /*autoplay: {
          delay: 2500,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
        },*/
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.slide2 .swiper-button-next',
          prevEl: '.slide2 .swiper-button-prev',
        },
      });
      /*슬라이드배너3*/
    var swiper = new Swiper('.slide3 ', {
      speed: 1000,//버튼을 슬라이드가 넘어가는 시간
      /*autoplay: {
          delay: 2500,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
        },*/
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.slide3 .swiper-button-next',
          prevEl: '.slide3 .swiper-button-prev',
        },
      });
});
