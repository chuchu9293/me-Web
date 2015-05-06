function baiduMap() {
	var map = new BMap.Map("baiduMap");//allmap为div标签的id
	var point = new BMap.Point(121.421088, 31.20956);// 东华大学延安西路校区坐标——经度，纬度
	map.centerAndZoom(point, 16);//以point为中心，缩放级别为16
	var navigationControl=new BMap.NavigationControl();
	map.addControl(navigationControl);//添加导航控件，实现拖拽、平移、改变比例尺
	map.enableScrollWheelZoom(true);//允许鼠标滚轮缩放
	var scaleControl = new BMap.ScaleControl();
	map.addControl(scaleControl);// 添加比例尺显示控件
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); // 跳动的动画
	var label = new BMap.Label("我在这里哦", {//标签内容与标签偏移
		offset : new BMap.Size(20, -10)
	});
	marker.setLabel(label);
}