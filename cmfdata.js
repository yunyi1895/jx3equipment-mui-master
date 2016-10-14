var cmf={}

cmf.buid=[]
var data=[]
var allzbdd=[[0,1,2],[3,4,5],[6,7,8],['a','b']]
cmf.xlid=[]
function getallbwid(da,mp){
	var kj=[]
  for(var i=0;i<da.length;i++){
   	$.ajax({
        url:'https://www.j3pz.com/api/getEquipList.php',
        data:{pos:da[i],menpai:mp},
        type: "GET",
        dataType: "json",
        success: function(a){
        	kj[kj.length]=a
         }
      })
    
  }
  setTimeout(function(){
 		for(var j=0;j<kj.length;j++){
 			for(var k=0;k<kj[j].length;k++){
 				cmf.buid[cmf.buid.length]=kj[j][k].id
 			}
 		}
 		//console.log(cmf.buid)
    getdata(cmf.buid)
  },2500)
}

function getdata(da){
  for(var i=0;i<da.length;i++){
   
      $.ajax({
        url:'https://www.j3pz.com/api/getEquip.php',
        data:{q:da[i]},
        type: "GET",
        dataType: "json",
        success: function(a){
        
          data[data.length]=JSON.stringify(a)+','

         }
      })
    
  }
    setTimeout(function(){
    	
    	$('body').html(data)
    },1500)
}

 //getallbwid(allzbdd[1],'bingxin')
//装备结束


function getfm(da){
	var dd=[]
  for(var i=0;i<da.length;i++){
   
      $.ajax({
        url:'https://www.j3pz.com/api/getEnhance.php',
        data:{q:da[i]},
        type: "GET",
        dataType: "json",
        success: function(a){
        
          dd[dd.length]=JSON.stringify(a)+','

         }
      })
    
  }
    setTimeout(function(){
    	
    	$('body').html(dd)
    },1500)
}


function getallxlid(da,mp){
	var kj=[]
  for(var i=0;i<da.length;i++){
   	$.ajax({
        url:'https://www.j3pz.com/api/getEnhanceList.php',
        data:{pos:da[i],menpai:mp},
        type: "GET",
        dataType: "json",
        success: function(a){
        	kj[kj.length]=a
         }
      })
    
  }
  setTimeout(function(){
 		for(var j=0;j<kj.length;j++){
 			for(var k=0;k<kj[j].length;k++){
 				cmf.xlid[cmf.xlid.length]=kj[j][k].id
 			}
 		}
 		//console.log(cmf.buid)
    getfm(cmf.xlid)
  },2500)
}



function wcsfun1(zhi,ty){//https://www.j3pz.com/api/getAttributeStone.php?q=0&id=0&menpai=bingxin
		cmf.ty=ty
		cmf.zhi=zhi
		cmf.wcs1=[]
		$.ajax({
        url:'https://www.j3pz.com/api/getAttributeStone.php',
        data:{q:0,menpai:zhi,id:0},
        type: "GET",
        dataType: "json",
        success: function(a){
        	$.each(a, function(k,v) {
        		cmf.wcs1.push(v)
        	});
        	
        	wcsfun2()
         }
      })
    
  	
	
}

function wcsfun2(){//https://www.j3pz.com/api/getAttributeStone.php?q=%E5%9B%9E%E8%93%9D%E9%80%9F%E5%BA%A6&id=1&menpai=bingxin&at1=%E5%9B%9E%E8%93%9D%E9%80%9F%E5%BA%A6
	var wcs1=cmf.wcs1[cmf.ty]
	 var ws={}
	$.ajax({
        url:'https://www.j3pz.com/api/getAttributeStone.php',
        data:{q:wcs1,menpai:cmf.zhi,id:1,at1:wcs1},
        type: "GET",
        dataType: "json",
        success: function(a){
        	// ws[wcs1]=a
        	wcsfun3(a)
         }
      })
}

function wcsfun3(a){//https://www.j3pz.com/api/getAttributeStone.php?q=%E9%98%B4%E6%80%A7%C2%B7%E6%94%BB%E5%87%BB&id=2&menpai=bingxin&at1=%E5%8C%96%E5%8A%B2&at2=%E9%98%B4%E6%80%A7%C2%B7%E6%94%BB%E5%87%BB
	var wcs1=cmf.wcs1[cmf.ty]
	var ws={}
	$.each(a, function(k,v) {
		$.ajax({
        url:'https://www.j3pz.com/api/getAttributeStone.php',
        data:{q:v,menpai:cmf.zhi,id:2,at1:wcs1,at2:v},
        type: "GET",
        dataType: "json",
        success: function(a){
        	 ws[v]=a
        	
         }
      })
		
		
	});
	
	setTimeout(function(){
		wcsfun4(ws)
		//console.log(JSON.stringify(ws))
	},500)
}

