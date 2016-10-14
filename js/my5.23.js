var my = {
	//数据类型的字符串数据解析

	//内容，标识，分隔符

	//DOM 操作开始.........................................................................................
	//获取表单(单选，多选，下拉框)的value值
	getinput: function(name) { //传入的name是表格的name的值
		var name = document.getElementsByName(name)
		var n = []
		var t = []
		if (name[0].nodeName == 'INPUT') {
			var n = [];
			var t = []
			if (name[0].type == 'checkbox') { // 复选框
				for (var j = 0; j < name.length; j++) {
					t[j] = name[j].checked //$("input[name="+name+"]:checked")
				}
				for (var i = 0; i < t.length; i++) {
					if (t[i]) {
						n[i] = name[i].value
					}
				}
				n = my.replaceEmptyItem(n) //去除数组中的空
			} else if (name[0].type == 'radio') { //单选
				for (var j = 0; j < name.length; j++) {
					if (name[j].checked) {
						n[0] = name[j].value
					}
				}
				n = my.replaceEmptyItem(n) //去除数组中的空
			}
		} else if (name[0].nodeName == 'SELECT') { //下拉框
			var nameindex = name[0].selectedIndex
			n[0] = name[0].options[nameindex].value

		}
		return n

	},

	//设置表单(单选，多选，下拉框)的value值	
	setinput: function(name, v) { //val是传进来的数组的value值
		var name = document.getElementsByName(name)
		if (v == null) return
		if (name[0].nodeName == 'INPUT') {
			if (name[0].type == 'checkbox') { // 复选框
				for (var i = 0; i < v.length; i++) {
					for (var j = 0; j < name.length; j++) {
						if (name[j].value == v[i]) {
							name[j].setAttribute('checked', 'true')
						}
					}
				}
			} else if (name[0].type == 'radio') {
				for (var i = 0; i < name.length; i++) {
					if (name[i].value == v[0]) {
						name[i].setAttribute('checked', 'true')
					}
				}
			}
		} else if (name[0].nodeName == 'SELECT') {
			name[0].value = v[0]
		}

	},

	// 通过父元素ID 选取子元素中所有的class相同的元素
	getByclass: function(classname, parent) {
		var oparent = parent ? document.getElementById(parent) : document; //如果传入了第二个参数，则把第二个参数的id赋值给oParent，没有传入则把document传入给它
		var classarrany = [];
		var oparentallchild = oparent.getElementsByTagName("*"); //选取oparent里面的所有的子项目
		for (var i = 0; i < oparentallchild.length; i++) {
			if (oparentallchild[i].className == classname) {
				classarrany.push(oparentallchild[i])
			}
		}
		return classarrany;
	},
	//判定数据类型  
	isType: function(obj, type) {
		return toString.call(obj).indexOf('[object ' + type) == 0;
	},
	//如var na=111
	//my.isType(na,'Number')
	//如果当前函数是有名函数，则返回其名字，如果是匿名函数则返回被赋值的函数变量名，如果是闭包中匿名函数则返回“anonymous”
	getFnName: function(callee) {
		var _callee = callee.toString().replace(/[\s\?]*/g, ""),
			comb = _callee.length >= 50 ? 50 : _callee.length;
		_callee = _callee.substring(0, comb);
		var name = _callee.match(/^function([^\(]+?)\(/);
		if (name && name[1]) {
			return name[1];
		}
		var caller = callee.caller,
			_caller = caller.toString().replace(/[\s\?]*/g, "");
		var last = _caller.indexOf(_callee),
			str = _caller.substring(last - 30, last);
		name = str.match(/var([^\=]+?)\=/);
		if (name && name[1]) {
			return name[1];
		}
		return "anonymous"
	},

	//使用：在要调查的函数内部执行此函数，传入一个参数，为arguments.callee。
	//			function  ee(){
	//				 +++++++++++++++++++++++++++++++++
	//				  var fnname =getFnName(arguments.callee)
	//				  +++++++++++++++++++++++++++++++++
	//				  alert(fnname)
	//				};
	//				ee();

	//DOM 操作结束.........................................................................................	
	//字符串,数组与数字处理开始.......................................................................................
	Gt3: function(g, n, f) {
		if (f == null) f = "`"
		if (g == null) return ''
		g = String(g)
		var a, b, c = g.indexOf(f + n) + 3
		if (c == 2) return ""
		a = g.indexOf(f, c)
		b = g.indexOf("^", c)
		if (b > 0 && (a > b || a == -1)) a = b
		if (a == -1) return g.substring(c)
		return g.substring(c, a)
	},
	//在一个字符串每隔多少插入相同的字符串

	//JS正则过滤特殊字符
	stripscript: function(s) {
		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
		var rs = "";
		for (var i = 0; i < s.length; i++) {
			rs = rs + s.substr(i, 1).replace(pattern, '');
		}
		return rs;
	},
	delspace: function(s) { //删除字符串前后空格
		return s.replace(/(^\s+)|\s+$/g, "")
	},

	arrDeweight: function(arr, n) { //数组去重
		var a = []
		var b = []

		for (var i = 0; i < arr.length; i++) {
			if (a.indexOf(arr[i]) == -1) {
				a.push(arr[i])
			} else {
				b.push(arr[i])
			}

		}

		if (n == 1) return a
		if (n == 2) return b

	},
	/*
	 	var ad=[1,2,3,5,3,5,2,5,3,1]
	 * 
	 * arrDeweight(ad,1)  返回[1, 2, 3, 5]相同的
	 * arrDeweight(ad,1) 返回[3, 5, 2, 5, 3, 1]不同的
	 * 
	 * */
	jsonDeweight: function(arr) {//JSON对象去重
		if(arr.length==0) return []
		var res = [arr[0]]
		for (var i = 1; i < arr.length; i++) {
			var repeat = false;
			for (var j = 0; j < res.length; j++) {
				if (JSON.stringify(arr[i]) == JSON.stringify(res[j])) {
					repeat = true;
					break;
				}
			}
			if (!repeat) {
				res.push(arr[i]);
			}
		}
		return res;

	},
	/*
	 * var jsonarr= [{"critEffect":"101","id":889},{"critEffect":"101","id":889},{"crit":"60","id":783},{"toughness":"32","id":885}]
	 * jsonDeweight(jsonarr)
	 * 返回值[{"critEffect":"101","id":889},{"crit":"60","id":783},{"toughness":"32","id":885}]
	 * 
	 */


	insertStr: function(str, tar, n, m) {
		var x = ''
		var str = str.split('')
		if (str.length == 0) return
		for (var i = n; i < str.length; i += m) {
			str[i] += tar
		}
		x = str.join()
		x = x.replace(/[,]/g, "")
		return x
	},

	//传入的参数str为要被插入的字符串，tar要插入的字符串，n表示从多少位开始，m表示每隔多少字符插入
	//var xao="dsdazqdfzaddbbudquvduizvdqdadqwdbiovdoiuquvuodfcvuoiavoidqvuoiwcduicau"
	//ar sad="<br>"
	//insertStr(xao,sad,10,20)
	//返回值为"dsdazqdfzad<br>dbbudquvduizvdqdadqw<br>dbiovdoiuquvuodfcvuo<br>iavoidqvuoiwcduicau"

	//min不能有小数点 0——1返回0或者1
	getRandom: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	// 返回小于n的随机数
	getItthis: function(n) {
		return Math.round(Math.random() * 99999999) % n
	},
	//去除数组中的 空
	replaceEmptyItem: function(arr) {
		for (var i = 0, len = arr.length; i < len; i++) {
			if (!arr[i] || arr[i] == '') {
				arr.splice(i, 1);
				len--;
				i--;
			}
		}
		return arr
	},

	//给字符添加省略号
	xLength: function(m, n) { //字符 长度
		if (m == null || m == "") return ""
		var s = m.replace(/([^\x00-\xff])/g, "\x00$1");
		return (s.length <= n) ? m : s.substring(0, n - 3).replace(/\x00/g, '') + "...";
	},
	//var n='qqdqdqdagfgbnpbwbvfpiwefg'
	//xLength(n,12)     =》"qqdqdqdag..."

	//字符串,数组与数字处理结束........................................................................
	//时间处理开始.....................................................................................
	datetime_to_unix: function(datetime) { //当前时间转换为从1970.1.1开始的毫秒数
		var tmp_datetime = datetime.replace(/:/g, '-');
		tmp_datetime = tmp_datetime.replace(/ /g, '-');
		var arr = tmp_datetime.split("-");
		var now = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
		return parseInt(now.getTime());
	},
	/*var datetime = '2016-3-24 11:29:50'; 注意格式固定
	 * var unix = datetime_to_unix(datetime);为 1458790190000
	 * 主要都是以1970年1月1日为标准
	 */
	unix_to_datetime: function(unix) {
		var now = new Date(parseInt(unix));
		return now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
	},
	/*var unix2 = 1458790285966;
	var datetime = unix_to_datetime(unix2);//2016/3/24 上午11:31:25
	 * 
	 * 
	 */
	MillisecondToDate: function(msd) { //毫秒转为时间 不要大于86400000 24小时
		var time = parseFloat(msd) / 1000;
		if (null != time && "" != time) {
			if (time > 60 && time < 60 * 60) {
				time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
					parseInt(time / 60.0)) * 60) + "秒";
			} else if (time >= 60 * 60 && time < 60 * 60 * 24) {
				time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
						parseInt(time / 3600.0)) * 60) + "分钟" +
					parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
						parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
			} else {
				time = parseInt(time) + "秒";
			}
		}
		return time;
	},
	/*
	 * var msd=8640000
	MillisecondToDate(msd) //"2小时23分钟59秒"
	 * 
	 * 
	 */
	//时间处理结束.....................................................................................
	//事件处理开始.......................................................................................	
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	// 删除句柄
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getType: function(event) {
		return event.type;
	},
	getElement: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	//获取浏览器的宽高
	getWinWH: function() {
		var wh = []
		if (typeof window.innerWidth != 'undefined') {
			wh.push(window.innerWidth);
			wh.push(window.innerHeight)
		} else {
			wh.push(document.documentElement.clientWidth);
			wh.push(document.documentElement.clientHeight)
		}
		return wh
	},
	drag: function(tar) { //拖拽 tar是id 号
		var ta = document.getElementById(tar)
		ta.onmousedown = function(e) {
			var e = my.getEvent(e);
			my.preventDefault(e);

			var _this = this;
			var diffX = e.clientX - _this.offsetLeft;
			var diffY = e.clientY - _this.offsetTop;
			if (typeof _this.setCapture != 'undefined') {
				_this.setCapture();
			}
			document.onmousemove = function(e) {
				var e = my.getEvent(e);
				var left = e.clientX - diffX;
				var top = e.clientY - diffY;

				if (left < 0) {
					left = 0;
				} else if (left > my.getWinWH[0] - _this.offsetWidth) {
					left = my.getWinWH[0] - _this.offsetWidth;
				}

				if (top < 0) {
					top = 0;
				} else if (top > my.getWinWH[1] - _this.offsetHeight) {
					top = my.getWinWH[1] - _this.offsetHeight;
				}

				_this.style.left = left + 'px';
				_this.style.top = top + 'px';
			}
			document.onmouseup = function() {
				this.onmousemove = null;
				this.onmouseup = null;
				if (typeof _this.releaseCapture != 'undefined') {
					_this.releaseCapture();
				}
			}
		};

	},

	toCenter: function(tar) { //使物体相对于窗口居中
		var ta = document.getElementById(tar)
		var taW = ta.offsetWidth
		var taH = ta.offsetHeight
		window.onreset = function() {
			ta.style.left = (my.getWinWH[0] - taW) / 2 + 'px'
			ta.style.top = (my.getWinWH[1] - taH) / 2 + 'px'
		}
	},

	//获取当前元素节点的position和宽高（兼容）
	objxy: function(n) {

		var o = document.getElementById(n),
			x = 0,
			y = 0,
			w = o.offsetWidth,
			h = o.offsetHeight
		if (o.getBoundingClientRect) {
			x = o.getBoundingClientRect().left + document.body.scrollLeft
			y = o.getBoundingClientRect().top + document.body.scrollTop
		} else {
			while (o != null && o.tagName.toUpperCase() != "BODY") {
				x += o.offsetLeft
				y += o.offsetTop
				o = o.offsetParent
			}
		}
		return [x, y, w, h]
	},
	//判断两个正方形是否有重合
	//传人的r和b都是数组r[x,y,w,h]
	//x是元素的positionX;w是元素的宽度
	isoverlapped: function(r, b) {
		if (r[0] > b[0] + b[2]) return false
		if (r[1] > b[1] + b[3]) return false
		if (r[0] + r[2] < b[0]) return false
		if (r[1] + r[3] < b[1]) return false
		var col = Math.min(r[0] + r[2], b[0] + b[2]) - Math.max(r[0], b[0]);
		var row = Math.min(r[1] + r[3], b[1] + b[3]) - Math.max(r[1], b[1]);
		var ersection = col * row;
		var area1 = r[2] * r[3];
		var area2 = b[2] * b[3];
		var c = ersection / (area1 + area2 - ersection);
		return c > 0
	},

	//事件处理开始.......................................................................................	
	//正则验证开始.......................................................................................
	isNumberOrLetter: function(s) { //判断是否是数字或字母
		var regu = "^[0-9a-zA-Z]+$";
		var re = new RegExp(regu);
		if (re.test(s)) {
			return true;
		} else {
			return false;
		}
	},
	isCode: function(s) { //检查邮政编码
		var regu = /[1-9][0-9]{5}/; //共6位数字，第一位不能为0
		var re = new RegExp(regu);
		if (re.test(s)) {
			return true;
		} else {
			return false;
		}
	},
	deleteSpace: function(s) { //删除多余空格
		var pattern = /\s/g; //g必须全局，才能全部匹配
		var result = s.replace(pattern, ''); //把空格匹配成无空格
		return result

	},
	IsInteger: function(s) { //判断输入的字符是否为整数 
		var regu = /^[-+]?\d*$/;
		var re = new RegExp(regu);
		if (re.test(s)) {
			return true;
		} else {
			return false;
		}
	},
	IsChinese: function(s) { //判断输入的字符是否为中文 
		var regu = /^[\u0391-\uFFE5]+$/;
		var re = new RegExp(regu);
		if (re.test(s)) {
			return true;
		} else {
			return false;
		}
	}

}

