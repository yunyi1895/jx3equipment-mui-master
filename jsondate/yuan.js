function analysisPre(a) {
    var b,
    c,
    d,
    e,
    f,
    g,
    h;
    for (str = Number(a), str = str.toString(2), str = addZero(str, 22), b = str.split(""), c = new Array("", ""), d = [["混元性内功", "万花(花间游)"], ["阳性内功", "少林(易筋经)"], ["毒性内功", "唐门(天罗诡道)"], ["阴阳内功", "明教(焚影圣诀)"], ["阴性内功", "七秀(冰心诀)"], ["毒性内功", "五毒(毒经)"], ["混元性内功", "纯阳(紫霞功)"], ["阴性内功", "长歌(莫问)"], ["外功", "唐门(惊羽诀)"], ["外功", "天策(傲血战意)"], ["外功", "丐帮"], ["外功", "纯阳(太虚剑意)"], ["外功", "藏剑(均可)"], ["外功", "苍云(分山劲)"], ["混元性内功", "万花(离经易道)"], ["阴性内功", "七秀(云裳心经)"], ["毒性内功", "五毒(补天诀)"], ["阴性内功", "长歌(相知)"], ["阳性内功", "少林(洗髓经)"], ["阴阳内功", "明教(明尊琉璃体)"], ["外功", "天策(铁牢律)"], ["外功", "苍云(铁骨衣)"]], e = 0, f = -1, g = [], h = 0; h < b.length; h++) b[h] > 0 && (e++, f = -1 == f ? h: f, g.push(d[h][1]));
    if (1 == e) c[0] = d[f][0],
    c[1] = d[f][0],
    2 == f && (c[1] = "外功");
    else if (4 >= e) switch (f) {
    case 0:
        c = ["内功", "全"];
        break;
    case 4:
        c = ["内功", "内功"];
        break;
    case 7:
        c = ["外功", "外功"];
        break;
    case 10:
        c = ["外功", "外功"];
        break;
    case 13:
        c = ["内功", "内功"];
        break;
    case 16:
        c = ["全", "全"]
    }
    if (e >= 6) switch (f) {
    case 0:
        c = ["内功", "全"],
        g = ["内功通用"];
        break;
    case 7:
        c = ["外功", "外功"],
        g = ["外功通用"]
    }
    return c[2] = g,
    c
}
function addZero(a, b) {
    return new Array(b - a.length + 1).join("0") + a
}
var app,
Equip,
Buff,
Collection,
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
        baseDodge: 133,
        tixingOption: [1, 1, 1, 0]
    },
    tiegu: {
        name: "tiegu",
        type: "t",
        baseHPlus: 1.45,
        baseBodyPlus: 2.2,
        basePhysicsShield: 80,
        baseParryBase: 133,
        baseParryValue: 361,
        baseParryBasePlus: .15,
        baseParryValuePlus: .5,
        tixingOption: [1, 1, 1, 1]
    }
},
attributePlusValueMap = {
    body: [1, 2, 3, 4, 5, 6, 8, 10],
    heal: [1, 3, 4, 6, 8, 9, 13, 17],
    basicAttributes: [1, 2, 3, 4, 5, 6, 8, 10],
    magicAttack: [1, 3, 5, 7, 9, 10, 14, 18],
    physicsAttack: [1, 3, 4, 6, 7, 9, 12, 15],
    plusAttributes: [1, 3, 5, 7, 9, 11, 15, 20],
    life: [10, 20, 30, 40, 50, 60, 80, 103],
    lifeRecovery: [1, 2, 4, 5, 6, 8, 10, 13],
    threat: ["0.1%", "0.3%", "0.4%", "0.6%", "0.7%", "0.9%", "1.2%", "1.5%"],
    parryValue: [8, 16, 24, 33, 41, 49, 66, 85],
    haste: [2, 4, 6, 8, 10, 12, 16, 21]
},
stoneTypeList = ["金", "木", "水", "火", "土"],
stoneTypeListReverse = {
    "金": 0,
    "木": 1,
    "水": 2,
    "火": 3,
    "土": 4,
    "全": 5
},
stoneTypeMap = {
    A: [0, 2],
    B: [1, 2],
    C: [1, 3],
    D: [0, 4],
    E: [4, 3],
    F: [1, 4],
    G: [0, 3],
    H: [4, 2],
    I: [3, 2],
    J: [0, 1]
},
stoneTypeChange = {
    A: ["C", "E", "F"],
    B: ["D", "E", "G"],
    C: ["A", "D", "H"],
    D: ["B", "C", "I"],
    E: ["A", "B", "J"]
},
stones = [[], [{
    img: "0-1",
    level: 1,
    type: 0
},
{
    img: "1-1",
    level: 1,
    type: 1
},
{
    img: "2-1",
    level: 1,
    type: 2
},
{
    img: "3-1",
    level: 1,
    type: 3
},
{
    img: "4-1",
    level: 1,
    type: 4
}], [{
    img: "0-2",
    level: 2,
    type: 0
},
{
    img: "1-2",
    level: 2,
    type: 1
},
{
    img: "2-2",
    level: 2,
    type: 2
},
{
    img: "3-2",
    level: 2,
    type: 3
},
{
    img: "4-2",
    level: 2,
    type: 4
}], [{
    img: "0-3",
    level: 3,
    type: 0
},
{
    img: "1-3",
    level: 3,
    type: 1
},
{
    img: "2-3",
    level: 3,
    type: 2
},
{
    img: "3-3",
    level: 3,
    type: 3
},
{
    img: "4-3",
    level: 3,
    type: 4
}], [{
    img: "0-4",
    level: 4,
    type: 0
},
{
    img: "1-4",
    level: 4,
    type: 1
},
{
    img: "2-4",
    level: 4,
    type: 2
},
{
    img: "3-4",
    level: 4,
    type: 3
},
{
    img: "4-4",
    level: 4,
    type: 4
}], [{
    img: "0-5",
    level: 5,
    type: 0
},
{
    img: "1-5",
    level: 5,
    type: 1
},
{
    img: "2-5",
    level: 5,
    type: 2
},
{
    img: "3-5",
    level: 5,
    type: 3
},
{
    img: "4-5",
    level: 5,
    type: 4
}], [{
    img: "0-6",
    level: 6,
    type: 0
},
{
    img: "1-6",
    level: 6,
    type: 1
},
{
    img: "2-6",
    level: 6,
    type: 2
},
{
    img: "3-6",
    level: 6,
    type: 3
},
{
    img: "4-6",
    level: 6,
    type: 4
}], [{
    img: "0-7",
    level: 7,
    type: 0
},
{
    img: "1-7",
    level: 7,
    type: 1
},
{
    img: "2-7",
    level: 7,
    type: 2
},
{
    img: "3-7",
    level: 7,
    type: 3
},
{
    img: "4-7",
    level: 7,
    type: 4
}], [{
    img: "0-8",
    level: 8,
    type: 0
},
{
    img: "1-8",
    level: 8,
    type: 1
},
{
    img: "2-8",
    level: 8,
    type: 2
},
{
    img: "3-8",
    level: 8,
    type: 3
},
{
    img: "4-8",
    level: 8,
    type: 4
}], [{
    img: "0-9",
    level: 9,
    type: 0
},
{
    img: "1-9",
    level: 9,
    type: 1
},
{
    img: "2-9",
    level: 9,
    type: 2
},
{
    img: "3-9",
    level: 9,
    type: 3
},
{
    img: "4-9",
    level: 9,
    type: 4
}]],
attrTransTable = {
    "08": ["09", "11", "21", "51"],
    40: ["20", "11", "31", "51"],
    15: ["54", "11", "25", "51"],
    19: ["53", "11", "26", "51"],
    22: ["57", "11", "30", "51", "09", "21"],
    33: ["56", "11", "34", "51"],
    16: ["50", "11", "24", "51"],
    "06": ["09", "11", "08", "51", "22"],
    10: ["20", "11", "40", "51"],
    "07": ["54", "11", "25", "51", "41", "36"],
    17: ["53", "11", "26", "51"],
    29: ["57", "11", "22", "51", "41", "30", "36"],
    35: ["56", "11", "33", "51"],
    23: ["50", "11", "24", "51", "41", "36"],
    37: ["36", "11", "40", "08", "51"],
    21: ["09", "11", "08", "51"],
    31: ["20", "11", "40", "51"],
    25: ["54", "11", "15", "51", "07", "36", "41", "07"],
    26: ["53", "11", "19", "51"],
    30: ["57", "11", "22", "51", "29", "36", "41"],
    34: ["56", "11", "33", "51"],
    24: ["50", "11", "16", "51", "23", "36", "41"],
    38: ["36", "11", "40", "08", "51"],
    18: ["09", "11", "08", "51"],
    27: ["20", "11", "31", "51"],
    14: ["54", "11", "15", "51"],
    12: ["53", "11", "19", "51"],
    28: ["57", "11", "22", "51", "09"],
    32: ["56", "11", "33", "51"],
    13: ["50", "11", "16", "51"],
    "09": ["08", "11", "21", "51", "22"],
    20: ["40", "11", "31", "51"],
    54: ["15", "11", "25", "51"],
    53: ["19", "11", "26", "51"],
    57: ["22", "11", "30", "51"],
    56: ["33", "11", "34", "51"],
    50: ["16", "11", "24", "51"],
    36: ["40", "08", "11", "38", "51"],
    11: ["36", "40", "08", "38", "51", "55"],
    43: ["36", "47", "55", "51"],
    42: ["36", "47", "55", "51"],
    45: ["36", "47", "55", "51"],
    46: ["36", "47", "55", "51"],
    44: ["36", "47", "55", "51"],
    55: ["36", "47", "45", "51"],
    47: ["36", "11", "05", "51"],
    "03": ["36", "11", "08", "40", "41", "51", "55"],
    "01": ["36", "11", "40", "51"],
    "00": ["36", "11", "40", "51", "41"],
    "02": ["36", "11", "08", "51"],
    "04": ["36", "11", "08", "51"],
    "05": ["36", "11", "08", "40", "51", "55", "41", "49"],
    39: ["36", "11", "08", "40", "51", "55", "41", "49"],
    41: ["36", "00", "49", "51"],
    52: []
},
stoneAttrMap = [{
    desc: "根骨+",
    prefix: "spirit"
},
{
    desc: "元气+",
    prefix: "spunk"
},
{
    desc: "力道+",
    prefix: "strength"
},
{
    desc: "体质+",
    prefix: "body"
},
{
    desc: "身法+",
    prefix: "agility"
},
{
    desc: "每秒回复气血",
    prefix: "lifeRecovery"
},
{
    desc: "外功会心等级提高",
    prefix: "crit"
},
{
    desc: "阴性会心等级提高",
    prefix: "crit"
},
{
    desc: "外功攻击提高",
    prefix: "attack"
},
{
    desc: "外功命中等级提高",
    prefix: "hit"
},
{
    desc: "内功会心等级提高",
    prefix: "crit"
},
{
    desc: "无双等级提高",
    prefix: "strain"
},
{
    desc: "阳性破防等级提高",
    prefix: "overcome"
},
{
    desc: "混元破防等级提高",
    prefix: "overcome"
},
{
    desc: "阴性破防等级提高",
    prefix: "overcome"
},
{
    desc: "阴性内功攻击提高",
    prefix: "attack"
},
{
    desc: "混元内功攻击提高",
    prefix: "attack"
},
{
    desc: "阳性会心等级提高",
    prefix: "crit"
},
{
    desc: "外功破防等级提高",
    prefix: "overcome"
},
{
    desc: "阳性内功攻击提高",
    prefix: "attack"
},
{
    desc: "内功命中等级提高",
    prefix: "hit"
},
{
    desc: "外功会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "毒性内功攻击提高",
    prefix: "attack"
},
{
    desc: "混元会心等级提高",
    prefix: "crit"
},
{
    desc: "混元会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "阴性会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "阳性会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "内功破防等级提高",
    prefix: "overcome"
},
{
    desc: "毒性破防等级提高",
    prefix: "overcome"
},
{
    desc: "毒性会心等级提高",
    prefix: "crit"
},
{
    desc: "毒性会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "内功会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "阴阳破防等级提高",
    prefix: "overcome"
},
{
    desc: "阴阳攻击等级提高",
    prefix: "attack"
},
{
    desc: "阴阳会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "阴阳会心等级提高",
    prefix: "crit"
},
{
    desc: "全命中等级提高",
    prefix: "hit"
},
{
    desc: "全会心等级提高",
    prefix: "crit"
},
{
    desc: "全会心效果等级提高",
    prefix: "critEffect"
},
{
    desc: "额外提高气血上限",
    prefix: "life"
},
{
    desc: "内功攻击提高",
    prefix: "attack"
},
{
    desc: "治疗成效提高",
    prefix: "heal"
},
{
    desc: "外功防御等级提高",
    prefix: "physicsShield"
},
{
    desc: "内功防御等级提高",
    prefix: "magicShield"
},
{
    desc: "拆招等级提高",
    prefix: "parryValue"
},
{
    desc: "闪避等级提高",
    prefix: "dodge"
},
{
    desc: "招架等级提高",
    prefix: "parryBase"
},
{
    desc: "招式产生的威胁变化+",
    prefix: "threat"
},
{
    desc: "每秒内力恢复提升",
    prefix: "magicRecovery"
},
{
    desc: "最大内力上限提高",
    prefix: "magic"
},
{
    desc: "混元性内功命中等级提高",
    prefix: "hit"
},
{
    desc: "加速等级提高",
    prefix: "acce"
},
{
    desc: "化劲等级提高",
    prefix: "huajing"
},
{
    desc: "阳性内功命中等级提高",
    prefix: "hit"
},
{
    desc: "阴性内功命中等级提高",
    prefix: "hit"
},
{
    desc: "御劲等级提高",
    prefix: "toughness"
},
{
    desc: "阴阳内功命中等级提高",
    prefix: "hit"
},
{
    desc: "毒性内功命中等级提高",
    prefix: "hit"
}],
typeParseMap = {
    "0_hat": "帽子",
    "1_jacket": "上衣",
    "2_belt": "腰带",
    "3_wrist": "护腕",
    "4_bottoms": "下装",
    "5_shoes": "鞋子",
    "6_necklace": "项链",
    "7_pendant": "腰坠",
    "8_ring_1": "戒指",
    "9_ring_2": "戒指",
    a_secondaryWeapon: "远程武器",
    b_primaryWeapon: "近程武器",
    c_primaryWeapon: "重兵武器"
},
positions = ["0_hat", "1_jacket", "2_belt", "3_wrist", "4_bottoms", "5_shoes", "6_necklace", "7_pendant", "8_ring_1", "9_ring_2", "a_secondaryWeapon", "b_primaryWeapon"],
equipId_focusId_map = ["6_necklace", "7_pendant", "8_ring_1", "9_ring_2", "a_secondaryWeapon", "5_shoes", "3_wrist", "4_bottoms", "1_jacket", "0_hat", "2_belt", "b_primaryWeapon", "c_primaryWeapon"],
preDescAvaList = {
    basicPhysicsShield: "外功防御等级提高",
    basicMagicShield: "内功防御等级提高",
    body: "体质+",
    spirit: "根骨+",
    spunk: "元气+",
    strength: "力道+",
    agility: "身法+",
    physicsShield: "外功防御等级提高",
    magicShield: "内功防御等级提高",
    dodge: "闪避等级提高",
    parryBase: "招架等级提高",
    parryValue: "拆招等级提高",
    toughness: "御劲等级提高",
    attack: "攻击提高",
    heal: "治疗成效提高",
    crit: "会心等级提高",
    critEffect: "会心效果提高",
    overcome: "破防等级提高",
    hit: "命中等级提高",
    acce: "加速等级提高",
    strain: "无双等级提高",
    huajing: "化劲等级提高",
    threat: "招式产生的威胁提高"
},
attributeMap = {
    body: "body",
    spirit: "basicAttributes",
    strength: "basicAttributes",
    agility: "basicAttributes",
    spunk: "basicAttributes",
    physicsShield: "body",
    magicShield: "body",
    dodge: "body",
    parryBase: "body",
    parryValue: "parryValue",
    toughness: "body",
    attack: "magicAttack",
    heal: "heal",
    crit: "plusAttributes",
    critEffect: "plusAttributes",
    overcome: "plusAttributes",
    acce: "haste",
    hit: "plusAttributes",
    strain: "plusAttributes",
    huajing: "body",
    threat: "threat",
    life: "life",
    magic: "life",
    lifeRecovery: "lifeRecovery",
    magicRecovery: "lifeRecovery"
},
positionIconList = {
    "0_hat": {
        icon: "../../images/pl_9.png"
    },
    "1_jacket": {
        icon: "../../images/pl_8.png"
    },
    "2_belt": {
        icon: "../../images/pl_10.png"
    },
    "3_wrist": {
        icon: "../../images/pl_6.png"
    },
    b_primaryWeapon: {
        icon: "../../images/pl_11.png"
    },
    a_secondaryWeapon: {
        icon: "../../images/pl_4.png"
    },
    "4_bottoms": {
        icon: "../../images/pl_7.png"
    },
    "5_shoes": {
        icon: "../../images/pl_5.png"
    },
    "6_necklace": {
        icon: "../../images/pl_0.png"
    },
    "7_pendant": {
        icon: "../../images/pl_1.png"
    },
    "8_ring_1": {
        icon: "../../images/pl_2.png"
    },
    "9_ring_2": {
        icon: "../../images/pl_2.png"
    }
},
stoneScore = [0, 2.66, 5.33, 8, 10.66, 13.17, 16, 21, 27.33],
tixingOptions = [{
    name: "成男",
    body: 33,
    spunk: 32,
    spirit: 33,
    strength: 32,
    agility: 33
},
{
    name: "成女",
    body: 33,
    spunk: 32,
    spirit: 33,
    strength: 32,
    agility: 33
},
{
    name: "萝莉",
    body: 33,
    spunk: 32,
    spirit: 33,
    strength: 32,
    agility: 33
},
{
    name: "正太",
    body: 33,
    spunk: 32,
    spirit: 33,
    strength: 32,
    agility: 33
}];
$(".collapse-header").on("click", 
function() {
    $($(this).data("target")).collapse("toggle")
}),
app = angular.module("J3pz", ["ui.bootstrap", "toastr", "ngAnimate", "ui.bootstrap-slider", "ui.select", "ngDraggable", "angular-loading-bar", "cfp.hotkeys"]).config(["toastrConfig", 
function(a) {
    angular.extend(a, {
        maxOpened: 5,
        positionClass: "toast-bottom-right",
        timeOut: 3e3
    })
}]),
app.config(["uiSelectConfig", 
function(a) {
    a.theme = "bootstrap"
}]),
app.config(["cfpLoadingBarProvider", 
function(a) {
    a.latencyThreshold = 100,
    a.includeSpinner = !1
}]),
app.config(["hotkeysProvider", 
function(a) {
    a.template = '<div class="cfp-hotkeys-container fade" ng-class="{in: helpVisible}" style="display: none;"><div class="cfp-hotkeys"><h4 class="cfp-hotkeys-title" ng-if="!header">{{ title }}</h4><div ng-bind-html="header" ng-if="header"></div><div class="row"><div class="col-md-3"></div><div class="col-md-6 row "><div ng-repeat="hotkey in hotkeys | filter:{ description: \'!$$undefined$$\' }" class="col-md-6 m-b-1"><tr><td class="cfp-hotkeys-keys"><span ng-repeat="key in hotkey.format() track by $index" class="cfp-hotkeys-key">{{ key }}</span></td><td class="cfp-hotkeys-text">{{ hotkey.description }}</td></tr></div></div><div class="col-md-3"></div></div><div ng-bind-html="footer" ng-if="footer"></div><div class="cfp-hotkeys-close" ng-click="toggleCheatSheet()">×</div></div></div>'
}]),
app.directive("icheck", ["$timeout", "$parse", 
function(a, b) {
    return {
        require: "ngModel",
        link: function(b, c, d, e) {
            return b.safeApply = function(a) {
                var b = this.$root.$$phase;
                "$apply" == b || "$digest" == b ? a && "function" == typeof a && a() : this.$apply(a)
            },
            a(function() {
                var a;
                return a = d["value"],
                b.$watch(d["ngModel"], 
                function(a) {
                    $(c).icheck("updated")
                }),
                b.$watch(d["ngDisabled"], 
                function(a) {
                    1 == a ? $(c).icheck("disabled") : 0 == a && $(c).icheck("enabled")
                }),
                $(c).icheck({
                    checkboxClass: "icheckbox_square-blue",
                    radioClass: "iradio_square-blue"
                }).on("ifChanged", 
                function(f) {
                    return "checkbox" === $(c).attr("type") && d["ngModel"] && b.safeApply(function() {
                        return e.$setViewValue(f.target.checked)
                    }),
                    "radio" === $(c).attr("type") && d["ngModel"] ? b.safeApply(function() {
                        return e.$setViewValue(a)
                    }) : void 0
                })
            })
        }
    }
}]),
app.service("Utils", ["$rootScope", 
function($rootScope) {
    this.transDBStoneToJsObj = function(a) {
        var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        b = 0;
        if ($rootScope.buffController.attributeStone.percentPlus = {
            buff: {},
            isCheck: !1
        },
        $rootScope.buffController.attributeStone.baseMinus = {
            buff: {},
            isCheck: !1
        },
        !a || !a.level) return {
            name: "",
            score: 0,
            level: 0,
            attributes: [{
                type: "jing",
                isFirstChild: !0,
                desc: "",
                prefix: "none",
                number: 0,
                isActive: !1,
                isPercent: !1,
                needMagicStoneType: "-1",
                needMagicStoneNumber: 0
            },
            {
                desc: "",
                isFirstChild: !1,
                prefix: "none",
                number: 0,
                isActive: !1,
                isPercent: !1,
                needMagicStoneType: "-1",
                needMagicStoneNumber: 0
            },
            {
                desc: "",
                isFirstChild: !1,
                prefix: "none",
                number: 0,
                isActive: !1,
                isPercent: !1,
                needMagicStoneType: "-1",
                needMagicStoneNumber: 0
            }]
        };
        if (c = "nei", a.attr[0].attribute.indexOf("精简") >= 0) {
            for (c = "jing", d = ["元气", "根骨", "力道", "身法", "体质"], e = a.attr[1].number, f = ["元气提高" + e, "根骨提高" + e, "力道提高" + e, "身法提高" + e, "体质提高" + e], g = ["spunk", "spirit", "strength", "agility", "body"], h = 0; h < d.length; h++) a.attr[1].attribute.indexOf(d[h]) >= 0 && (a.attr[1].desc = f[h], a.attr[1].prefix = g[h]);
            for (d = ["体质", "元气", "根骨", "力道", "身法", "抽蓝", "吸血", "移动速度"], e = a.attr[2].number / 10.24, numberToShow = e.toFixed(0), f = ["体质提高" + numberToShow + "%", "元气提高" + numberToShow + "%", "根骨提高" + numberToShow + "%", "力道提高" + numberToShow + "%", "身法提高" + numberToShow + "%", "命中后抽取目标内力" + numberToShow + "%", "命中后抽取目标气血" + numberToShow + "%", "移动速度提高" + numberToShow + "%"], g = ["body", "spunk", "spirit", "strength", "agility", "", "", ""], h = 0; h < d.length; h++) a.attr[2].attribute.indexOf(d[h]) >= 0 && (a.attr[2].desc = f[h], a.attr[2].prefix = g[h], i = {
                id: "attrPercentPlus_" + b,
                dataP: {},
                iconId: 0,
                name: "",
                type: 0,
                isPercent: !0,
                isFinal: !1,
                conflict: []
            },
            i.type = "AttributeStone", i.dataP[g[h]] = e, j = Buff.createNew(i), $rootScope.buffController.attributeStone.percentPlus = {
                buff: j,
                isCheck: !1
            },
            i = {
                id: "attrBaseMinus_" + b,
                dataB: {},
                iconId: 0,
                name: "",
                type: 0,
                isPercent: !1,
                isFinal: !1,
                conflict: []
            },
            i.type = "AttributeStone", i.dataB[g[h]] = -1 * a.attr[2].number, j = Buff.createNew(i), $rootScope.buffController.attributeStone.baseMinus = {
                buff: j,
                isCheck: !1
            },
            b++);
            for (h = 1; 3 > h; h++) k = "",
            l = a.attr[h].number / 10.24,
            l = l.toFixed(0),
            a.attr[h].attribute.indexOf("会心") >= 0 ? (a.attr[h].desc = "全会心等级提高" + a.attr[h].number, a.attr[h].prefix = "crit") : a.attr[h].attribute.indexOf("会效") >= 0 ? (a.attr[h].desc = "全会心效果等级提高" + a.attr[h].number, a.attr[h].prefix = "critEffect") : a.attr[h].attribute.indexOf("全属性") >= 0 ? (a.attr[h].desc = "全属性提高" + a.attr[h].number, a.attr[h].prefix = "body/spunk/spirit/strength/agility") : a.attr[h].attribute.indexOf("治疗") >= 0 ? a.attr[h].desc = "治疗效果提高" + l + "%": a.attr[h].attribute.indexOf("蓝耗") >= 0 ? a.attr[h].desc = "招式内力消耗降低" + l + "%": a.attr[h].attribute.indexOf("被疗成效") >= 0 ? a.attr[h].desc = "被治疗成效提高" + l + "%": a.attr[h].attribute.indexOf("免伤") >= 0 ? a.attr[h].desc = "伤害减免" + l + "%": a.attr[h].attribute.indexOf("仇恨") >= 0 && (a.attr[h].desc = "招式产生的威胁提高" + l + "%")
        } else for (["spirit", "spunk", "hps"].indexOf($rootScope.menpai.type) >= 0 && (c = "nei"), ["agility", "strength"].indexOf($rootScope.menpai.type) >= 0 && (c = "wai"), d = ["攻击", "治疗", "会心", "会效", "命中", "破防", "急速", "无双", "元气", "根骨", "力道", "身法", "化劲", "御劲", "回蓝", "外防", "内防", "闪避", "招架", "拆招", "威胁", "血上限", "回血速度", "体质", "武器伤害"], f = ["攻击提高", "治疗成效提高", "会心等级提高", "会心效果等级提高", "命中等级提高", "破防提高", "急速等级提高", "无双等级提高", "元气+", "根骨+", "力道+", "身法+", "化劲等级提高", "御劲等级提高", "回蓝速度提高", "外功防御等级提高", "内功防御等级提高", "闪避等级提高", "招架等级提高", "拆招值提高", "招式产生的威胁变化", "额外提高气血上限", "每秒气血恢复提升", "体质+", "武器伤害提高"], g = ["attack", "heal", "crit", "critEffect", "hit", "overcome", "acce", "strain", "spunk", "spirit", "strength", "agility", "huajing", "toughness", "", "physicsShield", "magicShield", "dodge", "parryBase", "parryValue", "threat", "life", "", "body", ""], m = ["阳性", "阴性", "混元", "毒性", "内功", "外功"], n = ["阳性内功", "阴性内功", "混元内功", "毒性内功", "内功", "外功"], h = 0; 3 > h; h++) for (o = 0; o < d.length; o++) {
            for (p = "", q = 0; q < m.length; q++) if (a.attr[h].attribute.indexOf(m[q]) >= 0) {
                p = n[q];
                break
            }
            a.attr[h].attribute.indexOf(d[o]) >= 0 && (a.attr[h].desc = p + f[o] + a.attr[h].number, a.attr[h].prefix = g[o])
        }
        return r = {
            name: a.name,
            score: 77 * a.level,
            level: a.level,
            attributes: [{
                type: c,
                isFirstChild: "jing" == c ? !1: !0,
                desc: a.attr[0].desc,
                prefix: a.attr[0].prefix,
                number: a.attr[0].number,
                isActive: !1,
                isPercent: !1,
                needMagicStoneType: stoneTypeListReverse[a.attr[0].neededAttribute],
                needMagicStoneNumber: a.attr[0].neededStone,
                needMagicStoneLevel: a.attr[0].neededLevel
            },
            {
                type: c,
                isFirstChild: "jing" == c ? !0: !1,
                desc: a.attr[1].desc,
                prefix: a.attr[1].prefix,
                number: a.attr[1].number,
                isActive: !1,
                isPercent: !1,
                needMagicStoneType: stoneTypeListReverse[a.attr[1].neededAttribute],
                needMagicStoneNumber: a.attr[1].neededStone,
                needMagicStoneLevel: a.attr[1].neededLevel
            },
            {
                isFirstChild: !1,
                desc: a.attr[2].desc,
                prefix: a.attr[2].prefix,
                number: a.attr[2].number,
                isActive: !1,
                isPercent: b > 0,
                needMagicStoneType: stoneTypeListReverse[a.attr[2].neededAttribute],
                needMagicStoneNumber: a.attr[2].neededStone,
                needMagicStoneLevel: a.attr[2].neededLevel
            }]
        }
    },
    this.changeColor = function(a, b) {
        $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].typeId = b;
        var c = stoneTypeMap[b];
        $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].avaStone = c,
        $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].typeDesc = stoneTypeList[c[0]] + "/" + stoneTypeList[c[1]] + "镶嵌孔",
        this.isChanged(a)
    },
    this.changeAttr = function(a, b) {
        $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].attrId = b,
        $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].attrDesc = stoneAttrMap[Number(b)].desc,
        $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].attrPrefix = stoneAttrMap[Number(b)].prefix,
        this.isChanged(a)
    },
    this.isChanged = function(a) {
        var f,
        b = $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].typeId,
        c = $rootScope.equips[$rootScope.focus].holes.holeInfo[a].typeId,
        d = $rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].attrId,
        e = $rootScope.equips[$rootScope.focus].holes.holeInfo[a].attrId;
        b == c && d == e ? ($rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].changed = !1, $rootScope.equips[$rootScope.focus].holes.holeInfo[a].changed = !1) : ($rootScope.equips[$rootScope.focus].newHoles.holeInfo[a].changed = !0, $rootScope.equips[$rootScope.focus].holes.holeInfo[a].changed = !0),
        f = {
            type: $rootScope.equips[$rootScope.focus].embed.stone[a].typeId,
            level: $rootScope.equips[$rootScope.focus].embed.stone[a].level,
            img: $rootScope.equips[$rootScope.focus].embed.stone[a].typeId + "-" + $rootScope.equips[$rootScope.focus].embed.stone[a].level
        },
        this.onDrop(f, a)
    },
    this.onDrop = function(stone, index) {
        var embeddedStone,
        exteaStoneScore,
        holeInfo = $rootScope.equips[$rootScope.focus].newHoles.holeInfo[index],
        isActive = stone.type >= 0,
        attrPlus = 0;
        isActive && (attrPlus = attributePlusValueMap[attributeMap[holeInfo.attrPrefix]][stone.level - 1]),
        embeddedStone = {
            typeId: stone.type,
            level: stone.level,
            attrPrefix: holeInfo.attrPrefix,
            attr: attrPlus,
            score: stoneScore[stone.level] * (stone.type < 0 ? 0: 1),
            active: isActive
        },
        $rootScope.equips[$rootScope.focus].embed.stone[index] = embeddedStone,
        $rootScope.equips[$rootScope.focus].embed.score[index] = embeddedStone.score,
        exteaStoneScore = 0,
        "b_primaryWeapon" == $rootScope.equips[$rootScope.focus].type && (exteaStoneScore = 77 * $rootScope.attributeStone[0].level),
        "c_primaryWeapon" == $rootScope.equips[$rootScope.focus].type && (exteaStoneScore = 77 * $rootScope.attributeStone[1].level),
        $rootScope.equips[$rootScope.focus].embed.totalScore = Math.round(eval($rootScope.equips[$rootScope.focus].embed.score.join("+")) + exteaStoneScore),
        this.attributeStoneActivation()
    },
    this.attributeStoneActivation = function() {
        var a,
        b,
        c,
        d,
        e,
        f,
        g;
        for ($rootScope.stoneStats = {
            0: {
                level: 0,
                number: 0
            },
            1: {
                level: 0,
                number: 0
            },
            2: {
                level: 0,
                number: 0
            },
            3: {
                level: 0,
                number: 0
            },
            4: {
                level: 0,
                number: 0
            },
            5: {
                level: 0,
                number: 0
            }
        },
        a = 0; a < positions.length; a++) if (b = $rootScope.equips[positions[a]], !("b_primaryWeapon" == positions[a] && 1 == $rootScope.attributeStoneSelected || "c_primaryWeapon" == positions[a] && 0 == $rootScope.attributeStoneSelected)) for (c = 0; c < b.holes.number; c++)"-1" != b.embed.stone[c].typeId && ($rootScope.stoneStats[b.embed.stone[c].typeId].level -= -1 * b.embed.stone[c].level, $rootScope.stoneStats[b.embed.stone[c].typeId].number++, $rootScope.stoneStats["5"].level -= -1 * b.embed.stone[c].level, $rootScope.stoneStats["5"].number++);
        for (d = $rootScope.attributeStone[$rootScope.attributeStoneSelected].attributes, a = 0; 3 > a; a++) e = Number(d[a].needMagicStoneType),
        f = Number(d[a].needMagicStoneNumber),
        g = Number(d[a].needMagicStoneLevel),
        $rootScope.attributeStone[$rootScope.attributeStoneSelected].attributes[a].isActive = $rootScope.stoneStats[e] && $rootScope.stoneStats[e].level >= g && $rootScope.stoneStats[e].number >= f,
        $rootScope.attributeStone[$rootScope.attributeStoneSelected].attributes[a].isPercent && ($rootScope.buffController.attributeStone.percentPlus.isCheck = $rootScope.attributeStone[$rootScope.attributeStoneSelected].attributes[a].isActive, $rootScope.buffController.attributeStone.baseMinus.isCheck = $rootScope.attributeStone[$rootScope.attributeStoneSelected].attributes[a].isActive)
    },
    this.xilian = function(a, b, c, d) {
        var g,
        h,
        i,
        j,
        k,
        l,
        e = 1,
        f = $rootScope.equips[$rootScope.focus].data.quality;
        "attack" == a ? e = $rootScope.equips[$rootScope.focus].descList["attack"].indexOf("外功") >= 0 ? .294: .244: "heal" == a ? e = .124: "parryValue" == a && (e = .0808),
        g = (.05 * c + .55) * (c > 0 ? 1: 0),
        h = $rootScope.equips[$rootScope.focus].data[a],
        i = -.01 * h * d * (c > 0 ? 1: 0),
        i = i.toFixed(2),
        j = Math.floor( - 1 * i * g * e),
        i = Math.floor(i),
        k = Number(h) + Number(i),
        $rootScope.equips[$rootScope.focus].xilian.level = c,
        $rootScope.equips[$rootScope.focus].xilian.ratio = d,
        $rootScope.equips[$rootScope.focus].xilian.origin = {
            key: a,
            value: i
        },
        $rootScope.equips[$rootScope.focus].xilian.target = {
            key: b,
            value: j
        },
        $rootScope.equips[$rootScope.focus].xilian.num = {},
        $rootScope.equips[$rootScope.focus].xilian.num[a] = i,
        $rootScope.equips[$rootScope.focus].xilian.num[b] = j,
        l = $rootScope.equips[$rootScope.focus].jinglian.strengthen,
        $rootScope.equips[$rootScope.focus].setStrengthen(l)
    },
    this.calculate = function() {
        var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        a = $rootScope.menpai,
        b = {
            score: 0,
            body: 0,
            spirit: 0,
            strength: 0,
            agility: 0,
            spunk: 0,
            basicPhysicsShield: 0,
            basicMagicShield: 0,
            physicsShield: 0,
            magicShield: 0,
            dodge: 0,
            parryBase: 0,
            parryValue: 0,
            toughness: 0,
            basicAttack: 0,
            attack: 0,
            heal: 0,
            crit: 0,
            critEffect: 0,
            overcome: 0,
            acce: 0,
            hit: 0,
            strain: 0,
            huajing: 0,
            threat: 0,
            life: 0,
            acceLevel: 0
        },
        c = ["score", "body", "spirit", "strength", "agility", "spunk", "basicPhysicsShield", "basicMagicShield", "physicsShield", "magicShield", "dodge", "parryBase", "parryValue", "toughness", "attack", "heal", "crit", "critEffect", "overcome", "acce", "hit", "strain", "huajing", "threat", "life", "basicAttack", "basicLife", "basicHeal"];
        for (d = 0; d < positions.length; d++) {
            if (e = $rootScope.equips[positions[d]], "cangjian" != $rootScope.menpai.name || "b_primaryWeapon" != positions[d] && "c_primaryWeapon" != positions[d]) b.score += 1 * e.embed.totalScore,
            e.getData("score") > 0 && (b["score"] += 1 * e.getData("score")),
            e.getJinglian("score") > 0 && (b["score"] += 1 * e.getJinglian("score")),
            e.getEnhance("score") > 0 && (b["score"] += 1 * e.getEnhance("score"));
            else {
                if (b.score += .5 * e.embed.totalScore, e.getData("score") > 0 && (b["score"] += .5 * e.getData("score")), e.getJinglian("score") > 0 && (b["score"] += .5 * e.getJinglian("score")), e.getEnhance("score") > 0 && (b["score"] += .5 * e.getEnhance("score")), "b_primaryWeapon" == positions[d] && $rootScope.zhongjian) continue;
                if ("c_primaryWeapon" == positions[d] && !$rootScope.zhongjian) continue
            }
            for (f = 1; f < c.length; f++) e.getData(c[f]) > 0 && (b[c[f]] += 1 * e.getData(c[f])),
            e.getJinglian(c[f]) > 0 && (b[c[f]] += 1 * e.getJinglian(c[f])),
            e.getEnhance(c[f]) > 0 && (b[c[f]] += 1 * e.getEnhance(c[f]));
            for (e.xilian.level > 0 && (b[e.xilian.origin.key] -= -1 * e.xilian.origin.value, b[e.xilian.target.key] -= -1 * e.xilian.target.value), g = 0; g < e.holes.number; g++) h = e.getHoleNum(g),
            h.attr > 0 && (b[h.prefix] -= -1 * h.attr)
        }
        for (i = $rootScope.setController, d = 0; d < i.setsList.length; d++) for (j = i.collectionsList[d], f = 0; f < j.effects.length; f++) if (j.effects[f].conditionNum <= j.activeNum && j.effects[f].effectIndex) for (k = j.effects[f].effectIndex.split("/"), g = 0; g < k.length; g++) b[k[g]] -= -1 * j.effects[f].effectNum;
        for (l = $rootScope.attributeStone[$rootScope.attributeStoneSelected], d = 0; 3 > d; d++) if (l.attributes[d].isActive) {
            if (!l.attributes[d].prefix) continue;
            for (m = l.attributes[d].prefix.split("/"), f = 0; f < m.length; f++) n = m[f],
            angular.equals(n, "none") || (b[n] -= -1 * l.attributes[d].number)
        }
        for (o = {},
        p = {},
        q = {},
        d = 0; d < c.length; d++) o[c[d]] = 0,
        p[c[d]] = 0,
        q[c[d]] = 0;
        for (d = 0; d < $rootScope.buffController.buff.length; d++) r = angular.copy($rootScope.buffController.buff[d]),
        $rootScope.buffController.activeBuff[r.id].isCheck && (r.isFinal >= 1 && (angular.forEach(r.dataBase, 
        function(a, b) {
            this[b] += Number(a)
        },
        q), 2 == r.isFinal && (r.isFinal = 0)), 0 == r.isFinal && (r.isPercent >= 1 && (angular.forEach(r.dataPercent, 
        function(a, b) {
            this[b] += Number(a)
        },
        p), 2 == r.isPercent && (r.isPercent = 0)), 0 == r.isPercent && angular.forEach(r.dataBase, 
        function(a, b) {
            this[b] += Number(a)
        },
        o)));
        $rootScope.buffController.attributeStone.percentPlus.isCheck && (s = $rootScope.buffController.attributeStone.percentPlus.buff, angular.forEach(s.dataPercent, 
        function(a, b) {
            this[b] += Number(a)
        },
        p)),
        $rootScope.buffController.attributeStone.baseMinus.isCheck && (t = $rootScope.buffController.attributeStone.baseMinus.buff, angular.forEach(t.dataBase, 
        function(a, b) {
            this[b] += Number(a)
        },
        o)),
        b.body += $rootScope.role.body + o.body,
        $rootScope.results.body = Math.floor(b.body * (1 + p.body / 100)),
        b.life += (10 * $rootScope.results.body + 4159 + o.basicLife) * (1 + p.life / 100) * (a.baseHPlus + p.basicLife / 100) + $rootScope.results.body * a.baseBodyPlus,
        $rootScope.results.life = Math.floor(b.life + o.life) + Math.floor(q.life),
        $rootScope.results.spirit = Math.floor((b.spirit + $rootScope.role.spirit + o.spirit) * (1 + p.spirit / 100)) + Math.floor(q.spirit),
        $rootScope.results.strength = Math.floor((b.strength + $rootScope.role.strength + o.strength) * (1 + p.strength / 100)) + Math.floor(q.strength),
        $rootScope.results.agility = Math.floor((b.agility + $rootScope.role.agility + o.agility) * (1 + p.agility / 100)) + Math.floor(q.agility),
        $rootScope.results.spunk = Math.floor((b.spunk + $rootScope.role.spunk + o.spunk) * (1 + p.spunk / 100)) + Math.floor(q.spunk),
        "spirit" == a.type ? ($rootScope.results.basicAttack = b.attack + a.baseAttack + .18 * $rootScope.results.spunk, $rootScope.results.basicAttack = Math.floor(($rootScope.results.basicAttack + o.basicAttack) * (1 + p.basicAttack / 100)), $rootScope.results.attack = Math.floor($rootScope.results.basicAttack * (1 + p.attack / 100) + a.baseAttackPlus * $rootScope.results.spirit + o.attack), $rootScope.results.crit = b.crit + a.baseCrit + Math.floor(a.baseCritPlus * $rootScope.results.spirit) + Math.floor(.3 * $rootScope.results.spirit), $rootScope.results.critEffect = b.critEffect + Math.floor(a.baseCritEffPlus * $rootScope.results.spirit) + Math.floor(.15 * $rootScope.results.spirit), $rootScope.results.overcome = b.overcome + a.baseOvercome + a.baseOvercomePlus * $rootScope.results.spirit + .25 * $rootScope.results.spunk) : "strength" == a.type ? ($rootScope.results.basicAttack = b.attack + a.baseAttack + .15 * $rootScope.results.strength, $rootScope.results.basicAttack = Math.floor(($rootScope.results.basicAttack + o.basicAttack) * (1 + p.basicAttack / 100)), $rootScope.results.attack = Math.floor($rootScope.results.basicAttack * (1 + p.attack / 100) + a.baseAttackPlus * $rootScope.results.strength + o.attack), $rootScope.results.crit = b.crit + a.baseCrit + Math.floor(a.baseCritPlus * $rootScope.results.strength) + Math.floor(.3 * $rootScope.results.agility), $rootScope.results.critEffect = b.critEffect + Math.floor(a.baseCritEffPlus * $rootScope.results.strength) + Math.floor(.15 * $rootScope.results.agility), $rootScope.results.overcome = b.overcome + a.baseOvercome + (a.baseOvercomePlus + .25) * $rootScope.results.strength) : "agility" == a.type ? ($rootScope.results.basicAttack = b.attack + a.baseAttack + .15 * $rootScope.results.strength, $rootScope.results.basicAttack = Math.floor(($rootScope.results.basicAttack + o.basicAttack) * (1 + p.basicAttack / 100)), $rootScope.results.attack = Math.floor($rootScope.results.basicAttack * (1 + p.attack / 100) + a.baseAttackPlus * $rootScope.results.agility + o.attack), $rootScope.results.crit = b.crit + a.baseCrit + Math.floor(a.baseCritPlus * $rootScope.results.agility) + Math.floor(.3 * $rootScope.results.agility), $rootScope.results.critEffect = b.critEffect + Math.floor((a.baseCritEffPlus + .15) * $rootScope.results.agility), $rootScope.results.overcome = b.overcome + a.baseOvercome + (a.baseOvercomePlus * $rootScope.results.agility + .25 * $rootScope.results.strength), "fenshan" == a.name && ($rootScope.results.parryBase = b.parryBase + a.baseParryBase + $rootScope.results.agility * a.baseParryBasePlus, $rootScope.results.parryBase = 100 * ($rootScope.results.parryBase / ($rootScope.results.parryBase + 1733.675)) + 3, $rootScope.results.parryBase = $rootScope.results.parryBase.toFixed(2), $rootScope.results.parryValue = b.parryValue + a.baseParryValue + $rootScope.results.agility * a.baseParryValuePlus, $rootScope.results.parryValue = $rootScope.results.parryValue.toFixed(0))) : "spunk" == a.type ? ($rootScope.results.basicAttack = b.attack + a.baseAttack + .18 * $rootScope.results.spunk, $rootScope.results.basicAttack = Math.floor(($rootScope.results.basicAttack + o.basicAttack) * (1 + p.basicAttack / 100)), $rootScope.results.attack = Math.floor($rootScope.results.basicAttack * (1 + p.attack / 100) + a.baseAttackPlus * $rootScope.results.spunk + o.attack), $rootScope.results.crit = b.crit + a.baseCrit + Math.floor(a.baseCritPlus * $rootScope.results.spunk) + Math.floor(.3 * $rootScope.results.spirit), $rootScope.results.critEffect = b.critEffect + Math.floor(a.baseCritEffPlus * $rootScope.results.spunk) + Math.floor(.15 * $rootScope.results.spirit), "tianluo" == a.name && ($rootScope.results.crit = b.crit + a.baseCrit + Math.floor(a.baseCritPlus * $rootScope.results.spunk) + Math.floor(.3 * (b.agility + $rootScope.role.agility)), $rootScope.results.critEffect = b.critEffect + Math.floor(a.baseCritEffPlus * $rootScope.results.spunk) + Math.floor(.15 * (b.agility + $rootScope.role.agility))), $rootScope.results.overcome = b.overcome + a.baseOvercome + (a.baseOvercomePlus + .25) * $rootScope.results.spunk) : "hps" == a.type ? ($rootScope.results.basicAttack = b.attack + .18 * $rootScope.results.spunk, $rootScope.results.basicAttack = Math.floor(($rootScope.results.basicAttack + o.basicAttack) * (1 + p.basicAttack / 100)), $rootScope.results.attack = Math.floor($rootScope.results.basicAttack * (1 + p.attack / 100) + o.attack), $rootScope.results.basicHeal = Math.floor((b.heal + a.baseHeal + o.basicHeal) * (1 + p.basicHeal / 100)), $rootScope.results.heal = Math.floor($rootScope.results.basicHeal * (1 + p.heal / 100) + a.baseHealPlus * $rootScope.results.spirit + o.heal), $rootScope.results.crit = b.crit + a.baseCrit + Math.floor(a.baseCritPlus * $rootScope.results.spirit) + Math.floor(.3 * $rootScope.results.spirit), $rootScope.results.critEffect = b.critEffect + Math.floor(a.baseCritEffPlus * $rootScope.results.spirit) + Math.floor(.15 * $rootScope.results.spirit)) : "t" == a.type && ($rootScope.results.dodge = Math.floor((b.dodge + a.baseDodge) * (1 + p.dodge / 100) + $rootScope.results.body * a.baseDodgePlus + o.dodge), $rootScope.results.dodge = 100 * ($rootScope.results.dodge / ($rootScope.results.dodge + 2400.175)), $rootScope.results.dodge = $rootScope.results.dodge.toFixed(2) - -1 * q.dodge.toFixed(2), $rootScope.results.parryBase = (b.parryBase + a.baseParryBase) * (1 + p.parryBase / 100) + $rootScope.results.body * a.baseParryBasePlus + o.parryBase, $rootScope.results.parryBase = 100 * ($rootScope.results.parryBase / ($rootScope.results.parryBase + 1733.675)) + 3, $rootScope.results.parryBase = $rootScope.results.parryBase.toFixed(2) - -1 * q.parryBase.toFixed(2), $rootScope.results.parryValue = (b.parryValue + a.baseParryValue) * (1 + p.parryValue / 100) + $rootScope.results.body * a.baseParryValuePlus + o.parryValue, $rootScope.results.parryValue = Math.floor($rootScope.results.parryValue) - -1 * q.parryValue, "mingzun" == a.name || "xisui" == a.name ? ($rootScope.results.basicAttack = b.attack + .18 * $rootScope.results.spunk, $rootScope.results.basicAttack = Math.floor(($rootScope.results.basicAttack + o.basicAttack) * (1 + p.basicAttack / 100)), $rootScope.results.attack = Math.floor($rootScope.results.basicAttack * (1 + p.attack / 100) + o.attack), $rootScope.results.crit = b.crit + a.baseCrit + Math.floor(.3 * $rootScope.results.spirit), $rootScope.results.critEffect = b.critEffect + Math.floor(a.baseCritEffPlus * $rootScope.results.spirit) + Math.floor(.15 * $rootScope.results.spirit), $rootScope.results.overcome = b.overcome + a.baseOvercome + .25 * $rootScope.results.spunk) : ($rootScope.results.basicAttack = b.attack + .15 * $rootScope.results.strength, $rootScope.results.basicAttack = Math.floor(($rootScope.results.basicAttack + o.basicAttack) * (1 + p.basicAttack / 100)), $rootScope.results.attack = Math.floor($rootScope.results.basicAttack * (1 + p.attack / 100) + o.attack), $rootScope.results.crit = b.crit + a.baseCrit + Math.floor(.3 * $rootScope.results.agility), $rootScope.results.critEffect = b.critEffect + Math.floor(a.baseCritEffPlus * $rootScope.results.agility) + Math.floor(.15 * $rootScope.results.spirit), $rootScope.results.overcome = b.overcome + a.baseOvercome + .25 * $rootScope.results.strength)),
        $rootScope.results.attack = Math.floor($rootScope.results.attack),
        $rootScope.results.crit = Math.floor(($rootScope.results.crit + o.crit) * (1 + p.crit / 100)),
        $rootScope.results.crit = $rootScope.results.crit / 41.43925,
        $rootScope.results.crit = $rootScope.results.crit - -1 * q.crit.toFixed(2),
        $rootScope.results.crit = $rootScope.results.crit.toFixed(2),
        $rootScope.results.critEffect = Math.floor(($rootScope.results.critEffect + o.critEffect) * (1 + p.critEffect / 100)),
        $rootScope.results.critEffect = $rootScope.results.critEffect / 15.066 + 175,
        $rootScope.results.critEffect = $rootScope.results.critEffect - -1 * q.critEffect.toFixed(2),
        $rootScope.results.critEffect = $rootScope.results.critEffect.toFixed(2),
        $rootScope.results.overcome = Math.floor(($rootScope.results.overcome + o.overcome) * (1 + p.overcome / 100)) + q.overcome,
        $rootScope.results.overcomeRate = $rootScope.results.overcome / 36.16925,
        $rootScope.results.overcomeRate = $rootScope.results.overcomeRate.toFixed(0),
        $rootScope.results.hit = Math.floor((b.hit + a.baseHit + o.hit) * (1 + p.hit / 100)),
        $rootScope.results.hit = $rootScope.results.hit / 34.24725 + 90,
        $rootScope.results.hit = $rootScope.results.hit - -1 * q.hit.toFixed(2),
        $rootScope.results.hit = $rootScope.results.hit.toFixed(2),
        $rootScope.results.strain = Math.floor((b.strain + o.strain) * (1 + p.strain / 100)),
        $rootScope.results.strain = $rootScope.results.strain / 25.6835,
        $rootScope.results.strain = $rootScope.results.strain.toFixed(2) - -1 * q.strain.toFixed(2),
        $rootScope.results.acceLevel = b.acce,
        $rootScope.results.acce = b.acce / 47.17425,
        $rootScope.results.acce = $rootScope.results.acce.toFixed(2),
        $rootScope.results.magicShield = Math.floor((b.basicMagicShield + b.magicShield + a.baseMagicShield) * (1 + p.magicShield / 100) + $rootScope.results.body * a.baseMagicShieldPlus + o.magicShield),
        $rootScope.results.magicShield = 100 * ($rootScope.results.magicShield / ($rootScope.results.magicShield + 1846.05)),
        $rootScope.results.magicShield = $rootScope.results.magicShield.toFixed(2) - -1 * q.magicShield.toFixed(2),
        $rootScope.results.physicsShield = Math.floor((b.basicPhysicsShield + b.physicsShield + a.basePhysicsShield) * (1 + p.physicsShield / 100) + $rootScope.results.body * a.basePhysicsShieldPlus + o.physicsShield),
        $rootScope.results.physicsShield = 100 * ($rootScope.results.physicsShield / ($rootScope.results.physicsShield + 1846.05)),
        $rootScope.results.physicsShield = $rootScope.results.physicsShield.toFixed(2) - -1 * q.physicsShield.toFixed(2),
        $rootScope.results.toughness = Math.floor((b.toughness + o.toughness) * (1 + p.toughness / 100)),
        $rootScope.results.toughness = 100 * ($rootScope.results.toughness / ($rootScope.results.toughness + 4143.92)),
        $rootScope.results.toughness = $rootScope.results.toughness.toFixed(2) - -1 * q.toughness.toFixed(2),
        $rootScope.results.huajing = Math.floor((b.huajing + 244 + o.huajing) * (1 + p.huajing / 100)),
        $rootScope.results.huajing = 100 * ($rootScope.results.huajing / ($rootScope.results.huajing + 732.375)),
        $rootScope.results.huajing = $rootScope.results.huajing.toFixed(2) - -1 * q.huajing.toFixed(2),
        $rootScope.results.score = Math.floor(b.score)

    }
}]),
app.controller("AppCtrl", ["$scope", "$http", "toastr", "$modal", "$rootScope", "$httpParamSerializerJQLike", "hotkeys", 
function(a, b, c, d, e, f, g) {
    a.isLogin = !1,
    a.user = {
        mail: "",
        password: "",
        name: "",
        isLoading: !1
    },
    b.post("../../api/loginCertificate.php").success(function(b) {
        b.err || !b.isLogin ? console.log("使用cookies登录失败") : (a.isLogin = !0, a.user.name = b.name, console.log("使用cookies登录成功"), e.equipListfilter.range = b.preference.quality, e.embedLevel = b.preference.magicStoneLevel, e.strengthenLevel = b.preference.strengthen)
    }).error(function(a) {
        console.log("使用cookies过程中连接失败")
    }),
    a.checkUpdate = function(a) {
        b.get("../../api/checkVersion.php").success(function(b) {
            if (Number(b.version) > Number(localStorage.edition) || !localStorage.edition || a) {
                e.updateDesc = b.desc;
                var c = d.open({
                    animation: !0,
                    templateUrl: "../../templates/updateDesc.html",
                    controller: "ModalInstanceCtrl"
                })
            }
            try {
                localStorage.edition = b.version
            } catch(f) {}
        })
    },
    a.checkUpdate(),
    a.login = function() {
        a.user.isLoading = !0,
        b({
            url: "../../api/loginCertificate.php",
            method: "POST",
            data: f({
                email: a.user.mail,
                pswd: a.user.password
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).success(function(b) {
            b.err || !b.isLogin ? c.error("登录失败, " + b.errReason) : (a.isLogin = !0, a.user.name = b.name, a.user.isLoading = !1, e.equipListfilter.range = b.preference.quality, e.embedLevel = b.preference.magicStoneLevel, e.strengthenLevel = b.preference.strengthen, e.saveList.isLoad = !1, a.$broadcast("saveCase"))
        }).error(function(a) {
            c.error("连接失败")
        })
    },
    a.logout = function() {
        b.get("../../api/logout.php"),
        a.isLogin = !1,
        a.user = {
            mail: "",
            password: "",
            name: ""
        }
    },
    a.forgetPass = function() {
        var a = d.open({
            animation: !0,
            templateUrl: "../../templates/reset.html",
            controller: "ModalInstanceCtrl"
        });
        a.result.then(function(a) {
            b({
                url: "../../api/sendMail.php",
                method: "POST",
                data: f({
                    mail: a
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).success(function(a) {
                "noreg" == a ? c.warning("该邮箱没有注册") : c.success(a)
            })
        },
        function() {
            console.log("Reset Password Cancelled")
        })
    },
    a.loginModal = function() {
        var g = d.open({
            animation: a.animationsEnabled,
            templateUrl: "../../templates/login.html",
            controller: "LoginModalController",
            size: "sm"
        });
        g.result.then(function(d) {
            b({
                url: "../../api/loginCertificate.php",
                method: "POST",
                data: f({
                    email: d.mail,
                    pswd: d.password
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).success(function(b) {
                b.err || !b.isLogin ? c.error("登录失败, " + b.errReason) : (a.isLogin = !0, a.user.name = b.name, a.user.isLoading = !1, e.equipListfilter.range = b.preference.quality, e.embedLevel = b.preference.magicStoneLevel, e.strengthenLevel = b.preference.strengthen)
            }).error(function(a) {
                c.error("登录失败，网络连接不正常")
            })
        },
        function() {
            console.log("Login Cancelled")
        })
    }
}]),
app.controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "$sce", 
function(a, b, c) {
    a.reset = function(a) {
        b.close(a)
    },
    a.close = function() {
        b.dismiss()
    },
    a.getUpdateDesc = function(a) {
        return c.trustAsHtml(a)
    }
}]),
app.controller("LoginModalController", ["$scope", "$modalInstance", 
function(a, b) {
    a.login = function(a) {
        b.close(a)
    },
    a.close = function() {
        b.dismiss()
    }
}]),
Equip = {
    createNew: function() {
        var a = {};
        return a.data = {},
        a.type = "",
        a.typeParse = "",
        a.descList = {},
        a.jinglian = {},
        a.enhance = {},
        a.holes = {
            number: 0,
            holeInfo: []
        },
        a.newHoles = {
            holeInfo: []
        },
        a.embed = {
            score: [],
            totalScore: 0,
            stone: []
        },
        a.xilian = {
            level: 0,
            ratio: 40,
            num: {}
        },
        a.recommendSchool = [],
        a.getData = function(b) {
            return b in a.data ? a.data[b] : 0
        },
        a.setData = function(b, c) {
            a.data[b] = c
        },
        a.getDesc = function(b) {
            return b in a.descList ? a.descList[b] : 0
        },
        a.setDesc = function(b, c) {
            a.descList[b] = c
        },
        a.getEnhance = function(b) {
            return b in a.enhance ? a.enhance[b] : 0
        },
        a.setEnhance = function(b, c) {
            a.enhance[b] = c
        },
        a.getHoleNum = function(b) {
            return b < a.holes.number ? {
                prefix: a.embed.stone[b].attrPrefix,
                attr: a.embed.stone[b].attr
            }: {
                prefix: "none",
                attr: 0
            }
        },
        a.getXilian = function(b) {
            return b in a.xilian.num ? a.xilian.num[b] : 0
        },
        a.setStrengthen = function(b) {
            var c,
            d;
            a.jinglian = {},
            c = ["quality", "score", "body", "spirit", "strength", "agility", "spunk", "physicsShield", "magicShield", "dodge", "parryBase", "parryValue", "toughness", "attack", "heal", "crit", "critEffect", "overcome", "acce", "hit", "strain", "huajing", "threat"],
            d = [0, .005, .013, .024, .038, .055, .075, .098, .124],
            a.jinglian.strengthen = b,
            angular.forEach(a.data, 
            function(e, f) {
                var g,
                h;
                $.inArray(f, c) >= 0 && (g = e, f in a.xilian.num && (g -= -1 * a.xilian.num[f]), h = g * d[b], h = "threat" === f ? h.toFixed(1) : h.toFixed(0), a.jinglian[f] = h)
            }),
            angular.forEach(a.xilian.num, 
            function(c, e) {
                var f,
                g;
                c > 0 && (f = c, g = f * d[b], g = g.toFixed(0), a.jinglian[e] = g)
            })
        },
        a.getJinglian = function(b) {
            return b in a.jinglian ? a.jinglian[b] : 0
        },
        a.getRecommend = function() {
            var c,
            b = "";
            for (c = 0; c < a.recommendSchool.length - 1; c++) b += a.recommendSchool[c] + "、";
            return b += a.recommendSchool[c]
        },
        a.analysisHole = function() {
            var b,
            c,
            d,
            e,
            f,
            g,
            h;
            for (a.data.xiangqian = a.data.xiangqian ? a.data.xiangqian: "0", b = a.data.xiangqian, c = b.substring(0, 1), a.holes.number = c, d = 0; c > d; d++) e = b.substring(3 * d + 1, 3 * d + 4),
            f = {},
            f.typeId = e.substring(0, 1),
            f.attrId = e.substring(1, 3),
            f.avaStone = stoneTypeMap[f.typeId],
            f.attrDesc = stoneAttrMap[Number(f.attrId)].desc,
            f.attrPrefix = stoneAttrMap[Number(f.attrId)].prefix,
            a.newHoles.holeInfo.push(f),
            g = angular.copy(f),
            g.changed = !1,
            a.holes.holeInfo.push(g),
            h = {
                typeId: "-1",
                level: "6",
                attrPrefix: g.attrPrefix,
                attr: 0,
                score: 0,
                active: !1
            },
            a.embed.stone.push(h),
            a.embed.score[d] = 0
        },
        a
    }
},
Buff = {
    createNew: function(a) {
        var b = {},
        c = ["Qixue", "OrdinaryBuff", "InfightBuff", "Food"];
        return b.id = a.id,
        b.dataPercent = a.dataP,
        b.dataBase = a.dataB,
        b.icon = a.iconId,
        b.name = a.name,
        b.desc = a.desc,
        b.type = c[a.type],
        b.isPercent = a.isPercent,
        b.isFinal = a.isFinal,
        b.conflict = a.conflict,
        b.getData = function(a) {
            return a in b.data ? b.data[a] : 0
        },
        b.setData = function(a, c) {
            b.data[a] = c
        },
        b
    }
},
Collection = {
    createNew: function(a) {
        var c,
        b = {};
        for (b.setId = a.texiao.id, b.components = a.texiao.components, c = 0; c < b.components.length; c++) b.components[c].active = b.components[c].positionId == a.type;
        return b.name = a.texiao.name,
        b.effects = a.texiao.effects,
        b.activeNum = 0,
        b.allNum = c,
        b.takeOn = function(a) {
            var c,
            d;
            if (a.data.texiao.id == b.setId) for (c = a.data.type, "2" == c && (c = "8_ring_1" == a.type ? "2": "3"), d = 0; d < b.components.length; d++) b.components[d].positionId == c && (b.activeNum++, b.components[d].active = !0)
        },
        b.takeOff = function(a) {
            for (var c = 0; c < b.components.length; c++) b.components[c].positionId == a && (b.activeNum--, b.components[c].active = !1);
            return b.activeNum
        },
        b
    }
},
app.factory("CollectionController", 
function() {
    var a = {};
    return a.setsList = [],
    a.collectionsList = [],
    a.posSetMap = {
        "0_hat": -1,
        "1_jacket": -1,
        "2_belt": -1,
        "3_wrist": -1,
        "4_bottoms": -1,
        "5_shoes": -1,
        "6_necklace": -1,
        "7_pendant": -1,
        "8_ring_1": -1,
        "9_ring_2": -1,
        a_secondaryWeapon: -1,
        b_primaryWeapon: -1
    },
    a.registerSet = function(b) {
        var c,
        d;
        for (c = 0; c < a.setsList.length; c++) if (a.setsList[c] == b.setId) return c;
        return a.setsList.push(b.setId),
        d = a.collectionsList.push(b),
        d - 1
    },
    a.deleteSet = function(b) {
        var d,
        e,
        c = -1;
        for (d = 0; d < a.setsList.length; d++) a.setsList[d] == b && (a.setsList.splice(d, 1), a.collectionsList.splice(d, 1), c = d);
        for (e = 0; 12 > e; e++) a.posSetMap[positions[e]] == c && (a.posSetMap[positions[e]] = -1)
    },
    a.getCollection = function(b) {
        return a.collectionsList[b]
    },
    a.getCollectionIndex = function(b) {
        for (var c = 0; c < a.setsList.length; c++) if (a.setsList[c] == b) return c
    },
    a
}),
app.controller("InitCtrl", ["$scope", "$rootScope", "$location", "CollectionController", 
function(a, b, c, d) {
    var e,
    f,
    g;
    for (b.equips = {},
    b.equipLists = {},
    b.enhanceLists = {},
    b.isModalOpen = !1, b.equipListfilter = {},
    b.equipListfilter.attr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], b.equipListfilter.range = [750, 1100], b.embedLevel = 6, b.strengthenLevel = 6, e = 0; 4 > e && 1 != b.menpai.tixingOption[e]; e++);
    for (b.role = {
        tixing: tixingOptions[e].name,
        body: tixingOptions[e].body,
        spunk: tixingOptions[e].spunk,
        spirit: tixingOptions[e].spirit,
        strength: tixingOptions[e].strength,
        agility: tixingOptions[e].agility
    },
    "cangjian" == b.menpai.name && positions.push("c_primaryWeapon"), ("agility" == b.menpai.type || "strength" == b.menpai.type) && (attributeMap.attack = "physicsAttack"), a.typeParseMap = typeParseMap, e = 0; e < positions.length; e++) b.equips[positions[e]] = Equip.createNew(),
    b.equips[positions[e]].type = positions[e],
    b.equips[positions[e]].typeParse = typeParseMap[positions[e]],
    b.equipLists[positions[e]] = {},
    b.equipLists[positions[e]].type = positions[e],
    b.equipLists[positions[e]].typeParse = typeParseMap[positions[e]],
    b.equipLists[positions[e]].isCached = !1,
    b.equipLists[positions[e]].setAs = {
        name: "选择装备"
    },
    b.enhanceLists[positions[e]] = {},
    b.enhanceLists[positions[e]].type = positions[e],
    b.enhanceLists[positions[e]].typeParse = typeParseMap[positions[e]],
    b.enhanceLists[positions[e]].isCached = !1,
    b.enhanceLists[positions[e]].setAs = {
        id: "0",
        name: "选择附魔"
    };
    b.xilianColorList = ["", "#99D198", "#97D195", "#7DE5CD", "#80E7D0", "#77A7EC", "#6890C8", "#C970D7", "#C570D4", "#BF8650"],
    b.xilianLevelDesc = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    b.focus = "0_hat",
    b.setController = d,
    f = {
        name: "",
        score: 0,
        level: 0,
        attributes: [{
            type: "jing",
            isFirstChild: !0,
            desc: "",
            prefix: "none",
            number: 0,
            isActive: !1,
            needMagicStoneType: "-1",
            needMagicStoneNumber: 0
        },
        {
            desc: "",
            isFirstChild: !1,
            prefix: "none",
            number: 0,
            isActive: !1,
            needMagicStoneType: "-1",
            needMagicStoneNumber: 0
        },
        {
            desc: "",
            isFirstChild: !1,
            prefix: "none",
            number: 0,
            isActive: !1,
            needMagicStoneType: "-1",
            needMagicStoneNumber: 0
        }]
    },
    b.attributeStone = [angular.copy(f), angular.copy(f)],
    b.attributeStoneSelected = 0,
    b.zhongjian = !1,
    g = [{
        isLoad: !1,
        attr: [],
        setAs: "选择第一属性",
        isSet: !1
    },
    {
        isLoad: !1,
        attr: [],
        setAs: "选择第二属性",
        isSet: !1
    },
    {
        isLoad: !1,
        attr: [],
        setAs: "选择第三属性",
        isSet: !1
    },
    {
        isLoad: !1,
        attr: [],
        setAs: "选择等级",
        isSet: !1
    }],
    b.attributeStoneLists = [angular.copy(g), angular.copy(g)],
    b.saveList = {
        isLoad: !1,
        list: []
    },
    b.buffController = {},
    b.buffController.buff = [],
    b.buffController.activeBuff = {},
    b.buffController.attributeStone = {
        percentPlus: {},
        baseMinus: {}
    },
    b.buffController.checkActive = function(a) {
        return b.buffController.activeBuff[a].isCheck
    },
    b.buffController.registerBuff = function(a) {
        var c = Buff.createNew(a),
        d = b.buffController.buff.push(c) - 1;
        b.buffController.activeBuff[c.id] = {
            isCheck: !1,
            index: d
        }
    },
    b.results = {
        score: 0,
        body: 0,
        spirit: 0,
        strength: 0,
        agility: 0,
        spunk: 0,
        physicsShield: 0,
        magicShield: 0,
        dodge: 0,
        parryBase: 0,
        parryValue: 0,
        toughness: 0,
        basicAttack: 0,
        attack: 0,
        heal: 0,
        crit: 0,
        critEffect: 0,
        overcome: 0,
        acce: 0,
        hit: 0,
        strain: 0,
        huajing: 0,
        threat: 0,
        life: 0,
        acceLevel: 0
    }
}]),
app.controller("PeizhuangCtrl", ["$scope", "$rootScope", "$location", "Utils", "toastr", "$http", "$modal", "$window", "$sce", "hotkeys", "$modalStack", 
function(a, b, c, d, e, f, g, h, i, j, k) {
    var l,
    m,
    n;
    b.positionIconList = [{
        type: "0_hat",
        icon: "../../images/pl_9.png"
    },
    {
        type: "1_jacket",
        icon: "../../images/pl_8.png"
    },
    {
        type: "2_belt",
        icon: "../../images/pl_10.png"
    },
    {
        type: "3_wrist",
        icon: "../../images/pl_6.png"
    },
    {
        type: "b_primaryWeapon",
        icon: "../../images/pl_11.png"
    },
    {
        type: "a_secondaryWeapon",
        icon: "../../images/pl_4.png"
    },
    {
        type: "4_bottoms",
        icon: "../../images/pl_7.png"
    },
    {
        type: "5_shoes",
        icon: "../../images/pl_5.png"
    },
    {
        type: "6_necklace",
        icon: "../../images/pl_0.png"
    },
    {
        type: "7_pendant",
        icon: "../../images/pl_1.png"
    },
    {
        type: "8_ring_1",
        icon: "../../images/pl_2.png"
    },
    {
        type: "9_ring_2",
        icon: "../../images/pl_2.png"
    }],
    a.toMobile = function() {
        h.location.href = "../../m/" + b.menpai.name + "/"
    },
    a.allInfo = ["texiao", "xiangqian"],
    a.basicInfoWithoutJL = ["basicPhysicsShield", "basicMagicShield"],
    a.basicInfoWithJL = ["body", "spirit", "spunk", "strength", "agility"],
    a.plusInfo = ["physicsShield", "magicShield", "dodge", "parryBase", "parryValue", "attack", "heal", "crit", "critEffect", "overcome", "toughness", "acce", "hit", "strain", "huajing", "threat"],
    a.$on("setEquip", 
    function(b, c) {
        a.getEquip(c)
    }),
    a.$on("setEnhance", 
    function(b, c) {
        a.getEnhance(c)
    }),
    b.menpai = {
        name: "none",
        type: "none",
        baseAttack: 0,
        baseHeal: 0,
        baseHit: 0,
        baseCrit: 0,
        baseOvercome: 0,
        baseAttackPlus: 0,
        baseHealPlus: 0,
        baseCritPlus: 0,
        baseCritEffPlus: 0,
        baseOvercomePlus: 0,
        baseHPlus: 0,
        baseBodyPlus: 0,
        basePhysicsShield: 0,
        baseMagicShield: 0,
        basePhysicsShieldPlus: 0,
        baseMagicShieldPlus: 0,
        baseDodge: 0,
        baseDodgePlus: 0,
        baseParryBasePlus: 0,
        baseParryValuePlus: 0,
        baseParryBase: 0,
        baseParryValue: 0,
        tixingOption: [0, 0, 0, 0]
    },
    a.saveNewCase = function(c) {
        var d = !1,
        e = g.open({
            animation: !0,
            templateUrl: "../../templates/setNewCase.html",
            controller: "SetCaseNameController",
            size: "sm"
        });
        e.result.then(function(e) {
            var f = e;
            f && "" !== f ? (d = !0, a.saveCase(0, f, c), b.saveList.isLoad = !1) : a.saveNewCase(c)
        },
        function() {
            console.log("Save new case cancelled")
        })
    },
    a.saveCaseConfirm = function(b, c, d) {
        if (0 != b) {
            var e = g.open({
                animation: !0,
                templateUrl: "../../templates/saveConfirm.html",
                controller: "SaveCaseConfirmController",
                size: "sm",
                resolve: {
                    name: function() {
                        return c
                    }
                }
            });
            e.result.then(function() {
                a.saveCase(b, c)
            },
            function() {
                console.log("Save case cancelled")
            })
        }
    },
    a.getSaveObj = function(a, c, d) {
        var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        e = "P_ID";
        for (e = 0 == d ? "P_ID": "name", f = ["成男", "成女", "萝莉", "正太"], g = 0; 4 > g && b.role.tixing != f[g]; g++);
        for (h = ["dodge", "parryBase", "crit", "overcome", "acce", "hit", "strain", "toughness"], i = ["闪避", "招架", "会心", "破防", "加速", "命中", "无双", "御劲"], j = {
            saveid: a,
            name: c,
            equips: [],
            attributeStone: [],
            tixing: 4 == g ? 0: g,
            menpai: b.menpai.name,
            result: b.results
        },
        j.buff = [], g = 0; g < b.buffController.buff.length; g++) k = b.buffController.buff[g],
        b.buffController.activeBuff[k.id].isCheck && (1 == d ? (l = {
            id: k.id
        },
        l.type = k.type, l.icon = k.icon, l.name = k.name) : l = k.id, j.buff.push(l));
        for (g = 0; g < positions.length; g++) {
            if (m = {
                id: b.equips[positions[g]].getData(e),
                strengthen: b.equips[positions[g]].getJinglian("strengthen"),
                enhance: b.equips[positions[g]].getEnhance(e),
                embed: [],
                holes: [],
                magicChange: {
                    level: b.equips[positions[g]].xilian.level,
                    origin: b.equips[positions[g]].xilian.origin ? b.equips[positions[g]].xilian.origin.key: 0,
                    target: b.equips[positions[g]].xilian.target ? b.equips[positions[g]].xilian.target.key: 0,
                    ratio: b.equips[positions[g]].xilian.ratio
                }
            },
            1 == d) {
                for (m.filter = "", b.equips[positions[g]].getData("physicsShield") > b.equips[positions[g]].getData("magicShield") ? m.filter += "外防,": b.equips[positions[g]].getData("physicsShield") < b.equips[positions[g]].getData("magicShield") && (m.filter += "内防,"), b.equips[positions[g]].getData("heal") > 0 && 0 == b.equips[positions[g]].getData("crit") && 0 == b.equips[positions[g]].getData("acce") && (m.filter = "治疗,"), n = 0; n < h.length; n++) b.equips[positions[g]].getData(h[n]) > 0 && (m.filter += i[n] + ",");
                m.quality = b.equips[positions[g]].getData("quality")
            }
            for (n = 0; n < b.equips[positions[g]].holes.number; n++) o = {
                typeId: b.equips[positions[g]].embed.stone[n].typeId,
                level: b.equips[positions[g]].embed.stone[n].level
            },
            m.embed.push(o),
            1 == d ? (p = b.equips[positions[g]].newHoles.holeInfo[n], p.changed && (q = {
                id: n,
                oriAttr: b.equips[positions[g]].holes.holeInfo[n].attrPrefix,
                tarAttr: p.attrPrefix,
                oriType: b.equips[positions[g]].holes.holeInfo[n].typeId,
                tarType: p.typeId
            },
            m.holes.push(q))) : (p = {
                typeId: b.equips[positions[g]].newHoles.holeInfo[n].typeId,
                attrId: b.equips[positions[g]].newHoles.holeInfo[n].attrId
            },
            m.holes.push(p));
            j.equips.push(m)
        }
        for (g = 0; 2 > g; g++) {
            for (r = [], n = 0; 4 > n; n++) r.push(b.attributeStoneLists[g][n].isSet ? b.attributeStoneLists[g][n].setAs: 0);
            j.attributeStone.push(r)
        }
        return j
    },
    a.saveCase = function(b, c) {
        var d = a.getSaveObj(b, c, 0);
        f.post("../../api/save.php", d).success(function(c) {
            c.err ? e.error(c.errReason) : (e.success("保存方案成功"), 0 == b && a.$broadcast("saveCase"))
        }).error(function(a) {
            e.error("保存方案失败，请重试")
        })
    },
    a.loadCase = function(c) {
        var g = angular.copy(b.focus);
        f.get("../../api/load.php?id=" + c).success(function(c) {
            var f,
            h,
            i,
            j,
            k;
            if (c.err) e.error(c.errReason);
            else {
                for (b.attributeStone = [d.transDBStoneToJsObj(c.attributestone[0]), d.transDBStoneToJsObj(c.attributestone[1])], f = 0; 2 > f; f++) for (h = 0; 4 > h; h++) b.attributeStoneLists[f][h].isSet = 3 == h ? b.attributeStoneLists[f][2].isSet: null != c.attributestone[f].attr[h].attribute,
                b.attributeStoneLists[f][h].setAs = 3 == h ? c.attributestone[f].name: c.attributestone[f].attr[h].attribute,
                0 == f && a.$broadcast("setAttributeStone", h);
                for (i = [{
                    name: "成男",
                    body: 33,
                    spunk: 32,
                    spirit: 33,
                    strength: 32,
                    agility: 33
                },
                {
                    name: "成女",
                    body: 33,
                    spunk: 32,
                    spirit: 33,
                    strength: 32,
                    agility: 33
                },
                {
                    name: "萝莉",
                    body: 33,
                    spunk: 32,
                    spirit: 33,
                    strength: 32,
                    agility: 33
                },
                {
                    name: "正太",
                    body: 33,
                    spunk: 32,
                    spirit: 33,
                    strength: 32,
                    agility: 33
                }], b.role = i[parseInt(c.tixing)], a.$broadcast("setTixing", b.role), f = 0; f < positions.length; f++) for (b.focus = positions[f], b.equipLists[b.focus].setAs.name = c.equips[b.focus].equip.name, b.enhanceLists[b.focus].setAs.id = c.equips[b.focus].enhance.P_ID, a.setEquipByObj(c.equips[b.focus].equip, b.focus), b.equips[b.focus].xilian.level = c.equips[b.focus].xilian.level, b.equips[b.focus].xilian.ratio = c.equips[b.focus].xilian.ratio, j = d.xilian(c.equips[b.focus].xilian.origin, c.equips[b.focus].xilian.target, c.equips[b.focus].xilian.level, c.equips[b.focus].xilian.ratio), b.equips[b.focus].setStrengthen(c.equips[b.focus].strengthen), b.equips[b.focus].enhance = {},
                angular.forEach(c.equips[b.focus].enhance, 
                function(a, b) {
                    "0" != a && 0 != a && this.setEnhance(b, a)
                },
                b.equips[b.focus]), h = 0; h < b.equips[b.focus].holes.number; h++) d.changeColor(h, c.equips[b.focus].cuilianColour[h]),
                d.changeAttr(h, c.equips[b.focus].cuilianAttr[h]),
                k = "-1" == c.equips[b.focus].holeIn[h] ? {
                    img: "-1-6",
                    level: 6,
                    type: -1
                }: stones[parseInt(c.equips[b.focus].holeLevel[h]) + 1][c.equips[b.focus].holeIn[h]],
                d.onDrop(k, h);
                for (a.navSelect(g), angular.forEach(b.buffController.activeBuff, 
                function(a, c) {
                    a.isCheck = !1,
                    b.buffController.buff[a.index].isCheck = !1
                }), f = 0; f < c.buff.length; f++)"" != c.buff[f] && (b.buffController.activeBuff[c.buff[f]].isCheck = !0, b.buffController.buff[b.buffController.activeBuff[c.buff[f]].index].isCheck = !0);
                a.$broadcast("initBuff")
            }
        }).error(function() {
            e.error("载入方案失败,请重试")
        })
    },
    a.setEquipByObj = function(c, e) {
        var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p;
        if (b.equips[e].data.texiao && "Collection" == b.equips[e].data.texiao.type && (f = b.equips[e].data.texiao.id, g = b.setController.getCollectionIndex(f), h = b.setController.collectionsList[g].takeOff(b.equips[e].data.type), b.setController.posSetMap[e] = -1, 0 == h && b.setController.deleteSet(f)), !("strengthen" in c) || c.strengthen <= 0) {
            for (b.equips[e] = Equip.createNew(), i = 0; i < b.positionIconList.length; i++) if (b.positionIconList[i].type == e) {
                b.positionIconList[i].icon = positionIconList[e].icon;
                break
            }
            return b.equipLists[e].setAs = {
                name: "选择装备"
            },
            b.enhanceLists[e].setAs = {
                id: "0",
                name: "选择附魔"
            },
            j = "0x" + e.split("_")[0],
            j -= 0,
            b.equips[e].type = positions[j],
            b.equips[e].typeParse = typeParseMap[positions[j]],
            void 0
        }
        k = c.xinfatype,
        l = analysisPre(k),
        m = angular.copy(b.equips[e].enhance),
        b.equips[e] = Equip.createNew(),
        b.equips[e].enhance = m,
        j = "0x" + e.split("_")[0],
        j -= 0,
        b.equips[e].type = positions[j],
        b.equips[e].typeParse = typeParseMap[positions[j]],
        preDescAvaList["attack"] = l[0] + "攻击提高",
        preDescAvaList["heal"] = l[0] + "治疗成效提高",
        preDescAvaList["crit"] = l[1] + "会心等级提高",
        preDescAvaList["critEffect"] = l[1] + "会心效果提高",
        preDescAvaList["overcome"] = l[0] + "破防等级提高",
        preDescAvaList["hit"] = l[1] + "命中等级提高",
        angular.forEach(c, 
        function(a, b) { ("0" !== a || "type" == b) && this.setData(b, a),
            b in preDescAvaList && this.setDesc(b, preDescAvaList[b])
        },
        b.equips[e]);
        for (i = 0; i < b.positionIconList.length; i++) if (b.positionIconList[i].type == e) {
            b.positionIconList[i].icon = "https://www.j3pz.com/icons/" + b.equips[e].data.iconID + ".png";
            break
        }
        for (b.equips[e].analysisHole(), b.equips[e].recommendSchool = l[2], n = b.equips[e].getData("strengthen") < b.strengthenLevel ? b.equips[e].getData("strengthen") : b.strengthenLevel, 6 == b.strengthenLevel && b.equips[e].getData("strengthen") > 6 && (n = b.equips[e].getData("strengthen")), b.equips[e].setStrengthen(n), i = 0; i < b.equips[e].holes.number; i++) b.equips[e].embed.stone[i].typeId < 0 && (o = {
            img: "0-6",
            level: b.embedLevel,
            type: 0
        },
        d.onDrop(o, i));
        b.equips[e].data.texiao && "Collection" == b.equips[e].data.texiao.type && (p = Collection.createNew(b.equips[e].data), g = b.setController.registerSet(p), b.setController.collectionsList[g].takeOn(b.equips[e]), b.setController.posSetMap[e] = g),
        a.$broadcast("openEnhance"),
        a.$broadcast("openXilian"),
        a.$broadcast("openEmbed")
    },
    a.getEquip = function(c) {
        if (0 == c) {
            var d = Equip.createNew();
            return a.setEquipByObj(d, b.focus),
            void 0
        }
        f.get("../../api/getEquip.php?q=" + c).success(function(c) {
            c.err ? e.error("载入装备失败，" + c.errReason) : a.setEquipByObj(c, b.focus)
        }).error(function() {
            e.error("载入装备失败,请重试")
        })
    },
    a.getEnhance = function(a) {
        return 0 == a ? (b.equips[b.focus].enhance = {},
        void 0) : (f.get("../../api/getEnhance.php?q=" + a).success(function(a) {
            a.err ? e.error("载入附魔失败，" + a.errReason) : (b.equips[b.focus].enhance = {},
            angular.forEach(a, 
            function(a, b) {
                "0" != a && 0 != a && this.setEnhance(b, a)
            },
            b.equips[b.focus]))
        }).error(function() {
            e.error("载入附魔失败")
        }), void 0)
    },
    a.navSelect = function(c) {
        b.focus = c,
        a.$broadcast("openEquipSelection"),
        a.$broadcast("openEnhance"),
        a.$broadcast("openXilian"),
        a.$broadcast("openEmbed")
    },
    a.getBuffList = function() {
        f.get("../../api/getBuffList.php?menpai=" + b.menpai.name).success(function(c) {
            if (b.buffController.buff = [], c.err) e.error(c.errReason);
            else {
                for (var d = 0; d < c.length; d++) b.buffController.registerBuff(c[d]);
                a.$broadcast("initBuff")
            }
        })
    },
    a.casePreview = function() {
        var b = g.open({
            animation: !0,
            templateUrl: "../../templates/casePreview.html",
            controller: "CasePreviewController",
            size: "lg",
            resolve: {
                toSave: function() {
                    return a.getSaveObj(0, 0, 1)
                }
            }
        });
        b.result.then(function() {
            console.log("Finish Share")
        },
        function() {
            console.log("Share Case cancelled")
        })
    },
    a.equipPreview = function(a) {
        b.hoverType = a,
        b.hoverEquip = b.equips[a]
    },
    b.$watch("equips", d.calculate, !0),
    b.$watch("role", d.calculate, !0),
    b.$watch("setController", d.calculate, !0),
    b.$watch("buffController", d.calculate, !0),
    b.$watch("attributeStone", 
    function() {
        d.attributeStoneActivation(),
        d.calculate()
    },
    !0),
    b.$watch("attributeStoneSelected", d.calculate),
    l = c.absUrl(),
    m = l.split("#"),
    n = m[0].split("/"),
    angular.forEach(menpaiList[n[n.length - 2]], 
    function(a, c) {
        b.menpai[c] = a
    }),
    a.getBuffList(),
    angular.element(document).ready(function() {
        m[1] && a.loadCase(m[1].split("/")[1])
    }),
    j.add({
        combo: "q",
        description: "切换到帽子",
        callback: function() {
            a.navSelect("0_hat")
        }
    }),
    j.add({
        combo: "w",
        description: "切换到上衣",
        callback: function() {
            a.navSelect("1_jacket")
        }
    }),
    j.add({
        combo: "e",
        description: "切换到腰带",
        callback: function() {
            a.navSelect("2_belt")
        }
    }),
    j.add({
        combo: "r",
        description: "切换到护腕",
        callback: function() {
            a.navSelect("3_wrist")
        }
    }),
    j.add({
        combo: "a",
        description: "切换到下装",
        callback: function() {
            a.navSelect("4_bottoms")
        }
    }),
    j.add({
        combo: "s",
        description: "切换到鞋子",
        callback: function() {
            a.navSelect("5_shoes")
        }
    }),
    j.add({
        combo: "d",
        description: "切换到项链",
        callback: function() {
            a.navSelect("6_necklace")
        }
    }),
    j.add({
        combo: "f",
        description: "切换到腰坠",
        callback: function() {
            a.navSelect("7_pendant")
        }
    }),
    j.add({
        combo: "g",
        description: "切换到戒指 1",
        callback: function() {
            a.navSelect("8_ring_1")
        }
    }),
    j.add({
        combo: "h",
        description: "切换到戒指 2",
        callback: function() {
            a.navSelect("9_ring_2")
        }
    }),
    j.add({
        combo: "y",
        description: "切换到暗器",
        callback: function() {
            a.navSelect("a_secondaryWeapon")
        }
    }),
    j.add({
        combo: "t",
        description: "切换到武器",
        callback: function() {
            b.zhongjian ? a.navSelect("c_primaryWeapon") : a.navSelect("b_primaryWeapon")
        }
    }),
    j.add({
        combo: "p",
        description: "查看装备总览",
        callback: function() {
            k.getTop() ? k.dismissAll() : a.casePreview()
        }
    }),
    j.add({
        combo: "shift+f",
        description: "搜索其他装备",
        callback: function() {
            k.getTop() ? k.dismissAll() : a.$broadcast("searchEquip")
        }
    }),
    j.add({
        combo: "shift+c",
        description: "查看所有属性",
        callback: function() {
            if (k.getTop()) return k.dismissAll(),
            void 0;
            var a = g.open({
                animation: !0,
                templateUrl: "../../templates/allResults.html",
                controller: "ResultsShowController",
                size: "lg",
                resolve: {
                    result: function() {
                        return b.results
                    }
                }
            });
            a.result.then(function() {
                console.log("Finish Share")
            },
            function() {
                console.log("Share Case cancelled")
            })
        }
    })
}]),
app.controller("CasePreviewController", ["$scope", "$http", "$modalInstance", "toSave", "toastr", 
function(a, b, c, d, e) {
    a.toSave = d,
    a.imgUrl = "",
    a.loaded = !1,
    b.post("../../api/getImage.php", a.toSave).success(function(b) {
        b.err ? e.error(b.errReason) : (a.imgUrl = b.url, a.loaded = !0)
    }).error(function() {
        e.error("载入图片失败")
    })
}]),
app.controller("ResultsShowController", ["$scope", "result", "$modalInstance", 
function(a, b, c) {
    a.result = b,
    a.descList = {
        body: "体质",
        spirit: "根骨",
        spunk: "元气",
        strength: "力道",
        agility: "身法",
        physicsShield: "外防",
        magicShield: "内防",
        dodge: "闪避",
        parryBase: "招架",
        parryValue: "拆招",
        toughness: "御劲",
        attack: "攻击",
        heal: "治疗",
        crit: "会心",
        critEffect: "会效",
        overcomeRate: "破防",
        hit: "命中",
        acce: "加速",
        strain: "无双",
        huajing: "化劲",
        threat: "威胁",
        life: "气血",
        basicAttack: "基础攻击",
        basicHeal: "基础治疗",
        score: "装分"
    },
    a.list_1 = ["life", "body", "spirit", "spunk", "strength", "agility", "basicAttack", "attack"],
    a.list_2 = ["crit", "critEffect", "hit", "acce", "overcomeRate", "strain", "basicHeal", "heal"],
    a.list_3 = ["physicsShield", "magicShield", "dodge", "parryBase", "parryValue", "toughness", "huajing", "score"],
    a.close = function() {
        c.dismiss()
    }
}]),
app.controller("ResultCtrl", ["$scope", "$rootScope", 
function(a, b) {
    var c = b.menpai,
    d = {
        name: "",
        value: ""
    },
    e = ["", ""];
    "spirit" == c.type ? (d = {
        name: "根骨",
        value: "spirit"
    },
    e = ["内功", "内功"]) : "strength" == c.type ? (d = {
        name: "力道",
        value: "strength"
    },
    e = ["外功", "外功"]) : "agility" == c.type ? (d = {
        name: "身法",
        value: "agility"
    },
    e = ["外功", "外功"]) : "spunk" == c.type && (d = {
        name: "元气",
        value: "spunk"
    },
    e = ["内功", "内功"], "tianluo" == c.name && (e = ["内功", "外功"])),
    a.attriUp = [{
        name: "最大气血",
        value: "life"
    },
    {
        name: d.name,
        value: d.value
    },
    {
        name: "基础攻击",
        value: "basicAttack"
    },
    {
        name: "面板攻击",
        value: "attack"
    },
    {
        name: e[1] + "会心",
        value: "crit"
    },
    {
        name: e[1] + "会效",
        value: "critEffect"
    },
    {
        name: e[1] + "命中",
        value: "hit"
    },
    {
        name: "急速",
        value: "acce"
    }],
    a.attriDown = [{
        name: "无双",
        value: "strain"
    },
    {
        name: e[0] + "破防",
        value: "overcomeRate"
    },
    {
        name: "内功防御",
        value: "magicShield"
    },
    {
        name: "外功防御",
        value: "physicsShield"
    },
    {
        name: "御劲",
        value: "toughness"
    },
    {
        name: "化劲",
        value: "huajing"
    },
    {
        name: "装备评分",
        value: "score"
    },
    {
        name: "方案总览",
        value: "preview"
    }],
    "hps" == c.type ? (a.attriUp = [{
        name: "最大气血",
        value: "life"
    },
    {
        name: "根骨",
        value: "spirit"
    },
    {
        name: "基础治疗",
        value: "basicHeal"
    },
    {
        name: "面板治疗",
        value: "heal"
    },
    {
        name: "内功会心",
        value: "crit"
    },
    {
        name: "内功会效",
        value: "critEffect"
    },
    {
        name: "方案总览",
        value: "preview"
    }], a.attriDown = [{
        name: "急速",
        value: "acce"
    },
    {
        name: "内功命中",
        value: "hit"
    },
    {
        name: "内功防御",
        value: "magicShield"
    },
    {
        name: "外功防御",
        value: "physicsShield"
    },
    {
        name: "御劲",
        value: "toughness"
    },
    {
        name: "化劲",
        value: "huajing"
    },
    {
        name: "装备评分",
        value: "score"
    }]) : "t" == c.type && (a.attriUp = [{
        name: "最大气血",
        value: "life"
    },
    {
        name: "体质",
        value: "body"
    },
    {
        name: "外功防御",
        value: "physicsShield"
    },
    {
        name: "内功防御",
        value: "magicShield"
    },
    {
        name: "御劲",
        value: "toughness"
    },
    {
        name: "闪避",
        value: "dodge"
    },
    {
        name: "方案总览",
        value: "preview"
    }], a.attriDown = [{
        name: "招架",
        value: "parryBase"
    },
    {
        name: "拆招",
        value: "parryValue"
    },
    {
        name: "急速",
        value: "acce"
    },
    {
        name: "命中",
        value: "hit"
    },
    {
        name: "无双",
        value: "strain"
    },
    {
        name: "装备评分",
        value: "score"
    }])
}]),
app.controller("ChangeEquipController", ["$scope", "$rootScope", "$http", "$sce", "$modal", "toastr", 
function(a, b, c, d, e, f) {
    var g = [{
        text: "会心",
        index: 0
    },
    {
        text: "破防",
        index: 1
    },
    {
        text: "加速",
        index: 2
    },
    {
        text: "命中",
        index: 3
    },
    {
        text: "无双",
        index: 4
    },
    {
        text: "PVP",
        index: 5
    }],
    h = [{
        text: "会心",
        index: 0
    },
    {
        text: "加速",
        index: 2
    },
    {
        text: "治疗",
        index: 6
    },
    {
        text: "PVP",
        index: 5
    }],
    i = [{
        text: "外防",
        index: 7
    },
    {
        text: "内防",
        index: 8
    },
    {
        text: "闪避",
        index: 9
    },
    {
        text: "招架",
        index: 10
    },
    {
        text: "御劲",
        index: 12
    },
    {
        text: "加速",
        index: 2
    },
    {
        text: "命中",
        index: 3
    },
    {
        text: "无双",
        index: 4
    }];
    a.filterItems = "hps" == b.menpai.type ? h: "t" == b.menpai.type ? i: g,
    a.ctrl = {},
    a.ctrl.isopen = !1,
    a.sourceType = [{
        id: 0,
        label: "5人副本"
    },
    {
        id: 1,
        label: "10人普通副本"
    },
    {
        id: 2,
        label: "25人英雄副本"
    },
    {
        id: 3,
        label: "声望"
    },
    {
        id: 4,
        label: "侠义"
    },
    {
        id: 5,
        label: "江湖贡献"
    },
    {
        id: 6,
        label: "活动"
    },
    {
        id: 7,
        label: "世界BOSS"
    },
    {
        id: 8,
        label: "挖宝"
    },
    {
        id: 9,
        label: "生活技能"
    },
    {
        id: 10,
        label: "名剑"
    },
    {
        id: 11,
        label: "威望·恶人谷"
    },
    {
        id: 12,
        label: "威望·浩气盟"
    },
    {
        id: 13,
        label: "任务"
    }],
    a.itemText = ["会心", "破防", "加速", "命中", "无双", "PVP", "治疗", "外防", "内防", "闪避", "招架", "拆招", "御劲"],
    a.ctrl.sourceFilter = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
    a.filterSource = function(b, c) {
        c.preventDefault(),
        c.stopPropagation(),
        a.ctrl.sourceFilter[b] = !a.ctrl.sourceFilter[b],
        a.filter()
    },
    a.toggle = function(b, c) {
        c[b.index] = Math.abs(c[b.index] - 1),
        a.filter()
    },
    a.exists = function(a, b) {
        return b[a.index] > 0
    },
    a.available = function(a, b) {
        return 4 == a.index ? 0 === b[5] : 0 === a.index ? 0 === b[6] : 2 == a.index ? 0 === b[6] : 7 == a.index ? 0 === b[8] : 8 == a.index ? 0 === b[7] : 5 == a.index ? 0 === b[4] : !0
    },
    a.setEquip = function(b) {
        a.$emit("setEquip", b)
    },
    a.filter = function() {
        var d,
        c = !1;
        for (d = 0; d < a.ctrl.sourceFilter.length; d++) c = c || a.ctrl.sourceFilter[d];
        angular.forEach(b.equipLists[b.focus].list, 
        function(d, e) {
            var f,
            g;
            if (d.isShown = !1, f = d.quality >= b.equipListfilter.range[0] && d.quality <= b.equipListfilter.range[1]) for (g = 0; g < b.equipListfilter.attr.length && (f = 5 == g ? d.filter[g] == b.equipListfilter.attr[g] : d.filter[g] >= b.equipListfilter.attr[g], f = f && (a.ctrl.sourceFilter[d.class] || !c), f); g++);
            f && (d.isShown = !0)
        })
    },
    a.checkFilter = function(a) {
        return a.isShown && a.quality >= b.equipListfilter.range[0] && a.quality <= b.equipListfilter.range[1]
    },
    a.trustAsHtml = function(a, b) {
        var c = "<b>" + a;
        return c += "</b><span class='right nostyle'>" + b + "</span>",
        d.trustAsHtml(c)
    },
    a.generateAttr = function(b, c) {
        var f,
        g,
        e = "<i>";
        for (f = 0; f < b.length; f++) b[f] > 0 && (e += a.itemText[f] + " ");
        return g = "",
        g = 0 > c || c > 12 ? "其他": a.sourceType[c].label,
        e += "</i><span class='right nostyle'>" + g + "</span>",
        d.trustAsHtml(e)
    },
    a.simpleSelect = function(c, e) {
        var g,
        f = "<b>" + c + "</b><span class='right nostyle'>";
        for (g = 0; g < e.length; g++)"t" == b.menpai.type && (7 > g || 11 == g) || b.equipListfilter.attr[5] > 0 && 5 == g || e[g] > 0 && (f += a.itemText[g] + " ");
        if ("t" == b.menpai.type) for (g = 2; 5 > g; g++) e[g] > 0 && (f += a.itemText[g] + " ");
        return f += "</span>",
        d.trustAsHtml(f)
    },
    b.$watch("equipListfilter.range", a.filter, !0),
    a.getEquipList = function() {
        var d,
        e;
        b.equipLists[b.focus].isCached || (d = b.menpai.name, e = b.focus.split("_")[0], c.get("../../api/getEquipList.php?pos=" + e + "&menpai=" + d).success(function(c) {
            var d,
            e;
            c.err ? f.error(c.errReason) : (d = [], e = [], angular.forEach(c, 
            function(a, b) {
                0 === a.name.indexOf("无渊") ? d.push(a) : e.push(a)
            }), b.equipLists[b.focus].list = e.concat(d), b.equipLists[b.focus].isCached = !0),
            a.filter()
        }).error(function() {
            f.error("载入装备列表失败,请重试")
        }))
    },
    a.$on("openEquipSelection", 
    function(b) {
        a.getEquipList()
    }),
    a.$on("searchEquip", 
    function(b) {
        a.searchEquip()
    }),
    a.getEquipList(),
    a.searchEquip = function() {
        var b = e.open({
            animation: !0,
            templateUrl: "../../templates/selectOtherEquip.html",
            controller: "SearchController",
            size: "md",
            resolve: {
                items: function() {
                    return a.items
                }
            }
        });
        b.result.then(function(b) {
            a.setEquip(b)
        },
        function() {
            console.log("Search Equip Cancelled")
        })
    }
}]),
app.controller("SearchController", ["$scope", "$modalInstance", "$http", "$rootScope", "toastr", 
function(a, b, c, d, e) {
    a.searchEquip = [],
    a.allInfo = ["texiao", "xiangqian"],
    a.basicInfoWithoutJL = ["basicPhysicsShield", "basicMagicShield"],
    a.basicInfoWithJL = ["body", "spirit", "spunk", "strength", "agility"],
    a.plusInfo = ["physicsShield", "magicShield", "dodge", "parryBase", "parryValue", "attack", "heal", "crit", "critEffect", "overcome", "toughness", "acce", "hit", "strain", "huajing", "threat"],
    a.search = function(b) {
        var f,
        g;
        a.searchEquip = [],
        f = d.focus.split("_")[0],
        g = "../../api/searchEquip.php?q=" + f + "&str=" + b,
        g = encodeURI(g),
        c.get(g).success(function(b) {
            var c,
            d,
            f;
            if (b.err) e.error(b.errReason);
            else {
                for (c = b.length > 6 ? 5: b.length - 1, d = b.length > 6; c >= 0;) f = {
                    id: b[c].id,
                    name: b[c].name,
                    icon: b[c].icon
                },
                a.searchEquip.push(f),
                c--;
                d && e.warning("结果过多，请尝试更准确的关键字")
            }
        }).error(function() {
            e.error("搜索失败,请重试")
        })
    },
    a.setEquip = function(a) {
        b.close(a)
    },
    a.close = function() {
        b.dismiss("cancel")
    },
    a.searchPreview = function(a) {
        d.searchEquipPreview = Equip.createNew(),
        c.get("../../api/getEquip.php?q=" + a).success(function(a) {
            var b,
            c,
            f;
            a.err ? e.error("载入装备失败，" + a.errReason) : (b = a.xinfatype, c = analysisPre(b), f = "0x" + d.focus.split("_")[0], f -= 0, d.searchEquipPreview.type = positions[f], d.searchEquipPreview.typeParse = typeParseMap[positions[f]], preDescAvaList.attack = c[0] + "攻击提高", preDescAvaList.heal = c[0] + "治疗成效提高", preDescAvaList.crit = c[1] + "会心等级提高", preDescAvaList.critEffect = c[1] + "会心效果提高", preDescAvaList.overcome = c[0] + "破防等级提高", preDescAvaList.hit = c[1] + "命中等级提高", angular.forEach(a, 
            function(a, b) { ("0" !== a || "type" == b) && this.setData(b, a),
                b in preDescAvaList && this.setDesc(b, preDescAvaList[b])
            },
            d.searchEquipPreview), d.searchEquipPreview.setStrengthen(0), d.searchEquipPreview.analysisHole(), d.searchEquipPreview.recommendSchool = c[2])
        }).error(function() {
            e.error("载入装备失败,请重试")
        })
    }
}]),
app.controller("SaveController", ["$scope", "$rootScope", "$http", "toastr", 
function(a, b, c, d) {
    a.init = function() {
        b.saveList.isLoad || (b.saveList.list = [], c.get("../../api/getSaveList.php").success(function(a) {
            a.err ? d.error(a.errReason) : (angular.forEach(a, 
            function(a, b) {
                var c = {
                    name: a.name,
                    id: a.saveid
                };
                this.push(c)
            },
            b.saveList.list), b.saveList.isLoad = !0)
        }))
    },
    a.$on("saveCase", 
    function(b) {
        a.init()
    }),
    a.init()
}]),
app.controller("SetCaseNameController", ["$scope", "$modalInstance", 
function(a, b) {
    a.setName = function(a) {
        b.close(a)
    },
    a.close = function() {
        b.dismiss("cancel")
    }
}]),
app.controller("SaveCaseConfirmController", ["$scope", "$modalInstance", "name", 
function(a, b, c) {
    a.name = c,
    a.saveCaseNow = function() {
        b.close()
    },
    a.close = function() {
        b.dismiss("cancel")
    }
}]),
app.controller("CaseSettingsController", ["$scope", "$rootScope", "toastr", "$http", 
function(a, b, c, d) {
    a.tixingOptions = [{
        name: "成男",
        body: 33,
        spunk: 32,
        spirit: 33,
        strength: 32,
        agility: 33,
        isAvailable: !0,
        isSelected: !1
    },
    {
        name: "成女",
        body: 33,
        spunk: 32,
        spirit: 33,
        strength: 32,
        agility: 33,
        isAvailable: !0,
        isSelected: !1
    },
    {
        name: "萝莉",
        body: 33,
        spunk: 32,
        spirit: 33,
        strength: 32,
        agility: 33,
        isAvailable: !0,
        isSelected: !1
    },
    {
        name: "正太",
        body: 33,
        spunk: 32,
        spirit: 33,
        strength: 32,
        agility: 33,
        isAvailable: !0,
        isSelected: !1
    }],
    a.init = function() {
        var d,
        c = b.menpai.name;
        for (d = 0; d < a.tixingOptions.length; d++) a.tixingOptions[d].isAvailable = 1 == b.menpai.tixingOption[d],
        a.tixingOptions[d].isSelected = b.role.tixing == a.tixingOptions[d].name
    },
    a.setTixing = function(c) {
        b.role = {
            tixing: c.name,
            body: c.body,
            spunk: c.spunk,
            spirit: c.spirit,
            strength: c.strength,
            agility: c.agility
        };
        for (var d = 0; d < a.tixingOptions.length; d++) a.tixingOptions[d].isSelected = c.name == a.tixingOptions[d].name
    },
    a.init(),
    a.$on("setTixing", 
    function(b, c) {
        a.setTixing(c)
    })
}]),
app.controller("EnhanceController", ["$scope", "$rootScope", "toastr", "$http", 
function(a, b, c, d) {
    a.ctrl = {},
    a.ctrl.enhanceId = 0,
    a.init = function() {
        a.ctrl.v = b.equips[b.focus].jinglian.strengthen,
        a.ctrl.maxV = b.equips[b.focus].data.strengthen
    },
    a.ok = function() {
        a.ctrl.enhanceId = b.enhanceLists[b.focus].setAs.id,
        a.$emit("setEnhance", a.ctrl.enhanceId)
    },
    a.setStrengthen = function(c, d) {
        d && (a.ctrl.v = c),
        b.equips[b.focus].setStrengthen(c)
    },
    a.resetStrengthen = function() {
        a.setStrengthen(a.ctrl.v, !0)
    },
    a.getEnhanceList = function() {
        var a,
        e,
        f;
        b.enhanceLists[b.focus].isCached || (a = b.menpai.name, e = b.focus.split("_")[0], f = b.focus, d.get("../../api/getEnhanceList.php?pos=" + e + "&menpai=" + a).success(function(a) {
            a.err ? c.error(a.errReason) : (b.enhanceLists[f].list = [], angular.forEach(a, 
            function(a, c) {
                b.enhanceLists[f].list.push(a)
            }), b.enhanceLists[f].isCached = !0)
        }).error(function() {
            c.error("载入附魔列表失败,请重试")
        }))
    },
    a.$on("openEnhance", 
    function(b) {
        a.getEnhanceList(),
        a.init()
    })
}]),
app.directive("convertToNumber", 
function() {
    return {
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$parsers.push(function(a) {
                return parseInt(a, 10)
            }),
            d.$formatters.push(function(a) {
                return "" + a
            })
        }
    }
}),
app.controller("XilianController", ["$scope", "$rootScope", "Utils", 
function(a, b, c) {
    var g,
    d = ["attack", "heal", "crit", "critEffect", "overcome", "acce", "hit", "strain"],
    e = ["attack", "heal", "crit", "critEffect", "acce", "hit"],
    f = ["attack", "heal", "crit", "critEffect", "overcome", "acce", "hit", "strain", "dodge", "parryBase", "parryValue", "toughness"];
    g = "hps" == b.menpai.type ? e: "t" == b.menpai.type ? f: d,
    a.attrNmaeMap = {
        attack: "面板攻击",
        heal: "治疗成效",
        crit: "会心",
        critEffect: "会效",
        overcome: "破防",
        acce: "急速",
        hit: "命中",
        strain: "无双",
        dodge: "闪避",
        parryBase: "招架",
        parryValue: "拆招",
        toughness: "御劲"
    },
    a.xilianOption = "",
    a.ctrl = {},
    a.ctrl.level = 0,
    a.ctrl.ratio = 40,
    a.ctrl.origin = {
        key: "",
        value: 0
    },
    a.ctrl.target = {
        key: "",
        value: 0
    },
    a.ctrl.levelDesc = ["不洗炼", "一品", "二品", "三品", "四品", "五品", "六品", "七品", "八品", "九品"],
    a.init = function(c) {
        var d,
        e,
        f,
        h,
        i;
        if (a.xilianOption = c, d = b.equips[b.focus].xilian.level > 0, e = !1, d && (a.ctrl.level = b.equips[b.focus].xilian.level, a.ctrl.ratio = b.equips[b.focus].xilian.ratio, a.ctrl.origin = b.equips[b.focus].xilian.origin, a.ctrl.target = b.equips[b.focus].xilian.target), a.ctrl.originalList = [], a.ctrl.targetList = [], b.equips[b.focus].data.strengthen > 0) {
            for (f = 0; f < g.length; f++) if (b.equips[b.focus].data[g[f]] > 0) h = {
                index: g[f],
                desc: b.equips[b.focus].descList[g[f]] + b.equips[b.focus].data[g[f]]
            },
            a.ctrl.originalList.push(h),
            d || (a.ctrl.origin.key = g[f]);
            else {
                if (2 > f) continue;
                if (["dodge", "parryBase", "parryValue", "toughness"].indexOf(a.ctrl.origin.key) >= 0 && 8 > f) continue;
                if (["attack", "heal", "crit", "critEffect", "overcome", "acce", "hit", "strain"].indexOf(a.ctrl.origin.key) >= 0 && f > 7) continue;
                i = {
                    index: g[f],
                    desc: b.equips[b.focus].descList[g[f]] + "?"
                },
                a.ctrl.targetList.push(i),
                d || e || (a.ctrl.target.key = g[f], e = !e)
            }
            a.xilianOption && !d && (a.ctrl.origin.key = a.xilianOption)
        }
    },
    a.updateTargetList = function() {
        var d,
        e,
        f,
        c = [];
        for (c = ["dodge", "parryBase", "parryValue", "toughness"].indexOf(a.ctrl.origin.key) >= 0 ? ["attack", "heal", "dodge", "parryBase", "parryValue", "toughness"] : ["attack", "heal", "crit", "critEffect", "overcome", "acce", "hit", "strain"], a.ctrl.targetList = [], d = !1, c.indexOf(a.ctrl.target.key) >= 0 && (d = !0), e = 0; e < c.length; e++) if (!b.equips[b.focus].data[c[e]] > 0) {
            if (2 > e) continue;
            f = {
                index: c[e],
                desc: b.equips[b.focus].descList[c[e]] + "?"
            },
            a.ctrl.targetList.push(f),
            d || (a.ctrl.target.key = c[e], d = !d)
        }
    },
    a.xilianPreview = function(d) {
        d && "t" == b.menpai.type && a.updateTargetList(),
        c.xilian(a.ctrl.origin.key, a.ctrl.target.key, a.ctrl.level, a.ctrl.ratio)
    },
    a.ok = function() {
        $mdSidenav("right").close()
    },
    a.$on("openXilian", 
    function(b) {
        a.ctrl.level = 0,
        a.ctrl.ratio = 40,
        a.ctrl.origin = {
            key: "",
            value: 0
        },
        a.ctrl.target = {
            key: "",
            value: 0
        },
        a.init()
    })
}]),
app.controller("EmbedController", ["$scope", "$rootScope", "Utils", 
function(a, b, c) {
    a.ctrl = {},
    a.ctrl.stoneLevelDesc = ["", "一", "二", "三", "四", "五", "六", "七", "八"],
    a.init = function() {
        var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k;
        for (a.ctrl.holeType = [], a.holeType = [], a.originalHoleType = [], a.holeChangeableTypes = [], c = 0; c < b.equips[b.focus].holes.number; c++) {
            for (d = b.equips[b.focus].holes.holeInfo[c].typeId, e = stoneTypeMap[d], f = stoneTypeChange[d], a.originalHoleType[c] = {
                index: d,
                desc: stoneTypeList[e[0]] + "/" + stoneTypeList[e[1]] + "【原】"
            },
            d = b.equips[b.focus].newHoles.holeInfo[c].typeId, e = stoneTypeMap[d], a.holeType[c] = {
                index: d,
                desc: stoneTypeList[e[0]] + "/" + stoneTypeList[e[1]]
            },
            a.holeChangeableTypes[c] = [a.originalHoleType[c]], g = 1; g <= f.length; g++) h = stoneTypeMap[f[g - 1]],
            a.holeChangeableTypes[c][g] = {
                index: f[g - 1],
                desc: stoneTypeList[h[0]] + "/" + stoneTypeList[h[1]]
            };
            a.ctrl.holeType[c] = d
        }
        for (a.ctrl.holeAttr = [], a.holeAttr = [], a.originalHoleAttr = [], a.holeChangeableAttrs = [], c = 0; c < b.equips[b.focus].holes.number; c++) {
            for (i = b.equips[b.focus].holes.holeInfo[c].attrId, j = attrTransTable[i], a.originalHoleAttr[c] = {
                index: i,
                desc: stoneAttrMap[Number(i)].desc + "【原】"
            },
            i = b.equips[b.focus].newHoles.holeInfo[c].attrId, a.holeAttr[c] = {
                index: i,
                desc: stoneAttrMap[Number(i)].desc
            },
            a.holeChangeableAttrs[c] = [a.originalHoleAttr[c]], g = 1; g <= j.length; g++) k = {
                index: j[g - 1],
                desc: stoneAttrMap[Number(j[g - 1])].desc
            },
            a.holeChangeableAttrs[c][g] = k;
            a.ctrl.holeAttr[c] = i
        }
    },
    a.$on("openEmbed", 
    function(b) {
        a.init()
    }),
    a.stones = stones,
    a.empty = function(a, b) {
        var d = {
            img: "-1-6",
            level: 6,
            type: -1
        };
        c.onDrop(d, b)
    },
    a.embedAStone = function(d, e) {
        var f,
        g;
        if (a.preventClickEvt) return a.releasePrevent(),
        void 0;
        for (f = 0; f < b.equips[b.focus].holes.number; f++) if (g = b.equips[b.focus].embed.stone[f].typeId, "-1" == g || -1 == g) {
            c.onDrop(e, f);
            break
        }
    },
    a.preventClick = function() {
        a.preventClickEvt = !0
    },
    a.$on("draggable:start", a.preventClick),
    a.releasePrevent = function() {
        a.preventClickEvt = !1
    },
    a.onDrop = function(a, b, d) {
        c.onDrop(b, d)
    },
    a.changeColor = function(b, d) {
        var e = a.ctrl.holeType[d];
        c.changeColor(d, e)
    },
    a.changeAttr = function(d, e) {
        var g,
        h,
        f = a.ctrl.holeAttr[e];
        for (c.changeAttr(e, f), g = b.equips[b.focus].holes.number, h = 0; g > h; h++) h != e && (b.equips[b.focus].newHoles.holeInfo[h].attrId = b.equips[b.focus].holes.holeInfo[h].attrId, b.equips[b.focus].newHoles.holeInfo[h].attrDesc = b.equips[b.focus].holes.holeInfo[h].attrDesc, b.equips[b.focus].newHoles.holeInfo[h].attrPrefix = b.equips[b.focus].holes.holeInfo[h].attrPrefix, a.ctrl.holeAttr[h] = a.originalHoleAttr[h].index, c.isChanged(h))
    }
}]),
app.controller("AttributeStoneController", ["$scope", "$rootScope", "$http", "Utils", "toastr", 
function($scope, $rootScope, $http, Utils, toastr) {
    $scope.ctrl = {},
    $scope.ctrl.attribute = [],
    $scope.placeHolder = ["选择第一属性", "选择第二属性", "选择第三属性", "选择等级"],
    $scope.activationStats = {
        needType: [ - 1, -1, -1],
        needNum: [ - 1, -1, -1],
        needLevel: [ - 1, -1, -1],
        desc: ["金", "木", "水", "火", "土", "总"]
    },
    $scope.activationStatsShow = {
        needType: [0, 0, 0, 0, 0, 0],
        needNum: [0, 0, 0, 0, 0, 0],
        needLevel: [0, 0, 0, 0, 0, 0]
    },
    $scope.init = function() {
        var a,
        b;
        if ($rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][0].isLoad || $http.get("../../api/getAttributeStone.php?q=0&id=0&menpai=" + $rootScope.menpai.name).success(function(a) {
            a.err ? toastr.error("载入五彩石列表失败，请点击重选五彩石") : (angular.forEach(a, 
            function(a, b) {
                this.push(a)
            },
            $rootScope.attributeStoneLists[0][0].attr), $rootScope.attributeStoneLists[0][0].isLoad = !0, angular.forEach(a, 
            function(a, b) {
                this.push(a)
            },
            $rootScope.attributeStoneLists[1][0].attr), $rootScope.attributeStoneLists[1][0].isLoad = !0)
        }).error(function() {
            toastr.error("载入五彩石列表失败，请点击重选五彩石")
        }), $scope.activationStatsShow = {
            needType: [0, 0, 0, 0, 0, 0],
            needNum: [0, 0, 0, 0, 0, 0],
            needLevel: [0, 0, 0, 0, 0, 0]
        },
        $rootScope.attributeStone[$rootScope.attributeStoneSelected].level > 0) for (a = $rootScope.attributeStone[$rootScope.attributeStoneSelected].attributes, b = 0; 3 > b; b++) $scope.activationStats.needType[b] = a[b].needMagicStoneType,
        $scope.activationStatsShow.needType[a[b].needMagicStoneType] = 1,
        $scope.activationStats.needNum[b] = a[b].needMagicStoneNumber,
        $scope.activationStatsShow.needNum[a[b].needMagicStoneType] = a[b].needMagicStoneNumber,
        $scope.activationStats.needLevel[b] = a[b].needMagicStoneLevel,
        $scope.activationStatsShow.needLevel[a[b].needMagicStoneType] = a[b].needMagicStoneLevel;
        $scope.update()
    },
    $scope.update = function() {
        for (var a = 0; 4 > a; a++) $scope.ctrl.attribute[a] = $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][a].isSet ? $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][a].setAs: $scope.placeHolder[a]
    },
    $rootScope.$watch("attributeStoneSelected", $scope.init),
    $scope.setAttributeStone = function(id) {
        var request,
        i,
        attrStone,
        url;
        for ( - 1 != id && (request = $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][id].setAs, $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][id].isSet = !0), i = 0; 4 > i; i++) i > id && ($rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][i].isLoad = !1, $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][i].setAs = $scope.placeHolder[i], $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][i].isSet = !1, 0 != i && ($rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][i].attr = []));
        if (id++, $scope.update(), 0 == id) return attrStone = {
            name: "",
            score: 0,
            level: 0,
            attributes: [{
                type: "jing",
                isFirstChild: !0,
                desc: "",
                prefix: "none",
                number: 0,
                isActive: !1,
                needMagicStoneType: "-1",
                needMagicStoneNumber: 0
            },
            {
                desc: "",
                isFirstChild: !1,
                prefix: "none",
                number: 0,
                isActive: !1,
                needMagicStoneType: "-1",
                needMagicStoneNumber: 0
            },
            {
                desc: "",
                isFirstChild: !1,
                prefix: "none",
                number: 0,
                isActive: !1,
                needMagicStoneType: "-1",
                needMagicStoneNumber: 0
            }]
        },
        $rootScope.attributeStone[$rootScope.attributeStoneSelected] = angular.copy(attrStone),
        void 0;
        for (url = "../../api/getAttributeStone.php?q=" + request + "&id=" + id + "&menpai=" + $rootScope.menpai.name, i = 1; id >= i; i++) url += i != id ? "&at" + i + "=" + $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][i - 1].setAs: "&at" + i + "=" + request;
        url = encodeURI(url),
        $http.get(url).success(function(response) {
            var exteaStoneScore,
            affectedWeapon;
            response.err ? toastr.error("载入五彩石列表失败，请点击重选五彩石") : 4 > id ? ($rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][id].attr = [], angular.forEach(response, 
            function(a, b) {
                this.push(a)
            },
            $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][id].attr), $rootScope.attributeStoneLists[$rootScope.attributeStoneSelected][id].isLoad = !0) : 4 == id && (attrStone = Utils.transDBStoneToJsObj(response), $rootScope.attributeStone[$rootScope.attributeStoneSelected] = attrStone, exteaStoneScore = 77 * attrStone.level, affectedWeapon = 0 == $rootScope.attributeStoneSelected ? "b_primaryWeapon": "c_primaryWeapon", $rootScope.equips[affectedWeapon].embed.totalScore = Math.round(eval($rootScope.equips[affectedWeapon].embed.score.join("+")) + exteaStoneScore), $scope.init())
        }).error(function() {
            toastr.error("载入五彩石列表失败，请点击重选五彩石")
        })
    },
    $scope.$on("setAttributeStone", 
    function(a, b) {
        $scope.setAttributeStone(b)
    }),
    $scope.autoEmbed = function() {
        function a() {
            var b,
            a = !0;
            for (b = 0; 3 > b; b++) a = a && $rootScope.attributeStone[$rootScope.attributeStoneSelected].attributes[b].isActive;
            return a
        }
        function b() {
            var a,
            b;
            for (a = 0; a < positions.length; a++) for (b = 0; b < $rootScope.equips[positions[a]].holes.number; b++) if ($rootScope.equips[positions[a]].embed.stone[b].typeId < 0) return ! 0;
            return ! 1
        }
        function c(a) {
            return "t" == $rootScope.menpai.type ? "47" == a: "05" == a || "39" == a
        }
        var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q;
        if ($rootScope.attributeStone[$rootScope.attributeStoneSelected].level < 4) return toastr.error("请先选择五彩石！"),
        void 0;
        for (d = $rootScope.focus, e = 5, f = 0, g = $rootScope.embedLevel, h = $scope.activationStats.needType, i = $scope.activationStats.needNum, j = $scope.activationStats.needLevel, 4 > g && (g = 4); (!a() || b()) && e--;) {
            if (2 == f) for (k = 0; k < positions.length; k++) for ($rootScope.focus = positions[k], l = 0; l < $rootScope.equips[positions[k]].holes.number; l++) m = {
                type: -1,
                level: 6
            },
            Utils.onDrop(m, l);
            for (k = 0; k < positions.length; k++) for ($rootScope.focus = positions[k], l = 0; l < $rootScope.equips[positions[k]].holes.number && (n = $rootScope.equips[positions[k]].newHoles.holeInfo[l], o = $rootScope.equips[positions[k]].embed.stone[l], p = n.avaStone, (0 == f || 2 == f) && (q = !0, c(n.attrId) || (q = !1, o.level < g && (m = {
                type: 0,
                level: g
            },
            Utils.onDrop(m, l)), -1 == o.typeId && o.level > 0 && (m = {
                type: o.typeId,
                level: g
            },
            Utils.onDrop(m, l))), o.active || (m = {
                type: 0,
                level: q && g > 6 ? 6: g
            },
            Utils.onDrop(m, l))), (1 == f || 3 == f) && c(n.attrId) && (m = m = {
                type: 0,
                level: g > 6 ? 6: g
            },
            Utils.onDrop(m, l)), !a() || b()); l++);
            if (f++, f >= 4) {
                toastr.error("自动镶嵌失败，请重新尝试，若仍未能激活成功，请手动调整");
                break
            }
        }
        $rootScope.focus = d,
        f = 0
    }
}]),
app.controller("BuffController", ["$rootScope", "$scope", "Utils", 
function(a, b, c) {
    b.types = [{
        id: "OrdinaryBuff",
        name: "普通增益气劲"
    },
    {
        id: "InfightBuff",
        name: "战时增益气劲"
    },
    {
        id: "Food",
        name: "小药"
    }],
    b.init = function() {
        b.qixueList = [],
        b.buffList = {
            OrdinaryBuff: [],
            InfightBuff: [],
            Food: []
        },
        b.addedBuff = [];
        for (var c = 0; c < a.buffController.buff.length; c++) a.buffController.buff[c].isCheck = a.buffController.checkActive(a.buffController.buff[c].id),
        a.buffController.buff[c].isCheck && "Qixue" != a.buffController.buff[c].type && b.addedBuff.push(a.buffController.buff[c]),
        "Qixue" == a.buffController.buff[c].type ? b.qixueList.push(a.buffController.buff[c]) : b.buffList[a.buffController.buff[c].type].push(a.buffController.buff[c])
    },
    b.setZhongjian = function() {
        a.attributeStoneSelected = a.zhongjian ? 1: 0,
        a.zhongjian ? (a.positionIconList[4].type = "c_primaryWeapon", a.positionIconList[4].icon = a.equips["c_primaryWeapon"].data.iconID > 0 ? "https://www.j3pz.com/icons/" + a.equips["c_primaryWeapon"].data.iconID + ".png": "../../images/pl_12.png", b.navSelect("c_primaryWeapon")) : (a.positionIconList[4].type = "b_primaryWeapon", a.positionIconList[4].icon = a.equips["b_primaryWeapon"].data.iconID > 0 ? "https://www.j3pz.com/icons/" + a.equips["b_primaryWeapon"].data.iconID + ".png": "../../images/pl_11.png", b.navSelect("b_primaryWeapon")),
        "b_primaryWeapon" == a.focus && a.zhongjian ? a.focus = "c_primaryWeapon": "c_primaryWeapon" != a.focus || a.zhongjian || (a.focus = "b_primaryWeapon"),
        c.attributeStoneActivation()
    },
    b.setBuff = function(c, d) {
        var f,
        g,
        h,
        e = a.buffController.buff[a.buffController.activeBuff[c].index];
        if (d) {
            for (f = [], g = [], h = 0; h < b.addedBuff.length; h++)(e.conflict == b.addedBuff[h].conflict && 0 != e.conflict || e.id == b.addedBuff[h].id) && (f.push(h), g.push(b.addedBuff[h].id));
            for (h = f.length - 1; h >= 0; h--) b.addedBuff.splice(f[h], 1),
            a.buffController.activeBuff[g[h]].isCheck = !1,
            a.buffController.buff[a.buffController.activeBuff[g[h]].index].isCheck = !1;
            b.addedBuff.push(e)
        } else for (h = 0; h < b.addedBuff.length; h++) if (b.addedBuff[h].id == c) {
            b.addedBuff.splice(h, 1);
            break
        }
        a.buffController.activeBuff[c].isCheck = d,
        a.buffController.buff[a.buffController.activeBuff[c].index].isCheck = d
    },
    b.$on("initBuff", b.init)
}]);