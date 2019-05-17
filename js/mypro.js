//音乐关闭
$(function(){
    $("#music").bind("click", function() {
        var audio = $("#music audio")[0];
        if (audio.paused) {
            audio.play(); //audio.play();// 播放
            $(this).css('animation','musicrun 3s infinite linear')
        } else {
            audio.pause(); // 暂停
            $(this).css('animation','musicrun 0s infinite linear')
        }
    });
	// 点击有滑动延迟效果
    $('.scrollTo').click(function(){
        $('html,body').animate({
            scrollTop:$($(this).attr("href")).offset().top
        },500);
        return false;
    });

    //导航栏滚动到一定程度吸顶
    var section2Height = $('#section2').offset().top;
    var navFix = $('#myScrollspy');
    $(window).scroll(function(){
        if($(document).scrollTop()>=section2Height){
            navFix.addClass('navbar-fixed-top');
        }else{
            navFix.removeClass('navbar-fixed-top');
        }
    });
	// bootstrap单击导航条下的li后，自动收回
    var collaPase = $('#collapse');
    var navBar =  $("#navbar");
    $(".nav > li > a").click(function(){
        collaPase.addClass("collapsed");
        collaPase.attr("aria-expanded",false);
        navBar.removeClass("in");
        navBar.attr("aria-expanded",false);
    });

	//return-top
    $('.return-top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    var min_height = document.documentElement.clientHeight /2;
    function returnTop(){
        $(window).scroll(function(){
            var s = $(window).scrollTop();
            if(s > min_height){
                $('.return-top').fadeIn(800);
            }else{
                $('.return-top').fadeOut(800);
            }
        });
    }
    returnTop();
});
$(function(){
    //按钮移入移出
    var navToggle = $('.navbar-default .navbar-toggle');
    navToggle.hover(function(){
            $(this).css('background','#64645e');
    },function(){
        $(this).css('background','#64645e');
    } )
});

//右部分波纹
$(function(){
    var top1 = $("#section1").offset().top-30;
    var top2 = $("#section2").offset().top-30;
    var top3 = $("#section3").offset().top-30;
    var top4 = $("#section4").offset().top-30;
    var top5 = $("#section5").offset().top-30;
    var top6 = $("#section6").offset().top-30;

    var section2 = $("#section2");
    var section3 = $("#section3");
    var section4 = $("#section4");
    var section5 = $("#section5");
    var section6 = $("#section6");

    var rightNavLi = $('.right-nav li');
    var index= rightNavLi.index();
    rightNavLi.eq(index).addClass('sploosh').siblings().removeClass('sploosh');
    $(window).scroll(function() {
        var s = $(window).scrollTop();
        var gitLink = $('.github-link');
        if(s>top1 && s<top2) {
            rightNavLi.eq(0).addClass('sploosh').siblings().removeClass('sploosh');
            gitLink.css({'left':'20px','top': '10px'});
        }else if(s>top2 && s<top3) {
            rightNavLi.eq(1).addClass('sploosh').siblings().removeClass('sploosh');
            gitLink.css({'left':'250px','top': '1px'});
            section2.addClass("active");
        }else if(s>top3 && s<top4) {
            rightNavLi.eq(2).addClass('sploosh').siblings().removeClass('sploosh');
            gitLink.css({'left':'250px','top': '1px'});
            section3.addClass("active");
        }else if(s>top4 && s<top5) {
            rightNavLi.eq(3).addClass('sploosh').siblings().removeClass('sploosh');
            gitLink.css({'left':'250px','top': '1px'});
            section4.addClass("active");
        }else if(s>top5 && s<top6) {
            rightNavLi.eq(4).addClass('sploosh').siblings().removeClass('sploosh');
            gitLink.css({'left':'250px','top': '1px'});
            section5.addClass("active");
        }else if(s>top6) {
            rightNavLi.eq(5).addClass('sploosh').siblings().removeClass('sploosh');
            gitLink.css({'left':'250px','top': '1px'});
            section6.addClass("active");
        }
        if(s>top6){
            $('#comments').fadeOut();
        }else{
            $('#comments').fadeIn();
        }
    });
});
$(function(){
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    var timer4 = null;
    var timer5 = null;
    var timer6 = null;
    $('.icon-1').hover(function(){
        clearTimeout(timer1);
        $('.githubprompt').fadeIn();
    },function(){
        timer1 = setTimeout(function(){
            $('.githubprompt').fadeOut();
        },100);
    });
    $('.icon-2').hover(function(){
        clearTimeout(timer2);
        $('.qqprompt').fadeIn();
    },function(){
        timer2 = setTimeout(function(){
            $('.qqprompt').fadeOut();
        },100);
    });
    $('.icon-3').hover(function(){
        clearTimeout(timer3);
        $('.weixinprompt').fadeIn();
    },function(){
        timer3 = setTimeout(function(){
            $('.weixinprompt').fadeOut();
        },100);
    });
    $('.icon-4').hover(function(){
        clearTimeout(timer4);
        $('.weiboprompt').fadeIn();
    },function(){
        timer4 = setTimeout(function(){
            $('.weiboprompt').fadeOut();
        },100);
    });
    $('.icon-5').hover(function(){
        clearTimeout(timer5);
        $('.mailprompt').fadeIn();
    },function(){
        timer5 = setTimeout(function(){
            $('.mailprompt').fadeOut();
        },100);
    });
    $('.icon-6').hover(function(){
        clearTimeout(timer6);
        $('.blogprompt').fadeIn();
    },function(){
        timer6 = setTimeout(function(){
            $('.blogprompt').fadeOut();
        },100);
    });
});
//浅变轮番
$(function(){
    var timer  = 0;
    var iLi = $('.cover1-bg li');
    var i = iLi.index();
    startMove();
    function startMove() {
        clearInterval(timer);
        timer = setInterval(function(){
            if(i >= 3){
                i=0;
            }else{
                i++;
            }
            iLi.eq(i).fadeIn().siblings().fadeOut();
        },5000);
    }
});

