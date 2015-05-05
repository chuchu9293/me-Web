function baiduMap() {
	var map = new BMap.Map("allmap");
	// 东华大学延安西路校区坐标
	var point = new BMap.Point(121.421088, 31.20956);
	map.centerAndZoom(point, 16);
	// var zoomControl=new BMap.ZoomControl();
	// map.addControl(zoomControl);//添加缩放控件
	var scaleControl = new BMap.ScaleControl();
	map.addControl(scaleControl);// 添加比例尺控件
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); // 跳动的动画
	var label = new BMap.Label("我在这里哦", {
		offset : new BMap.Size(20, -10)
	});
	marker.setLabel(label);
}