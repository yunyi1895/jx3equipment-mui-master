cmf={}

cmf.sbgd=document.documentElement.clientHeight
cmf.sbkd=document.documentElement.clientWidth
if(cmf.sbkd>640) cmf.sbkd=640
var ele=document.getElementsByTagName("html")[0]
ele.style.fontSize=parseInt(cmf.sbkd)/640*10+"px"

cmf.buwei = [{
				mz: '帽子',
				tp: '9',
				id: 'maozi'
			}, {
				mz: '上衣',
				tp: '8',
				id: 'shangyi'
			}, {
				mz: '腰带',
				tp: '10',
				id: 'yaodai'
			}, {
				mz: '护腕',
				tp: '6',
				id: 'huwan'
			}, {
				mz: '武器',
				tp: '11',
				id: 'wuqi'
			}, {
				mz: '暗器',
				tp: '4',
				id: 'anqi'
			}, {
				mz: '下装',
				tp: '7',
				id: 'xiazhuang'
			}, {
				mz: '鞋子',
				tp: '5',
				id: 'xiezi'
			}, {
				mz: '项链',
				tp: '0',
				id: 'xianglian'
			}, {
				mz: '腰坠',
				tp: '1',
				id: 'yaozhui'
			}, {
				mz: '戒指',
				tp: '2',
				id: 'jiezhi1'
			}, {
				mz: '戒指',
				tp: '2',
				id: 'jiezhi2'
			}]
			cmf.jinglianup = [0, .005, .013, .024, .038, .055, .075, .098, .124]
			cmf.tjmp = [{
				mtpublic: '少林(洗髓经)、明教(明尊琉璃体)、天策(铁牢律)、苍云(铁骨衣)',
				xinfatype: 15
			}, {
				mtpublic: '天策(铁牢律)',
				xinfatype: 2
			}, {
				mtpublic: '少林(洗髓经)',
				xinfatype: 8
			}, {
				mtpublic: '明教(明尊琉璃体)',
				xinfatype: 4
			}, {
				mtpublic: '苍云(铁骨衣)',
				xinfatype: 1
			}, {
				mtpublic: '万花(离经易道)、七秀(云裳心经)、五毒(补天诀)、长歌(相知)',
				xinfatype: 240
			}, {
				mtpublic: '万花(离经易道)',
				xinfatype: 128
			}, {
				mtpublic: '七秀(云裳心经)',
				xinfatype: 64
			}, {
				mtpublic: '五毒(补天诀)',
				xinfatype: 32
			}, {
				mtpublic: '长歌(相知)',
				xinfatype: 16
			}, {
				mtpublic: '七秀(冰心诀)、五毒(毒经)、纯阳(紫霞功)、长歌(莫问)',
				xinfatype: 245760
			}, {
				mtpublic: '七秀(冰心诀)',
				xinfatype: 131072
			}, {
				mtpublic: '五毒(毒经)',
				xinfatype: 65536
			}, {
				mtpublic: '纯阳(紫霞功)',
				xinfatype: 32768
			}, {
				mtpublic: '长歌(莫问)',
				xinfatype: 16384
			}, {
				mtpublic: '万花(花间游)、少林(易筋经)、唐门(天罗诡道)、明教(焚影圣诀) ',
				xinfatype: 3932160
			}, {
				mtpublic: '万花(花间游)',
				xinfatype: 2097152
			}, {
				mtpublic: '少林(易筋经)',
				xinfatype: 1048576
			}, {
				mtpublic: '唐门(天罗诡道)',
				xinfatype: 524288
			}, {
				mtpublic: '明教(焚影圣诀)',
				xinfatype: 262144
			}, {
				mtpublic: '纯阳(太虚剑意)、藏剑(均可)、苍云(分山劲)',
				xinfatype: 1792
			}, {
				mtpublic: '纯阳(太虚剑意)',
				xinfatype: 1024
			}, {
				mtpublic: '藏剑(均可)',
				xinfatype: 512
			}, {
				mtpublic: '苍云(分山劲)',
				xinfatype: 256
			}, {
				mtpublic: '唐门(惊羽诀)、天策(傲血战意)、丐帮 ',
				xinfatype: 14336
			}, {
				mtpublic: '唐门(惊羽诀)',
				xinfatype: 8192
			}, {
				mtpublic: '天策(傲血战意)',
				xinfatype: 4096
			}, {
				mtpublic: '丐帮',
				xinfatype: 2048
			}, {
				mtpublic: '唐门(惊羽诀)、天策(傲血战意)、丐帮、纯阳(太虚剑意)、藏剑(均可)、苍云(分山劲) ',
				xinfatype: 16128
			}, {
				mtpublic: '内功通用',
				xinfatype: 4177920
			}]
			menpaiList = {
				huajian: {
					name: "huajian",
					type: "spunk",
					baseAttack: 355,
					baseHit: 42,
					baseAttackPlus: 1.95,
					baseCritPlus: 0,
					baseCritEffPlus: 0,
					baseOvercomePlus: .09,
					baseHPlus: 1.2,
					baseMagicShield: 28,
					tixingOption: [1, 1, 1, 1]
				},
				tianluo: {
					name: "tianluo",
					type: "spunk",
					baseAttack: 320,
					baseHit: 56,
					baseCrit: 42,
					baseAttackPlus: 1.75,
					baseCritPlus: .23,
					baseCritEffPlus: .08,
					baseOvercomePlus: 0,
					baseHPlus: 1.2,
					baseMagicShield: 28,
					tixingOption: [1, 1, 1, 0]
				},
				fenying: {
					name: "fenying",
					type: "spunk",
					baseAttack: 373,
					baseHit: 63,
					baseAttackPlus: 1.9,
					baseCritPlus: .1,
					baseCritEffPlus: .04,
					baseOvercomePlus: 0,
					baseHPlus: 1.2,
					baseMagicShield: 35,
					tixingOption: [1, 1, 1, 0]
				},
				yijin: {
					name: "yijin",
					type: "spunk",
					baseAttack: 355,
					baseHit: 42,
					baseAttackPlus: 1.85,
					baseCritPlus: .15,
					baseCritEffPlus: .05,
					baseOvercomePlus: 0,
					baseHPlus: 1.2,
					basePhysicsShield: 22,
					baseMagicShield: 26,
					tixingOption: [1, 0, 0, 1]
				},
				zixia: {
					name: "zixia",
					type: "spirit",
					baseAttack: 320,
					baseHit: 70,
					baseCrit: 42,
					baseAttackPlus: 1.75,
					baseCritPlus: .23,
					baseCritEffPlus: .08,
					baseOvercomePlus: 0,
					baseHPlus: 1.2,
					baseMagicShield: 42,
					tixingOption: [1, 1, 1, 1]
				},
				bingxin: {
					name: "bingxin",
					type: "spirit",
					baseAttack: 355,
					baseHit: 42,
					baseAttackPlus: 1.9,
					baseCritPlus: .1,
					baseCritEffPlus: .04,
					baseOvercomePlus: 0,
					baseMagicShield: 56,
					baseDodge: 42,
					baseHPlus: 1.2,
					tixingOption: [0, 1, 1, 1]
				},
				dujing: {
					name: "dujing",
					type: "spirit",
					baseAttack: 373,
					baseHit: 63,
					baseAttackPlus: 1.95,
					baseCritPlus: 0,
					baseCritEffPlus: 0,
					baseOvercomePlus: .09,
					baseHPlus: 1.2,
					baseMagicShield: 35,
					tixingOption: [1, 1, 1, 1]
				},
				mowen: {
					name: "mowen",
					type: "spirit",
					baseAttack: 320,
					baseHit: 56,
					baseCrit: 42,
					baseAttackPlus: 1.85,
					baseCritPlus: .15,
					baseCritEffPlus: .05,
					baseOvercomePlus: 0,
					baseHPlus: 1.2,
					baseMagicShield: 28,
					tixingOption: [1, 1, 1, 1]
				},
				taixu: {
					name: "taixu",
					type: "agility",
					baseAttack: 281,
					baseHit: 77,
					baseCrit: 77,
					baseAttackPlus: 1.45,
					baseCritPlus: .24,
					baseCritEffPlus: .08,
					baseOvercomePlus: 0,
					baseHPlus: 1.2,
					tixingOption: [1, 1, 1, 1]
				},
				cangjian: {
					name: "cangjian",
					type: "agility",
					baseAttack: 296,
					baseHit: 42,
					baseCrit: 28,
					baseAttackPlus: 1.6,
					baseCritPlus: 0,
					baseCritEffPlus: 0,
					baseOvercomePlus: .12,
					baseDodge: 35,
					baseHPlus: 1.2,
					tixingOption: [1, 1, 1, 1]
				},
				jingyu: {
					name: "jingyu",
					type: "strength",
					baseAttack: 281,
					baseHit: 70,
					baseOvercome: 77,
					baseAttackPlus: 1.45,
					baseCritPlus: .24,
					baseCritEffPlus: .08,
					baseOvercomePlus: 0,
					baseHPlus: 1.2,
					tixingOption: [1, 1, 1, 0]
				},
				aoxue: {
					name: "aoxue",
					type: "strength",
					baseAttack: 326,
					baseHit: 63,
					baseAttackPlus: 1.6,
					baseCritPlus: 0,
					baseCritEffPlus: 0,
					baseOvercomePlus: .12,
					baseHPlus: 1.2,
					basePhysicsShield: 31,
					tixingOption: [1, 1, 1, 1]
				},
				xiaochen: {
					name: "xiaochen",
					type: "strength",
					baseAttack: 311,
					baseHit: 70,
					baseAttackPlus: 1.5,
					baseCritPlus: 0,
					baseCritEffPlus: 0,
					baseOvercomePlus: .25,
					baseHPlus: 1.2,
					basePhysicsShield: 25,
					tixingOption: [1, 1, 1, 1]
				},
				fenshan: {
					name: "fenshan",
					type: "agility",
					baseAttack: 302,
					baseHit: 42,
					baseOvercome: 56,
					baseAttackPlus: 1.7,
					baseHPlus: 1.2,
					baseParryBasePlus: .1,
					baseParryValuePlus: 1,
					baseParryBase: 50,
					tixingOption: [1, 1, 1, 1]
				},
				lijing: {
					name: "lijing",
					type: "hps",
					baseHeal: 1369,
					baseHealPlus: 1.6,
					baseCritPlus: .15,
					baseCritEffPlus: .05,
					baseHPlus: 1.2,
					baseMagicShield: 35,
					tixingOption: [1, 1, 1, 1]
				},
				yunchang: {
					name: "yunchang",
					type: "hps",
					baseHeal: 1400,
					baseHealPlus: 1.7,
					baseCritPlus: .06,
					baseCritEffPlus: .02,
					baseHPlus: 1.2,
					baseMagicShield: 35,
					baseDodge: 38,
					tixingOption: [0, 1, 1, 1]
				},
				butian: {
					name: "butian",
					type: "hps",
					baseHeal: 1432,
					baseHealPlus: 1.75,
					baseHPlus: 1.2,
					baseMagicShield: 35,
					tixingOption: [1, 1, 1, 1]
				},
				xiangzhi: {
					name: "xiangzhi",
					type: "hps",
					baseHeal: 1464,
					baseHealPlus: 1.65,
					baseCritPlus: .1,
					baseCritEffPlus: .04,
					baseHPlus: 1.2,
					baseMagicShield: 35,
					tixingOption: [1, 1, 1, 1]
				},
				tielao: {
					name: "tielao",
					type: "t",
					baseHPlus: 1.45,
					baseBodyPlus: 1.5,
					baseParryBasePlus: .0995,
					baseParryValue: 361,
					basePhysicsShieldPlus: .1,
					basePhysicsShield: 133,
					baseParryBase: 80,
					tixingOption: [1, 1, 1, 1]
				},
				xisui: {
					name: "xisui",
					type: "t",
					baseHPlus: 1.55,
					baseBodyPlus: 2.5,
					baseMagicShieldPlus: .1,
					baseMagicShield: 133,
					basePhysicsShield: 80,
					tixingOption: [1, 0, 0, 1]
				},
				mingzun: {
					name: "mingzun",
					type: "t",
					baseHPlus: 1.45,
					baseBodyPlus: 1.25,
					baseDodgePlus: .225,
					baseMagicShield: 66,
					basePhysicsShield: 66,
					baseDodge: 133,//闪避等级
					tixingOption: [1, 1, 1, 0]
				},
				tiegu: {
					name: "tiegu",
					type: "t",
					baseHPlus: 1.45,
					baseBodyPlus: 2.2,
					basePhysicsShield: 80,
					baseParryBase: 133,//招架
					baseParryValue: 361,//拆招等级
					baseParryBasePlus: .15,
					baseParryValuePlus: .5,
					tixingOption: [1, 1, 1, 1]
				}
			}
			Baseattr = {
				body: 33,
				spunk: 32,
				spirit: 33,
				strength: 32,
				agility: 33,
				zblist: []
			}
			cmf.stoneuptype = [{"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":8,"8":10},{"1":10,"2":20,"3":30,"4":40,"5":50,"6":60,"7":80,"8":103}, 
			{"1":1,"2":3,"3":5,"4":7,"5":9,"6":11,"7":15,"8":20}, {"1":1,"2":2,"3":4,"4":5,"5":6,"6":8,"7":10,"8":13},
			{"1":1,"2":3,"3":5,"4":7,"5":9,"6":10,"7":14,"8":18}, {"1":0.1,"2":0.3,"3":0.4,"4":0.6,"5":0.7,"6":0.9,"7":1.2,"8":1.5},
			{"1":8,"2":16,"3":24,"4":33,"5":41,"6":49,"7":66,"8":85}, {"1":1,"2":3,"3":4,"4":6,"5":8,"6":9,"7":13,"8":17},
			{"1":1,"2":3,"3":4,"4":6,"5":7,"6":9,"7":12,"8":15},{"1":2,"2":4,"3":6,"4":8,"5":10,"6":12,"7":16,"8":21}]
			cmf.stone = [{
				desc: "根骨+",
				prefix: "spirit",
				uptype: 0
			}, {
				desc: "元气+",
				prefix: "spunk",
				uptype: 0
			}, {
				desc: "力道+",
				prefix: "strength",
				uptype: 0
			}, {
				desc: "体质+",
				prefix: "body",
				uptype: 0
			}, {
				desc: "身法+",
				prefix: "agility",
				uptype: 0
			}, {
				desc: "每秒回复气血",
				prefix: "lifeRecovery",
				uptype: 3
			}, {
				desc: "外功会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "阴性会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "外功攻击提高",
				prefix: "attack",
				uptype: 8
			}, {
				desc: "外功命中等级提高",
				prefix: "hit",
				uptype: 2
			}, {
				desc: "内功会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "无双等级提高",
				prefix: "strain",
				uptype: 2
			}, {
				desc: "阳性破防等级提高",
				prefix: "overcome",
				uptype: 2
			}, {
				desc: "混元破防等级提高",
				prefix: "overcome",
				uptype: 2
			}, {
				desc: "阴性破防等级提高",
				prefix: "overcome",
				uptype: 2
			}, {
				desc: "阴性内功攻击提高",
				prefix: "attack",
				uptype: 4
			}, {
				desc: "混元内功攻击提高",
				prefix: "attack",
				uptype: 4
			}, {
				desc: "阳性会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "外功破防等级提高",
				prefix: "overcome",
				uptype: 2
			}, {
				desc: "阳性内功攻击提高",
				prefix: "attack",
				uptype: 4
			}, {
				desc: "内功命中等级提高",
				prefix: "hit",
				uptype: 2
			}, {
				desc: "外功会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "毒性内功攻击提高",
				prefix: "attack",
				uptype: 4
			}, {
				desc: "混元会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "混元会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "阴性会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "阳性会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "内功破防等级提高",
				prefix: "overcome",
				uptype: 2
			}, {
				desc: "毒性破防等级提高",
				prefix: "overcome",
				uptype: 2
			}, {
				desc: "毒性会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "毒性会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "内功会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "阴阳破防等级提高",
				prefix: "overcome",
				uptype: 2
			}, {
				desc: "阴阳攻击等级提高",
				prefix: "attack",
				uptype: 4
			}, {
				desc: "阴阳会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "阴阳会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "全命中等级提高",
				prefix: "hit",
				uptype: 2
			}, {
				desc: "全会心等级提高",
				prefix: "crit",
				uptype: 2
			}, {
				desc: "全会心效果等级提高",
				prefix: "critEffect",
				uptype: 2
			}, {
				desc: "额外提高气血上限",
				prefix: "life",
				uptype: 1
			}, {
				desc: "内功攻击提高",
				prefix: "attack",
				uptype: 4
			}, {
				desc: "治疗成效提高",
				prefix: "heal",
				uptype: 7
			}, {
				desc: "外功防御等级提高",
				prefix: "physicsShield",
				uptype: 0
			}, {
				desc: "内功防御等级提高",
				prefix: "magicShield",
				uptype: 0
			}, {
				desc: "拆招等级提高",
				prefix: "parryValue",
				uptype: 6
			}, {
				desc: "闪避等级提高",
				prefix: "dodge",
				uptype: 0
			}, {
				desc: "招架等级提高",
				prefix: "parryBase",
				uptype: 0
			}, {
				desc: "招式产生的威胁变化+",
				prefix: "threat",
				uptype: 5
			}, {
				desc: "每秒内力恢复提升",
				prefix: "magicRecovery"
			}, {
				desc: "最大内力上限提高",
				prefix: "magic"
			}, {
				desc: "混元性内功命中等级提高",
				prefix: "hit",
				uptype: 2
			}, {
				desc: "加速等级提高",
				prefix: "acce"
			}, {
				desc: "化劲等级提高",
				prefix: "huajing",
				uptype: 0
			}, {
				desc: "阳性内功命中等级提高",
				prefix: "hit",
				uptype: 2
			}, {
				desc: "阴性内功命中等级提高",
				prefix: "hit",
				uptype: 2
			}, {
				desc: "御劲等级提高",
				prefix: "toughness",
				uptype: 0
			}, {
				desc: "阴阳内功命中等级提高",
				prefix: "hit",
				uptype: 2
			}, {
				desc: "毒性内功命中等级提高",
				prefix: "hit",
				uptype: 2
			}]

