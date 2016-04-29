//地图类
var MapData = [];

//地图二数据
var MapTwo = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
	[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]];
//地图一数据
var MapOne = [[0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,0],
	[0,0,0,0,0,0,0,0,1,0],
	[0,0,0,0,0,0,0,0,1,0],
	[0,0,0,0,0,0,0,0,1,0],
	[0,1,1,1,1,1,1,1,1,0],
	[0,1,0,0,0,0,0,0,0,0],
	[0,1,0,0,0,0,0,0,0,0],
	[0,1,0,0,0,0,0,0,0,0],
	[0,1,0,0,0,0,0,0,0,0]];
//地图绘制类
var Map = {
	//画出地图
	draw : function(map, ctx){
		
		var i, j, w, oft, ofl;
		if(document.body.clientWidth / 20 >= document.body.clientHeight / 10) {
			w = document.body.clientHeight / 10;
			oft = document.body.clientHeight / 10;
			ofl = (document.body.clientWidth - document.body.clientHeight / 10 * 18)/2;
		}else {
			w = document.body.clientWidth / 20;
			oft = (document.body.clientHeight - document.body.clientWidth / 20 * 10)/2;
			ofl = document.body.clientWidth / 20;
		}

		for(i = 0; i < 18;i++){
			for(j = 0;j<8;j++){
				//画背景地图
				if(map[j][i] == 0)Canvas.drawRect(ctx,i*w + ofl,j*w+oft,w,w,'red');
				//画可以走的路
				else Canvas.fillRect(ctx,i*w + ofl,j*w+oft,w,w,'black');
			}
		}
	}
}