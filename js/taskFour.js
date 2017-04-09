//第一题
function add(a,b){
	var c = (+a)+(+b);
	return c;
}
//第二题
function shouldWork(date){
    var work;
	if(date == '周一')
		work='上班';
	if(date == '周二')
		work='上班';
	if(date == '周三')
		work='上班';
	if(date == '周四')
		work='上班';
	if(date == '周五')
		work='上班';
	if(date == '周六')
		work='上班';
	if(date == '周天')
		work='上班';
	return work;
}
function shouldWork(date){
	var work;
	switch(date)
	{
		case '周一':
		work='上班';
		break;
		case '周二':
		work='上班';
		break;
		case '周三':
		work='上班';
		break;
		case '周四':
		work='上班';
		break;
		case '周五':
		work='上班';
		break;
		case '周六':
		work='上班';
		break;
		case '周天':
		work='上班';
		break;
	}
	return work;
}
//第三题
function superAdd(){
	var c=0;
	for(var i in arguments){
		c += (parseInt(arguments[i]));
	}
	return c;
}
//第四题
function formateDate(date){
	return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日是星期"+(date.getDay()+1);
}
//第五题
function reverse(str){
	var c=str.split("").reverse().join("");
	console.log(c);
}
//第六题
function caculateExistNum(str){
	json = {};
	for (var i = 0; i < str.length; i++) {
	    json[str[i]] = (json[str[i]] + 1) || 1;
	}
	console.log(JSON.stringify(json));
}
//第七题
function filterAdult(arrays){
	var lqarray=[];
	for(var i in arrays){
		if(arrays[i].age >18){
			lqarray.push(arrays[i]);
		}
	}
	return lqarray;
}
//第八题
function uniq(array){
	var norepeat=[];
	for(var i in array){
		if(norepeat.indexOf(array[i]) < 0){
			norepeat.push(array[i]);
		}
	}
	console.log(norepeat);
}