var cmfAjax = {
	// 基础选项
	options: {
		method: "get",
		url: "",
		params: {},
		type: 'text', // 返回的内容的类型,text,xml,json
		callback: function() {}
	},

	// 创建XMLHttpRequest对象
	createRequest: function() {
		var xmlhttp;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp = new XMLHttpRequest();
					if (xmlhttp.overrideMimeType) {
						xmlhttp.overrideMimeType("text/xml");
					}
				} catch (e) {
					alert("您的浏览器不支持Ajax");
				}
			}
		}
		return xmlhttp;
	},
	// 设置基础选项
	setOptions: function(newOptions) { //变成这个对象的属性
		for (var pro in newOptions) {
			this.options[pro] = newOptions[pro];
		}
	},
	// 格式化请求参数
	formateParameters: function() {
		var paramsArray = [];
		var params = this.options.params;
		for (var pro in params) {
			var paramValue = params[pro];
			paramsArray.push(pro + "=" + paramValue);
		}
		return paramsArray.join("&");
		//key1=val1&key2=val2
	},
	// 状态改变的处理
	readystatechange: function(xmlhttp) {
		var returnValue;
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			switch (this.options.type) {
				case "xml":
					returnValue = xmlhttp.responseXML;
					break;
				case "json":
					var jsonText = xmlhttp.responseText;
					if (jsonText) {
						returnValue = eval("(" + jsonText + ")");
					}
					break;
				default:
					returnValue = xmlhttp.responseText;
					break;
			}

			if (returnValue) {
				this.options.callback.call(this, returnValue);
			} else {
				this.options.callback.call(this);
			}
		}
	},
	// 发送Ajax请求
	request: function(options) {
		var ajaxObj = this;
		ajaxObj.setOptions.call(ajaxObj, options);
		//console.log(this.options)
		var xmlhttp = ajaxObj.createRequest.call(ajaxObj);

		xmlhttp.onreadystatechange = function() {
			ajaxObj.readystatechange.call(ajaxObj, xmlhttp);
		};

		var formateParams = ajaxObj.formateParameters.call(ajaxObj);
		var method = ajaxObj.options.method;
		var url = ajaxObj.options.url;

		if ("GET" === method.toUpperCase()) {
			url += "?" + formateParams;
		}
		console.log(url)
		xmlhttp.open(method, url, true);
		if ("GET" === method.toUpperCase()) {
			xmlhttp.send(null);
		} else if ("POST" === method.toUpperCase()) {
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			xmlhttp.send(formateParams);
		}
	}
};
/*
var userid='cmf'
function process(n){
	console.log(n)
}
Ajax.request({
				method : "post",
                  url:"../second.php",
                  params:{id:userid},
                  type:'json',
                  callback:process,
              });


*/