function wcsfun4(ws){//https://www.j3pz.com/api/getAttributeStone.php?q=%E5%86%85%E5%8A%9F%C2%B7%E6%94%BB%E5%87%BB&id=3&menpai=bingxin&at1=%E5%8C%96%E5%8A%B2&at2=%E5%86%85%E5%8A%9F%C2%B7%E7%A0%B4%E9%98%B2&at3=%E5%86%85%E5%8A%9F%C2%B7%E6%94%BB%E5%87%BB
	var wcs1=cmf.wcs1[cmf.ty]
	var ws1=ws
	$.each(ws, function(k,v) {
		$.each(v,function(ke,va){
			$.ajax({
		        url:'https://www.j3pz.com/api/getAttributeStone.php',
		        data:{q:va,menpai:cmf.zhi,id:3,at1:wcs1,at2:k,at3:va},
		        type: "GET",
		        dataType: "json",
		        success: function(a){
		        	ws1[k][ke]=a
		        	
		        }
		      })
		})
	});
	setTimeout(function(){
		wcsfun5(ws1)
	},500)
}
/*
 {"内功·攻击":{"内功·会效":{"彩·大化·激流·月华(肆)":"彩·大化·激流·月华(肆)","彩·大化·激流·月华(伍)":"彩·大化·激流·月华(伍)","彩·大化·激流·月华(陆)":"彩·大化·激流·月华(陆)"},"内功·破防":{"彩·大化·激流·灭气(肆)":"彩·大化·激流·灭气(肆)","彩·大化·激流·灭气(伍)":"彩·大化·激流·灭气(伍)","彩·大化·激流·灭气(陆)":"彩·大化·激流·灭气(陆)"}},"内功·破防":{"内功·攻击":{"彩·大化·灭气·激流(肆)":"彩·大化·灭气·激流(肆)","彩·大化·灭气·激流(伍)":"彩·大化·灭气·激流(伍)","彩·大化·灭气·激流(陆)":"彩·大化·灭气·激流(陆)"},"内功·会效":{"彩·大化·灭气·月华(肆)":"彩·大化·灭气·月华(肆)","彩·大化·灭气·月华(伍)":"彩·大化·灭气·月华(伍)","彩·大化·灭气·月华(陆)":"彩·大化·灭气·月华(陆)"}},"内功·会效":{"内功·攻击":{"彩·大化·月华·激流(肆)":"彩·大化·月华·激流(肆)","彩·大化·月华·激流(伍)":"彩·大化·月华·激流(伍)","彩·大化·月华·激流(陆)":"彩·大化·月华·激流(陆)"},"内功·破防":{"彩·大化·月华·灭气(肆)":"彩·大化·月华·灭气(肆)","彩·大化·月华·灭气(伍)":"彩·大化·月华·灭气(伍)","彩·大化·月华·灭气(陆)":"彩·大化·月华·灭气(陆)"}},"阴性·攻击":{"阴性·会效":{"彩·大化·霜冷·杯雪(肆)":"彩·大化·霜冷·杯雪(肆)","彩·大化·霜冷·杯雪(伍)":"彩·大化·霜冷·杯雪(伍)","彩·大化·霜冷·杯雪(陆)":"彩·大化·霜冷·杯雪(陆)"},"阴性·破防":{"彩·大化·霜冷·冻髓(肆)":"彩·大化·霜冷·冻髓(肆)","彩·大化·霜冷·冻髓(伍)":"彩·大化·霜冷·冻髓(伍)","彩·大化·霜冷·冻髓(陆)":"彩·大化·霜冷·冻髓(陆)"}},"阴性·破防":{"阴性·攻击":{"彩·大化·冻髓·霜冷(肆)":"彩·大化·冻髓·霜冷(肆)","彩·大化·冻髓·霜冷(伍)":"彩·大化·冻髓·霜冷(伍)","彩·大化·冻髓·霜冷(陆)":"彩·大化·冻髓·霜冷(陆)"},"阴性·会效":{"彩·大化·冻髓·杯雪(肆)":"彩·大化·冻髓·杯雪(肆)","彩·大化·冻髓·杯雪(伍)":"彩·大化·冻髓·杯雪(伍)","彩·大化·冻髓·杯雪(陆)":"彩·大化·冻髓·杯雪(陆)"}},"阴性·会效":{"阴性·攻击":{"彩·大化·杯雪·霜冷(肆)":"彩·大化·杯雪·霜冷(肆)","彩·大化·杯雪·霜冷(伍)":"彩·大化·杯雪·霜冷(伍)","彩·大化·杯雪·霜冷(陆)":"彩·大化·杯雪·霜冷(陆)"},"阴性·破防":{"彩·大化·杯雪·冻髓(肆)":"彩·大化·杯雪·冻髓(肆)","彩·大化·杯雪·冻髓(伍)":"彩·大化·杯雪·冻髓(伍)","彩·大化·杯雪·冻髓(陆)":"彩·大化·杯雪·冻髓(陆)"}}}
 * */
