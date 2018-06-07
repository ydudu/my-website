//音乐关闭
$(function(){
    $(".music-img").bind("click", function() {
        $(this).toggleClass("pause");
        var audio = $(".music-img audio")[0];
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
    $(".nav > li > a").click(function(){
            $('#collapse').addClass("collapsed");
            $('#collapse').attr("aria-expanded",false);
            $("#navbar").removeClass("in");
            $("#navbar").attr("aria-expanded",false);
    });
	//return-top
    $('.return-top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });
    $(window).scroll(function(){
        if($('html,body').scrollTop()>300){
            $('.return-top').fadeIn(800);
        }else{
            $('.return-top').fadeOut(800);
        }
    });

});
$(function(){
    $('.li-o1,.li-p1').hover(function(){
            $('.intro-p1').css('color','#1bbe22');
            $('.li-o1 em').css({'top':'35px','right':'-18px','width':'30px','height': '30px','border':'8px solid #ffff00'});
        },
        function(){
            $('.intro-p1').css('color','');
            $('.li-o1 em').css({'top':'40px','right':'-14px','width':'20px','height': '20px','border':'2px solid #ffff00'});
        });
    $('.li-o2,.li-p2').hover(function(){
            $('.intro-p2').css('color','#1bbe22');
            $('.li-o2 em').css({'top':'35px','right':'-18px','width':'30px','height': '30px','border':'8px solid #ffff00'});
        },
        function(){
            $('.intro-p2').css('color','');
            $('.li-o2 em').css({'top':'40px','right':'-14px','width':'20px','height': '20px','border':'2px solid #ffff00'});
        });
    $('.li-o3,.li-p3').hover(function(){
            $('.intro-p3').css('color','#1bbe22');
            $('.li-o3 em').css({'top':'35px','right':'-18px','width':'30px','height': '30px','border':'8px solid #ffff00'});
        },
        function(){
            $('.intro-p3').css('color','');
            $('.li-o3 em').css({'top':'40px','right':'-14px','width':'20px','height': '20px','border':'2px solid #ffff00'});
        });
    //按钮移入移出
    $('.navbar-default .navbar-toggle').hover(function(){
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
    var index= $('.right-nav li').index();
    $('.right-nav li').eq(index).addClass('sploosh').siblings().removeClass('sploosh');
    $(window).scroll(function() {
        var s = $(window).scrollTop();
        if(s>top1 && s< top2) {
            $('.right-nav li').eq(0).addClass('sploosh').siblings().removeClass('sploosh');
        }else if(s>top2 && s<top3) {
            $('.right-nav li').eq(1).addClass('sploosh').siblings().removeClass('sploosh');
        }else if(s>top3 && s<top4) {
            $('.right-nav li').eq(2).addClass('sploosh').siblings().removeClass('sploosh');
        }else if(s>top4 && s<top5) {
            $('.right-nav li').eq(3).addClass('sploosh').siblings().removeClass('sploosh');
        }else if(s>top5 && s<top6) {
            $('.right-nav li').eq(4).addClass('sploosh').siblings().removeClass('sploosh');
        }else if(s>top6) {
            $('.right-nav li').eq(5).addClass('sploosh').siblings().removeClass('sploosh');
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
    var iLi = $('.cover1-bg li');
    var i = iLi.index();
    var timer = 0;
    clearInterval(timer);
    timer = setInterval(function(){
        if(i >= 3){
            i=0;
        }else{
            i++;
        }
        iLi.eq(i).fadeIn().siblings().fadeOut();
    },5000)
});