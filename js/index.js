// JavaScript Document
window.onload=function(){
	navHoverAction();
	shafaInstall();
	picsChange();
	selectCard();
	//沙发管家安装教程部分的文本框焦点事件
	textFocusAction();
}
widthAutoChange();
window.onresize=function(){
	widthAutoChange();
}
function widthAutoChange(){
	var width = document.documentElement.clientWidth || document.body.clientWidth;
	var bdw = document.getElementsByTagName("html")[0];
	if(width <= 1200)
	{
		bdw.style.width = 1200+"px";
	}else{
		bdw.style.width = "100%";
	}
}
//导航部分
function navHoverAction(){
	var lis = document.getElementById("nav").
	getElementsByTagName("ul")[0].
	getElementsByTagName("li");
	for(var i=1; i<lis.length; i++)
	{
		lis[i].index = i;
		lis[i].onmouseover=function(){
			if(lis[this.index].className=="nav_on")
			{
				return;
			}
			for(var j=1; j<lis.length; j++)
			{
				lis[j].className="";
			}
			lis[this.index].className="nav_on";
		}
		lis[i].onmouseout=function(){
			lis[this.index].className="";
		}
	}
}
//沙发管家安装教程部分
function shafaInstall(){
	var txtst = document.getElementById("txtselt");
	var iptmdl = document.getElementById("input_model");
	var stTv = document.getElementById("select_tv");
	var iptXh = document.getElementById("input_xh");
	txtst.onfocus=function(){
		if(txtst.value == "选择智能电视/电视盒子品牌")
		{
			txtst.value = "";
		} 
		iptXh.style.display="none";
		stTv.style.display="block";
	}
	txtst.onblur=function(){
		if(txtst.value == "")
		{
			txtst.value = "选择智能电视/电视盒子品牌";
		} 
	}

	iptmdl.onfocus=function(){
		if(iptmdl.value == "输入型号")
		{
			iptmdl.value = "";
		} 
		stTv.style.display="none";
		iptXh.style.display="block";
	}
	iptmdl.onblur=function(){
		if(iptmdl.value == "")
		{
			iptmdl.value = "输入型号";
		} 
	}
}
//沙发管家安装教程部分的文本框焦点事件
function textFocusAction(){
	var sltTv = document.getElementById("select_tv");
	var xh = document.getElementById("input_xh");
	var listBtn = document.getElementById("select_tv").
				getElementsByTagName("ul")[0].
				getElementsByTagName("li");
	var closeBtn = document.getElementById("close_btn");
	var xhCloseBtn = document.getElementById("xhClose_btn");
	var ppLists = document.getElementById("tvPpList").
				getElementsByTagName("div");
	var as = document.getElementById("tvPpList").
			getElementsByTagName("a");

	closeBtn.onclick=function(){
		sltTv.style.display="none";
	}
	xhCloseBtn.onclick=function(){
		xh.style.display="none";
	}
	xhCloseBtn.onmouseover=function(){
		this.style.color="rgb(128,128,128)";
	}
	xhCloseBtn.onmouseout=function(){
		this.style.color="#CCC";
	}
	listBtn[listBtn.length-1].onclick=function(){
		window.open("http://www.shafa.com/methods","_blank");
	}
	for(var m=0; m<as.length; m++)
	{
		as[m].index = m;
		as[m].onmouseover=function(){
			for(var n=0; n<as.length; n++)
			{
				as[n].style.color="#666";
			}
			as[this.index].style.color="#0084BB";
		}
	}

	for(var i=0; i<listBtn.length-1; i++)
	{
		listBtn[i].index = i;
		listBtn[i].onclick=function(){
			if(listBtn[this.index].className=="stTv_on")
			{
				return;
			}
			for(var j=0; j<listBtn.length-1; j++)
			{
				listBtn[j].className="";
				ppLists[j].style.display="none";
			}
			listBtn[this.index].className="stTv_on";
			ppLists[this.index].style.display="block";
		}
	}
}

//图片轮播部分
function picsChange(){
	var lis = document.getElementById("banner").
			  getElementsByTagName("ul")[0].
			  getElementsByTagName("li");
	var timer;
	var a = 0;
	function animate(){
		for(var i=0; i<lis.length; i++)
		{	
			lis[i].style.display="none";
		}
		if(a==lis.length)
		{
			a=0;
		}
		lis[a].style.display="block";
		a++;
	}
	timer=setInterval(function(){
		animate();
	},2000);

}

//智能电视市场与应用
function selectCard(){
	var btns = document.getElementById("hotbtns").
				getElementsByTagName("span");
	var lists = document.getElementById("hot_list").
				getElementsByTagName("ul");
	var aitv = document.getElementById("aitv").
				getElementsByTagName("li");
	listsChange(aitv);
	var tvbox = document.getElementById("tvbox").
				getElementsByTagName("li");
	listsChange(tvbox);
	for(var i = 0; i<btns.length; i++)
	{
		btns[i].index = i;
		btns[i].onclick=function(){
			if(btns[this.index].className =="htbt_on")
			{
				return;
			}
			for(var j=0; j<btns.length; j++)
			{
				btns[j].className="";
				lists[j].style.display = "none";
			}
			btns[this.index].className = "htbt_on";
			lists[this.index].style.display = "block";
		}
	}  
}
function listsChange(lists){
	for(var i = 0; i<lists.length; i++)
	{
		lists[i].index = i;
		lists[i].onmouseover=function(){
			if(lists[this.index].style.height == "auto")
			{
				return;
			}
			for(var j=0; j<lists.length; j++)
			{
				lists[j].style.height = "20px";
			}
			lists[this.index].style.height = "auto";
		}
	} 
}