function wcsfun5(ws1){//https://www.j3pz.com/api/getAttributeStone.php?q=%E5%BD%A9%C2%B7%E5%A4%A7%E5%8C%96%C2%B7%E6%BF%80%E6%B5%81%C2%B7%E6%9C%88%E5%8D%8E(%E8%82%86)&id=4&menpai=bingxin&at1=%E5%8C%96%E5%8A%B2&at2=%E5%86%85%E5%8A%9F%C2%B7%E6%94%BB%E5%87%BB&at3=%E5%86%85%E5%8A%9F%C2%B7%E4%BC%9A%E6%95%88&at4=%E5%BD%A9%C2%B7%E5%A4%A7%E5%8C%96%C2%B7%E6%BF%80%E6%B5%81%C2%B7%E6%9C%88%E5%8D%8E(%E8%82%86)
	var wcs1=cmf.wcs1[cmf.ty]
	 var ws2=ws
	$.each(ws1, function(k,v) {
		$.each(v,function(ke,va){
			$.each(va,function(key,val){
				$.ajax({
			        url:'https://www.j3pz.com/api/getAttributeStone.php',
			        data:{q:val,menpai:cmf.zhi,id:4,at1:wcs1,at2:k,at3:va,at4:val},
			        type: "GET",
			        dataType: "json",
			        success: function(a){
			        	//ws1[k][ke]=a
			        	ws2[k][ke][key]=a
			        	//console.log(JSON.stringify(a))
			        }
			      })			
				
				
			})
		})
		
		
	})
	setdd=setInterval(function(){
		clearInterval()
	},2000)
	setTimeout(function(){
		console.log(JSON.stringify(ws2))
	},1000)
}

function wcsfun0(zhiye){
	$.ajax({
        url:'https://www.j3pz.com/api/getAttributeStone.php',
        data:{q:0,menpai:zhi,id:0},
        type: "GET",
        dataType: "json",
        success: function(a){
        	$.each(a, function(k,v) {
        		cmf.wcs1.push(v)
        	});
        	
        }
      })
	console.log(cmf.wcs1)
}


