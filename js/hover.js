$(function(){
    var bTop = $('.two-text').offset().top;//盒子距离其父元素的top值
    var bLeft = $('.two-text').offset().left;//盒子距离其父元素的left值
    var W = $('.two-text').width();//盒子的长度width
    var H = $('.two-text').innerHeight();//盒子的宽度height
    $('.intro').mouseenter(function() {
        $('.two-text').mousemove(function (e) {
            var mX = e.pageX - bLeft; //鼠标相对盒子x轴坐标值
            var mY = e.pageY - bTop; //鼠标相对盒子Y轴坐标值
            //右-上下
            var xdeg = (mX-W/2)/20;
            var ydeg = (mY-H/2)/20;
            if (mX>W/2&&mY<H/2) {
                $('.two-text').css({"transform": "rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) translate("+xdeg+"px,"+ydeg+"px) scale(1.03)"});
            }else if(mX>W/2/3&&mY>H/2){
                $('.two-text').css({"transform": "rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) translate("+xdeg+"px,"+ydeg+"px) scale(1.03)"});
            }
            //左-下上
            else if(mX<W/2&&mY>H/2){
                $('.two-text').css({"transform": "rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) translate("+xdeg+"px,"+ydeg+"px) scale(1.03)" });
            }else if(mX<W/2&&mY<H/2){
                $('.two-text').css({"transform": "rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) translate("+xdeg+"px,"+ydeg+"px) scale(1.03)"});
            }

        });
        $('.two-text').mouseout(function (e) {
            $('.two-text').css({"transform": "rotateX(0deg)"});
            $('.two-text').mousemove = null;
            $('.two-text').mouseout = null;
        });
    })
});