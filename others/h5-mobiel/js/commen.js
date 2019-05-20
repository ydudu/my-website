
(function resizeFont(){
    var ht = document.getElementsByTagName('html')[0];
    var width = window.innerWidth;
    ht.style.fontSize = width/10+'px';

    window.onresize = function(){
        resizeFont();
    }
})()

$('#slide2').swipeSlide({
    autoSwipe: true,//自动切换默认是
    speed: 3000,//速度默认4000
    continuousScroll: true,//默认否
    transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',//过渡动画linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier
    lazyLoad: true,//懒加载默认否
    firstCallback: function (i, sum, me) {
        me.find('.dot').children().first().addClass('cur');
    },
    callback: function (i, sum, me) {
        me.find('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
    }
})