/*
 cmf={}
cmf.all={}

cmf.qdd=[]
function wcsfun1(zhi,ty){//https://www.j3pz.com/api/getAttributeStone.php?q=0&id=0&menpai=bingxin
		cmf.ty=ty
		cmf.zhi=zhi
    cmf.wcs1=[]
		$.ajax({
        url:'https://www.j3pz.com/api/getAttributeStone.php',
        data:{q:0,menpai:zhi,id:0},
        type: "GET",
        dataType: "json",
        success: function(a){
          $.each(a, function(k,v) {
        		cmf.wcs1.push(v)
        	});
        	
        	wcsfun2()
         
         }
      })
}

function wcsfun2(){//https://www.j3pz.com/api/getAttributeStone.php?q=%E5%9B%9E%E8%93%9D%E9%80%9F%E5%BA%A6&id=1&menpai=bingxin&at1=%E5%9B%9E%E8%93%9D%E9%80%9F%E5%BA%A6
  var ws={}
  var wcs1=cmf.wcs1[cmf.ty]
	$.ajax({
        url:'https://www.j3pz.com/api/getAttributeStone.php',
        data:{q:wcs1,menpai:cmf.zhi,id:1,at1:wcs1},
        type: "GET",
        dataType: "json",
        success: function(a){
           wcsfun3(a)
         // ws[wcs1]=a
        	//console.log(JSON.stringify(ws))
         }
      })
  
  
}

function wcsfun3(a){//https://www.j3pz.com/api/getAttributeStone.php?q=%E9%98%B4%E6%80%A7%C2%B7%E6%94%BB%E5%87%BB&id=2&menpai=bingxin&at1=%E5%8C%96%E5%8A%B2&at2=%E9%98%B4%E6%80%A7%C2%B7%E6%94%BB%E5%87%BB
	var wcs1=cmf.wcs1[cmf.ty]
  var ws={}
  $.each(a, function(k,v) {
		$.ajax({
        url:'https://www.j3pz.com/api/getAttributeStone.php',
        data:{q:v,menpai:cmf.zhi,id:2,at1:wcs1,at2:v},
        type: "GET",
        dataType: "json",
        success: function(a){
        	// ws[wcs1]=a
           ws[v]=a
        //	console.log(JSON.stringify(ws))
         }
      })
		
		
	});
 setTimeout(function(){
   wcsfun4(ws)
		//console.log(JSON.stringify(ws))
	},500)
}

function wcsfun4(ws){//https://www.j3pz.com/api/getAttributeStone.php?q=%E5%86%85%E5%8A%9F%C2%B7%E6%94%BB%E5%87%BB&id=3&menpai=bingxin&at1=%E5%8C%96%E5%8A%B2&at2=%E5%86%85%E5%8A%9F%C2%B7%E7%A0%B4%E9%98%B2&at3=%E5%86%85%E5%8A%9F%C2%B7%E6%94%BB%E5%87%BB
	var wcs1=cmf.wcs1[cmf.ty]
  var ws1=ws
	$.each(ws, function(k,v) {
		$.each(v,function(ke,va){
			$.ajax({
		        url:'https://www.j3pz.com/api/getAttributeStone.php',
		        data:{q:va,menpai:cmf.zhi,id:3,at1:wcs1,at2:k,at3:va},
		        type: "GET",
		        dataType: "json",
		        success: function(a){
              ws1[k][ke]=a
		        
		        }
		      })
		})
	});
  setTimeout(function(){
    wcsfun5(ws1)
	},500)
}
function wcsfun5(ws1){//https://www.j3pz.com/api/getAttributeStone.php?q=%E5%BD%A9%C2%B7%E5%A4%A7%E5%8C%96%C2%B7%E6%BF%80%E6%B5%81%C2%B7%E6%9C%88%E5%8D%8E(%E8%82%86)&id=4&menpai=bingxin&at1=%E5%8C%96%E5%8A%B2&at2=%E5%86%85%E5%8A%9F%C2%B7%E6%94%BB%E5%87%BB&at3=%E5%86%85%E5%8A%9F%C2%B7%E4%BC%9A%E6%95%88&at4=%E5%BD%A9%C2%B7%E5%A4%A7%E5%8C%96%C2%B7%E6%BF%80%E6%B5%81%C2%B7%E6%9C%88%E5%8D%8E(%E8%82%86)
	var wcs1=cmf.wcs1[cmf.ty]
  var ws2=ws1
	$.each(ws1, function(k,v) {
		$.each(v,function(ke,va){
			$.each(va,function(key,val){
				$.ajax({
			        url:'https://www.j3pz.com/api/getAttributeStone.php',
			        data:{q:val,menpai:cmf.zhi,id:4,at1:wcs1,at2:k,at3:va,at4:val},
			        type: "GET",
			        dataType: "json",
			        success: function(a){
			        	//ws1[k][ke]=a
			        	ws2[k][ke][key]=a
			        }
			      })			
				
				
			})
		})
		
		
	})
  
 setTimeout(function(){
   cmf.all[wcs1]=ws2
   cmf.qdd[cmf.qdd.length]=wcs1
		//console.log(JSON.stringify(cmf.all))
	},1000)
 
}
//console.log(111) ["化劲", "回蓝速度", "基础·根骨", "急速", "精简·PVP", "精简·输出", "内功·攻击", "内功·会效", "内功·会心", "内功·命中", "内功·破防", "无双", "阴性·攻击", "阴性·会效", "阴性·会心", "阴性·命中", "阴性·破防", "御劲"]
ii=0
setdd=setInterval(function(){
    if(ii>18) return
		 wcsfun1('bingxin',ii)
       ii++
     if(ii==18){
      
       $('body').html(JSON.stringify(cmf.all))
       console.log(JSON.stringify(cmf.qdd))
     }
    
},4000)

 * */