function Cmf() { //创建构造函数

	this.arry = []

}
Cmf.prototype.getNode = function(tag, id) { //给构造函数定义一个getNode方法
	if (tag.indexOf('.') == 0) { //如果传入的是类class形式 .nav
		var oparent = id ? document.getElementById(id) : document;
		var oparentallchild = oparent.getElementsByTagName("*"); //选取oparent里面的所有的子项目
		for (var i = 0; i < oparentallchild.length; i++) {

			if (oparentallchild[i].className == tag.substring(1)) {

				this.arry.push(oparentallchild[i])
			}
		}
	} else if (tag.indexOf('#') == 0 && id == null) { //如果传入的是id形式的 如#d
		this.arry.push(document.getElementById(tag.substring(1)))
	} else { //如果传入的div 或者span形式的
		var Tagname = document.getElementsByTagName(tag)
		for (var i = 0; i < Tagname.length; i++) {
			this.arry.push(Tagname[i])
		}
	}
	return this
}

Cmf.prototype.html = function(h) { //设置获取html
	for (var i = 0; i < this.arry.length; i++) {
		if (h) {
			this.arry[i].innerHTML = h
			return this
		} else {
			return this.arry[i].innerHTML
		}
	}

}

Cmf.prototype.css = function(attr, value) { //设置css样式

	for (var i = 0; i < this.arry.length; i++) {
		if (value) {

			this.arry[i].style[attr] = value
			return this
		} else {
			if (typeof window.getComputedStyle != 'undefined') { //W3C
				return window.getComputedStyle(this.arry[i], null)[attr];
			} else if (typeof this.arry[i].currentStyle != 'undeinfed') { //IE
				return this.arry[i].currentStyle[attr];
			}
		}
	}
}

