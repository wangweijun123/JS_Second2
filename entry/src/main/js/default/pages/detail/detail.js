import router from '@system.router';

// abilityType: 0-Ability; 1-Internal Ability
const ABILITY_TYPE_EXTERNAL = 0;
const ABILITY_TYPE_INTERNAL = 1;

// syncOption(Optional, default sync): 0-Sync; 1-Async
const ACTION_SYNC = 0;
const ACTION_ASYNC = 1;
const ACTION_MESSAGE_CODE_PLUS = 1001;

export default {
    data: {
        result: "",
    },
    launch() {
        router.back();
    },
    onInit(){

    },

// 异步函数(进程内的服务)
    plusInnerService: async function(syncOption) {
        var actionData = {};
        // 直接往对象里添加属性，不用声明
        actionData.firstNum = 1024;
        actionData.secondNum = 2048;
        console.info("js MainAbility plus");
        var action = {}; // 声明一个对象哦
        // 这里必须与java服务端一致
        action.bundleName = 'com.huawei.hiaceservice';
        action.abilityName = 'com.huawei.hiaceservice.CalcInternalAbility';
        action.messageCode = ACTION_MESSAGE_CODE_PLUS;
        action.data = actionData;
        action.abilityType = ABILITY_TYPE_INTERNAL; // 进程内的服务
        action.syncOption = syncOption;
        console.info("js MainAbility callAbility ");
        // async 与 await 配套使用的哦
        console.info("js MainAbility客户端发送的数据 :" + action);
        var result = await FeatureAbility.callAbility(action);
        console.info("js MainAbility result :" + result);
        var ret = JSON.parse(result);
        console.info("js MainAbility ret :" + ret);
        console.info("js MainAbility ret.code :" + ret.code + ", abilityResult:" + ret.abilityResult);
        if (ret.code == 0) {
            console.info('MainAbility plus result is:' + JSON.stringify(ret.abilityResult));
            // 给变量设置，就可以刷新界面了
            this.result = JSON.stringify(ret.abilityResult);
        } else {
            console.error('MainAbility plus error code:' + JSON.stringify(ret.code));
        }
    },

// 异步函数
    callPlugOutterService: async function() {
        var actionData = {};
        actionData.firstNum = 1024;
        actionData.secondNum = 2048;
        console.info("js MainAbility plus");
        var action = {};
        /*              private static final String BUNDLE_NAME = "com.huawei.hiaceservice";
    private static final String ABILITY_NAME = "CalcInternalAbility";*/

        action.bundleName = 'com.example.js_second_outservice';
        action.abilityName = 'CalcServiceAbility';
        //        action.abilityName = 'com.example.js_second_outservice.CalcServiceAbility';
        action.messageCode = ACTION_MESSAGE_CODE_PLUS;
        action.data = actionData;
        action.abilityType = ABILITY_TYPE_EXTERNAL;
        action.syncOption = ACTION_ASYNC;
        console.info("js MainAbility callAbility ");
        var result = await FeatureAbility.callAbility(action);
        console.info("js MainAbility result :" + result);
        var ret = JSON.parse(result);
        console.info("js MainAbility ret :" + ret);
        console.info("js MainAbility ret.code :" + ret.code + ", abilityResult:" + ret.abilityResult);
        if (ret.code == 0) {
            console.info('MainAbility plus result is:' + JSON.stringify(ret.abilityResult));
            this.result = JSON.stringify(ret.abilityResult);
        } else {
            console.error('MainAbility plus error code:' + JSON.stringify(ret.code));
        }
    },
    callInternalService() {
        console.info("js MainAbility callInternalService");
        this.plusInnerService(ACTION_ASYNC);
        console.info("js MainAbility after plus");
    },
    callInternalServiceSync() {
        console.info("js MainAbility callInternalService");
        this.plusInnerService(ACTION_SYNC);
        console.info("js MainAbility after plus");
    },
    callOutterService() {
        console.info("js MainAbility callOutterService");
        this.callPlugOutterService();
        console.info("js MainAbility after plus");
    },
    dataTypeTest() {
        var xx = 5;
        xx = 'hahah';
        console.info("xx:" + xx);

        var n1 = 0x19;
        console.info("n1:" + n1);
        console.info("MAX_VALUE:" + Number.MAX_VALUE);

        console.info("isNaN(1) ->" + isNaN(1));
        var str = "12";
        let strrrr = "xx";
        let bstr = 5;
        console.info("strrrr ->" + strrrr + " " + bstr);
        //        str.length;
        var b = "true";
        var numb = 1;
        if (b) {
            console.info("b ->" + b);
        }
        if (numb) {
            console.info("numb ->" + numb);
        }

        console.info("numb ->" + typeof numb);
        console.info("b ->" + typeof b);
        var strNum = "100";
        var nu = parseInt(strNum);
        console.info("nu ->" + typeof nu);

        var floatNum = 0.1 + 0.2; // 0.30000000000000004
        console.info("0.1 + 0.2 ->" + floatNum);

        for (var i = 0; i < 10; i++) {
            var str = "";
            for (var j = i; j < 10; j++) {
                str = str + '*';
            }
            console.info(str);
        }


    },
    plusxxx(value, index, arr) {
        console.info(value + " " + index + " " + arr);
    },
    arrayTest() {
        // 一定要加this关键词
        //this.dataTypeTest();
        // new 出一个数组
        var array = new Array();
        for (var i = 0; i < 5; i++) {
            array.push(i);
        }
        array.push(6);
        array.push(7);
        for (var i = 0; i < array.length; i++) {
            console.info(i + " " + array[i]);
        }
        // 字面量一个数组 []
        var array2 = [];
        for (var j = 0; j < 5; j++) {
            array2.push(j);
        }
        var newArray2 = [];
        console.info("###############");
        for (var i = 0; i < array2.length; i++) {
            console.info(i + " " + array2[i]);
            if (array2[i] < 3) {
                newArray2[newArray2.length] = array2[i]
            }
        }
        console.info(newArray2);

        var map = new Map();
        map.set("xxx", "duanxia");
        console.info(map.get("xxx"));
        //      需要传一个callback的函数
        newArray2.forEach(this.plusxxx);

        console.log(this.add(2, 3));

    },

/* js 函数的返回值，是不需要声明的哈哈 */
    add(n1, n2) {
        if (n1 > n2) {
            var re = n1;
        }
        // 逆天的行为
        console.log(re);
        return n1 + n2;
    },
    add2(n1, n2) {
    },
//    函数内置的形参，arguments接受了所有参数，所以是一个数组
    add3() {
        console.log(arguments);
        console.log(arguments.length);
        for (let argumentsKey in arguments) {
            console.log(argumentsKey + " " + arguments[argumentsKey]);
        }
    },
/* 没有return 返回值就是 undefined */
    undefinedTest() {
        console.log(undefined == this.add2(2, 3));
    },
    useArguments() {
        this.add3(2, 3, 4, 5, 67);
    },
    createObj() {
        /* 定义一个对象,其实就是一个json */
        var obj = {};
        var ob2 = new Object();
        var obj1 = {
            age: 18,
            name: 'duanxia',
            gender: '女',
            zuoai: function () {
                console.log("make love");
            }
        };

        console.log(obj1.gender);
        obj1.zuoai();

        /* 定义一个对象数组 */

        var objArr = [
                {
                    age: 18,
                    name: 'duanxia',
                    gender: '女',
                    zuoai: function () {
                        console.log("make love");
                    }
                },
                {
                    age: 38,
                    name: 'wangxiajiang',
                    gender: '女',
                    zuoai: function () {
                        console.log("big love");
                    }
                },
        ];
        console.log("####### 打印数组对象 #######")
        for (var i = 0; i < objArr.length; i++) {
            console.log(objArr[i].age)
        }
        objArr.forEach(this.callbackfn)
    },
    callbackfn(item) {
        console.log(item.name);
    },
    creatObjByConstructor() {
        var obj = new Object();
        obj.name = "xxx";
        obj.sayHi = function (gequ) {
            console.log('我唱' + gequ);
        };
        console.log(obj.name);
        obj.sayHi('woaini');
        for (var element in obj) {
            console.log(element);
        }
        ;
        var d = new Date();
    },
    jumpThirdPage() {
        console.info('jumpThirdPage ...');
       router.push({
           uri: 'pages/third/third',
           params: {
               name: 'duanxia',
               age: 18
           }
       });
    },

}