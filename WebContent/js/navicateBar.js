'use strict'

//子标签选中样式激活
$(function(){
	var urlList=['index.html','picture.html','inDHU.html','cooking.html','location.html','visit.html'];
	var url=window.location.href;
	for(var i=0;i<urlList.length;i++){
		if(url.indexOf(urlList[i])>0){//子串查找成功
			$('#navBarID').children().eq(i).addClass('active');//得到匹配的标签
		}
	}
	
	
	//二级菜单弹出动画效果
	$('#gaoKaoID').hover(function(){
		$('#gaoKaoChildID').css("height","0px").show();
		$('#gaoKaoChildID').animate({height:"100px"},{
			duration:1000,
			easing:'easeOutBounce'//底部反弹效果
		})
	},
	function(){
		setTimeout(function(){$('#gaoKaoChildID').hide();},500)
	});
});

