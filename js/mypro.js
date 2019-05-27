$(function() {
    $("#music").bind("click", function() {
        var a = $("#music audio")[0];
        a.paused ? (a.play(), $(this).css("animation", "musicrun 3s infinite linear")) : (a.pause(), $(this).css("animation", "musicrun 0s infinite linear"))
    });
    $(".scrollTo").click(function() {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
        return !1
    });
    var d = $("#section2").offset().top,
        c = $("#myScrollspy");
    $(window).scroll(function() {
        $(document).scrollTop() >= d ? c.addClass("navbar-fixed-top") : c.removeClass("navbar-fixed-top")
    });
    var a = $("#collapse"),
        e = $("#navbar");
    $(".nav > li > a").click(function() {
        a.addClass("collapsed");
        a.attr("aria-expanded", !1);
        e.removeClass("in");
        e.attr("aria-expanded", !1)
    });
    $(".return-top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
    var g = document.documentElement.clientHeight / 2;
    (function() {
        $(window).scroll(function() {
            $(window).scrollTop() > g ? $(".return-top").fadeIn(800) : $(".return-top").fadeOut(800)
        })
    })()
});
$(function() {
    $(".navbar-default .navbar-toggle").hover(function() {
        $(this).css("background", "#64645e")
    }, function() {
        $(this).css("background", "#64645e")
    })
});
$(function() {
    var d = $("#section1").offset().top - 30,
        c = $("#section2").offset().top - 30,
        a = $("#section3").offset().top - 30,
        e = $("#section4").offset().top - 30,
        g = $("#section5").offset().top - 30,
        h = $("#section6").offset().top - 30,
        l = $("#section2"),
        m = $("#section3"),
        n = $("#section4"),
        p = $("#section5"),
        q = $("#section6"),
        f = $(".right-nav li"),
        r = f.index();
    f.eq(r).addClass("sploosh").siblings().removeClass("sploosh");
    $(window).scroll(function() {
        var b = $(window).scrollTop(),
            k = $(".github-link");
        b > d && b < c ? (f.eq(0).addClass("sploosh").siblings().removeClass("sploosh"), k.css({
            left: "20px",
            top: "10px"
        })) : b > c && b < a ? (f.eq(1).addClass("sploosh").siblings().removeClass("sploosh"), k.css({
            left: "250px",
            top: "1px"
        }), l.addClass("active")) : b > a && b < e ? (f.eq(2).addClass("sploosh").siblings().removeClass("sploosh"), k.css({
            left: "250px",
            top: "1px"
        }), m.addClass("active")) : b > e && b < g ? (f.eq(3).addClass("sploosh").siblings().removeClass("sploosh"), k.css({
            left: "250px",
            top: "1px"
        }), n.addClass("active")) : b > g && b < h ? (f.eq(4).addClass("sploosh").siblings().removeClass("sploosh"), k.css({
            left: "250px",
            top: "1px"
        }), p.addClass("active")) : b > h && (f.eq(5).addClass("sploosh").siblings().removeClass("sploosh"), k.css({
            left: "250px",
            top: "1px"
        }), q.addClass("active"));
        b > h ? $("#comments").fadeOut() : $("#comments").fadeIn()
    })
});
$(function() {
    var d = null,
        c = null,
        a = null,
        e = null,
        g = null,
        h = null;
    $(".icon-1").hover(function() {
        clearTimeout(d);
        $(".githubprompt").fadeIn()
    }, function() {
        d = setTimeout(function() {
            $(".githubprompt").fadeOut()
        }, 100)
    });
    $(".icon-2").hover(function() {
        clearTimeout(c);
        $(".qqprompt").fadeIn()
    }, function() {
        c = setTimeout(function() {
            $(".qqprompt").fadeOut()
        }, 100)
    });
    $(".icon-3").hover(function() {
        clearTimeout(a);
        $(".weixinprompt").fadeIn()
    }, function() {
        a = setTimeout(function() {
            $(".weixinprompt").fadeOut()
        }, 100)
    });
    $(".icon-4").hover(function() {
        clearTimeout(e);
        $(".weiboprompt").fadeIn()
    }, function() {
        e = setTimeout(function() {
            $(".weiboprompt").fadeOut()
        }, 100)
    });
    $(".icon-5").hover(function() {
        clearTimeout(g);
        $(".mailprompt").fadeIn()
    }, function() {
        g = setTimeout(function() {
            $(".mailprompt").fadeOut()
        }, 100)
    });
    $(".icon-6").hover(function() {
        clearTimeout(h);
        $(".blogprompt").fadeIn()
    }, function() {
        h = setTimeout(function() {
            $(".blogprompt").fadeOut()
        }, 100)
    })
});
$(function() {
    var d = 0,
        c = $(".cover1-bg img"),
        a = c.index();
    (function() {
        clearInterval(d);
        d = setInterval(function() {
            1 <= a ? a = 0 : a++;
            c.eq(a).fadeIn().siblings().fadeOut()
        }, 5E3)
    })()
});