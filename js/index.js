$(function () {

    function _scale(_this, i) {
        $(_this).css('transform', 'scale(' + i + ')').css('transform-origin', '50% 20%');
        $(_this).css('-webkit-transform', 'scale(' + i + ')').css('-webkit-transform-origin', '50% 20%');
        $(_this).css('-moz-transform', 'scale(' + i + ')').css('-moz-transform-origin', '50% 20%');
    }

    resizeSection();
    function resizeSection() {
        var bodyW = $('body').width();
        var $section = $(".section-main");
        if (bodyW < 1900 && bodyW >= 640) {
            $section.each(function () {
                _scale(this, 0.75);
            });
        } else {
            _scale(this, 1);
        }
    }

    $(window).resize(resizeSection);


    $('#fullpage').fullpage({
        //autoScrolling:false,
        //scrollOverflow: true,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
    });

    var swiper;
    swiper = $('.swiper-container').swiper({
        speed: 600,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '.pagination',
        paginationClickable: true,
    });

    //绑定事件
    $("#menu-slide").click(function () {
        $(".menu-list").toggleClass('active');
    });

    $(".section2-menu li").click(function () {
        var i = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $(".section2-tab").eq(i).addClass('active').siblings('.section2-tab').removeClass('active');
    })
})
