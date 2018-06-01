window.onload=function()
{ 
	var banner=document.getElementById('banner');
	var xlist=document.getElementById('xuhao').getElementsByTagName('li');
	var pic=document.getElementById('pic').getElementsByTagName('li');
	var timer=null;
	var i=0;
	var index=0;
	
	
	timer=setInterval(autoPlay,5000);
	banner.onmouseover=function()
	{
		clearInterval(timer);
	}
	
	banner.onmouseout=function()
	{
		timer=setInterval(autoPlay,5000);
	}
	for (var i=0; i<xlist.length;i++)
	{
		xlist[i].onmouseover=function()
		{
			clearInterval(timer);
			index=this.innerText-1;
			changePic(index);
		}
	}
	function autoPlay()
	{
		if(++index >= pic.length)index=0;
		{			
		    changePic(index);
		}
	}
	
	function changePic(curIndex)
	{
		for(var i=0; i<pic.length; ++i)
		{
		pic[i].style.display='none';
		
		xlist[i].className="";
		}
		pic[curIndex].style.display="block";
		xlist[curIndex].className="on";
	}
	
}
	
	