Cmf.prototype.hover = function(fn1, fn2) {
	for (var i = 0; i < this.arry.length; i++) {
		this.arry[i].onmouseover = fn1;
		this.arry[i].onmouseout = fn2;
	}
	return this
}

Cmf.prototype.click = function(fn) {
	for (var i = 0; i < this.arry.length; i++) {
		this.arry[i].onclick = fn
	}
	return this
}
Cmf.prototype.val = function(v) {
	for (var i = 0; i < this.arry.length; i++) {
		if (v) {
			this.arry[i].value = v
			return this
		} else {
			return this.arry[i].value
		}
	}
}

Cmf.prototype.center = function() {
	var WW = document
}
var cmf = function() { //每次调用都实例化一次
	return new Cmf()
}

/*
	function getinput(name){    //获取表单(单选，多选，下拉框)的value值
		var type=$("input[name="+name+"]").attr('type')
		var selet=$("select[name="+name+"]")
		var n=[];
		if(type=='checkbox'){   
			var t=$("input[name="+name+"]:checked")
			for(var i=0;i<t.length;i++){
				n[i]=t[i].value
			}
					
		}else if(type=='radio'){
			var t=$("input[name="+name+"]:checked")
			n[0]=t.val()
		};
		if(selet){
			n[0]=selet.val()
		}
	return n
	}
	
	function setinput(name,num){  //设置表单(单选，多选，下拉框)选第几个
		var type=$("input[name="+name+"]").attr('type')
		var selet=$("select[name="+name+"]")
		if(type=='checkbox'){    //多选框时 num传入 如:'1,5'表示设置第2个和第6个
			var num=num.split(',')
			for(var i=0;i<num.length;i++){
				if(num[i]=='') continue
				$("input[name="+name+"]").eq(num[i]).attr("checked",true)
			}
		}else if(type=='radio'){//单选框时 传入的num 为单个数字如'1' 表示设置第2个
			$("input[name="+name+"]").eq(num).attr('checked','true')
		};
		if(selet){   //select下拉菜单时name如：'1'表示设置第2个
			
			selet[0].selectedIndex=num
		}
		
		
	}

*/

if (!Array.prototype.some) {
	Array.prototype.some = function(fun /*, thisArg */ ) {
		'use strict';
		if (this === void 0 || this === null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== 'function')
			throw new TypeError();

		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for (var i = 0; i < len; i++) {
			if (i in t && fun.call(thisArg, t[i], i, t))
				return true;
		}

		return false;
	};
}