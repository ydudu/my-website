window.onload=function()
{
var timer=null;
var banner=document.getElementById("banner_2");
var img=banner.getElementsByTagName('img');
var index=0;
	clearInterval(timer);
	timer=setInterval(function(){
     
	   if(img.length<=++index)
	 {
         index=0;
	 }
	 
		for(var i=0;i<img.length;++i)
		{			
		img[i].style.display="none";			
		}
		img[index].style.display="block";
	},2000)
}