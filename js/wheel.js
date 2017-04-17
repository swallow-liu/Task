$(function(){
	      var num = 6;   // 奖品数量
            var canvas = document.getElementById('canvas');
            var btn = document.getElementById('btn');
            if(!canvas.getContext){
                alert('抱歉！浏览器不支持。');
                return;
            }
            // canvas开始绘图
            var ctx = canvas.getContext('2d');
            for (var i = 0; i < num; i++) {
                // 保存当前状态
                ctx.save();
                // 开始一条新路径
                ctx.beginPath();
                // 位移到圆心，下面需要围绕圆心旋转
                ctx.translate(150, 150);
                // 从(0, 0)坐标开始定义一条新的子路径
                ctx.moveTo(0, 0);
                // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
                ctx.rotate((360 / num * i + 360 / num / 2) * Math.PI/180);
                // 绘制圆弧
                ctx.arc(0, 0, 150, 0,  2 * Math.PI / num, false);
                if (i % 2 == 0) {
                    ctx.fillStyle = '#b0e0e6';
                }else{
                    ctx.fillStyle = '#e4c6d0';
                }
                // 填充扇形
                ctx.fill();
                // 绘制边框
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = '#b0e0e6';
                ctx.stroke();

                // 文字
                ctx.fillStyle = '#fff';
                ctx.font="18px sans-serif";
                if(i == 0){
               	ctx.fillText('六元红包', 55, 55);
               }
	            if(i == 1){
	           	ctx.fillText('没红包', 47, 50);
	           }
	            if(i == 2){
	           	ctx.fillText('流量大赠送', 40, 47);
	           }
	            if(i == 3){
	           	ctx.fillText('谢谢惠顾',55, 55);
	           }
	            if(i == 4){
	           	ctx.fillText('送个人给你',40, 47);
	           }
	            if(i == 5){
	           	ctx.fillText('啥玩意',55, 55);
	           }

                // 恢复前一个状态
                ctx.restore();
            };
            $('#btn').click(function(){
        	    var randommuil = Math.random(1000)*1000+1;
	   // js实现匀速转动5圈，随后加速，再减速
	    		$("#canvas").css("transition","all  6s linear");
	    		setTimeout(function(){
           		$("#canvas").css("transition","all  6s ease-out");
            	$("#canvas").css("transform" , "rotate(2780deg)"); 
	    		},randommuil);  
        })
})

