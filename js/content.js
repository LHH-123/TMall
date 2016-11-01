// JavaScript Document
var clear;


window.onload=function(){
	
	mv.app.toChange();
	mv.app.toclick();
	mv.app.toBrand();
	mv.app.toBrand2();
	mv.app.toCat();
	mv.app.navDetile();
	mv.app.toFlip();
	};

var mv={};
mv.tools={};
/*给猫头添加mouseover事件*/
mv.tools.addCat=function(n,c,i,m,mn){
	n.addEventListener('mouseover',function(){
		    m.css("marginLeft",function(i,mn){
				
				});
			mv.ui.displayBlock(c);
			
			},false);
	
	};


mv.tools.backGround = function(obj,a){
	obj.style.zIndex = a;
	};
mv.tools.followBack = function(b){
	b.style.backgroundColor = "#f2f2f2";
	};
mv.tools.oldBack = function(b){
	b.style.backgroundColor = "rgba(33,62,105,0.5)";
	};
/*将所有颜色重置为初始颜色*/
mv.tools.allBtn=function(){
	var btn = document.getElementsByClassName("btn_back");
	for(var i=0;i<btn.length;i++){
		btn[i].style.backgroundColor = "rgba(33,62,105,0.5)";
		}
	};
/*将所有back的z-index重置为0*/
mv.tools.allBack=function(){
	var toBack = document.getElementsByClassName("content-c");
	for(var i=0;i<toBack.length;i++){
		toBack[i].style.zIndex = 0;
		}
	};
/*给每个按钮添加点击事件*/		
mv.tools.backGroundClick = function(b,a,i){
	
	b.addEventListener('click',function(){
	  clearInterval(clear);
	  mv.tools.allBtn();
	  mv.tools.allBack(); 
      a.style.zIndex = 10;
	  mv.tools.followBack(b);
	   },false);
	};
	
/*给每个按钮添加点击鼠标移入*/		
mv.tools.backGroundMouseover = function(b,a){
	b.addEventListener('mouseover',function(){
	  clearInterval(clear);
	  mv.tools.allBtn();
	  mv.tools.allBack(); 
      a.style.zIndex = 10;
	  mv.tools.followBack(b);
	   },false);
	};
//添加移入事件改变display值
mv.tools.changeDisplyB=function(b,e){
	b.addEventListener('mouseover',function(){
		mv.ui.displayBlock(e);
		 },false);
	};
mv.tools.changeDisplyN=function(b,e){
	b.addEventListener('mouseout',function(){
		mv.ui.displayNone(e);
		 },false);
	};
mv.ui = {};
//将元素display设置为block
mv.ui.displayBlock=function(e){
	e.style.display="block";
	};
//将元素display设置为none
mv.ui.displayNone=function(e){
	e.style.display="none";
	};
mv.app = {};
/*背景自动切换*/
mv.app.toChange = function(){
	
	var toBack = document.getElementsByClassName("content-c");
	var btn = document.getElementsByClassName("btn_back");
	
	mv.tools.backGround(toBack[0],1);
	mv.tools.followBack(btn[0]);
	 
	var inNow = 0;
	clear = setInterval(changeBack,3000); 
	
	function changeBack(){ 
	
      mv.tools.allBtn();
	  mv.tools.allBack(); 
  
  mv.tools.backGround(toBack[inNow],1);
  mv.tools.followBack(btn[inNow]);
  
  inNow++;
  if(inNow>=toBack.length){
      inNow=0;
  }
   }
};
/*点击和mouseover按钮更改背景*/	
mv.app.toclick=function(){
	
	var btn=document.getElementsByClassName("btn_back");
	var toBack = document.getElementsByClassName("content-c");
	
    for(var i=0;i<btn.length;i++){
		
	
	mv.tools.backGroundClick(btn[i],toBack[i],i);
	mv.tools.backGroundMouseover(btn[i],toBack[i]);
	}
	mv.app.toChange();	
	};	

/*点击导航栏出现猫头*/
mv.app.toCat=function()
{
	var navName=$('.nav_name');
	var cat=$('.little-cat');
	navName.each(function(index,element)
	{   
		$(this).mouseover(function()
		{   
		  cat.eq(index).css('display','block');
		});	
		$(this).mouseout(function()
		{   
		  cat.eq(index).css('display','none');
		});	
		
	});

}
/*点击品牌出现相关信息*/
mv.app.toBrand=function(){
	var toMouseover=document.getElementsByClassName("mouseover");

	for(var i=0;i<toMouseover.length;i++){
     var enterBox1=toMouseover[i].getElementsByClassName("enter-box");
     
	 mv.tools.changeDisplyB(toMouseover[i],enterBox1[0]);
	 mv.tools.changeDisplyN(toMouseover[i],enterBox1[0]);
	}
};

mv.app.toBrand2=function(){	
	var toBranddate=document.getElementsByClassName("brand-date");

	for(var i=0;i<toBranddate.length;i++){
	 var enterBox2=toBranddate[i].getElementsByClassName("enter-box");
     
	 mv.tools.changeDisplyB(toBranddate[i],enterBox2[0]);
	 mv.tools.changeDisplyN(toBranddate[i],enterBox2[0]);
	}
};
/*点击左侧边栏出现导航的具体信息*/
mv.app.navDetile = function() {
	var  contentLeft=document.getElementById("content_left");
	var  navD=document.getElementById("con-nav-detile");
	contentLeft.addEventListener("mouseover",function(){
		mv.ui.displayBlock(navD);
		},false);
	
	contentLeft.addEventListener("mouseout",function(){
		mv.ui.displayNone(navD);
		},false);
	navD.addEventListener("mouseover",function(){
		mv.ui.displayBlock(navD);
		},false);
	navD.addEventListener("mouseout",function(){
		mv.ui.displayNone(navD);
		},false);
	};
	
/*点击按钮，翻转品牌*/
mv.app.toFlip=function() 
{
    $("#toBra").bind("click",function()
	{	
		var ele=$('.brand-flip');
		ele.each(function()		 
		{   
		    var newCon=$(this).siblings('.brand-date');
			var oldCon=newCon.siblings('.brand-flip');
			var theBack=$(this).siblings('.theBlankBack');
			
		    if($(this).data('flipped'))
		    {				    
				$(this).flip
			    ({
				direction:'lr',
                speed: 350,
				onBefore: function(){
					//oldCon.show();
					newCon.css("z-index","0");
					oldCon.css("z-index","200");

				}
			    });
				$(this).data('flipped',false);
		    }
		    else//当前为brand-flip
		    {   
				$(this).flip
				({
					direction:'lr',
                	speed: 350,
					onBefore: function(){
					theBack.css("z-index","100");
				  },
					onEnd: function(){
						//newCon.show();
						oldCon.css("z-index","0");
					    newCon.css("z-index","200");
					}
				});
				$(this).data('flipped',true);
			}        
        });		
	});
}