// ["bingxin", "dujing", "zixia", "mowen", "huajian", "yijin", "fenying", "tianluo", "lijing", "yunchang", "butian", "xiangzhi", "taixu", "cangjian", "fenshan", "jingyu", "aoxue", "xiaochen", "tielao", "xisui", "tiegu", "mingzun"]

function adshow(){
	var addata=["云翳开发",'感谢前人提供属性计算公式','数值精没有误差','感谢某某赞助','电五双梦鸾中恶招收各种给力PVP玩家','电五大姨妈胖次高高挂帮会招收各种给力PVP玩家','电五风雨同舟三行情书招收各种给力PVX玩家','电五双梦西山居招收PVE高端玩家','开发者微博：云翳','YY交流群12345678']
	var ihd=['zbname','weizhi','wgShield','ngShield','tizhi','ggjbsx','quality','score','ep_sects','ep_getPath','xinfatj']
	var  konid=['strengthen','jinglian','qtsx','xiangq','texiao','fm','ggjbsx2','tizhi2']
	for(var i=0;i<ihd.length;i++){
		jQuery("#"+ihd[i]).html(addata[i])
		
	}
	for(var j=0;j<konid.length;j++){
		jQuery("#"+konid[j]).html('')
	}
}
function Gt3(g, n, f) {
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
	}