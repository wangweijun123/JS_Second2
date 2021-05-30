import router from '@system.router';
import common from "../common/common";


// abilityType: 0-Ability; 1-Internal Ability
const ABILITY_TYPE_EXTERNAL = 0;
const ABILITY_TYPE_INTERNAL = 1;

// syncOption(Optional, default sync): 0-Sync; 1-Async
const ACTION_SYNC = 0;
const ACTION_ASYNC = 1;

export default {
    data: {
        headTitle: "Capture ",
        paragraphSecond: 'Reflecting the purity of nature, the innovative design upgrades your visual entertainment and ergonomic comfort. Effortlessly capture what you see and let it speak for what you feel.',
        name: '',
        age: 0,
        isShowDialog: true,
        replaceObject: '',
        replaceArray: '',
    },
    onInit() {
        this.replaceObject = this.$t('strings.object', { name: this.$t('strings.hello') });

        let str = this.$t('strings.object');
        console.info("str=" + str);
        console.info("this.replaceObject=" + this.replaceObject);


//        tt.show = "false";
//        this.test();=

        console.info("call test ...");
        this.replaceArray = this.$t('strings.array', [this.$t('strings.hello'), this.$t('strings.world')]);
        let str2 = this.$t('strings.array');
        console.info("str2=" + str2);
        console.info("this.replaceArray=" + this.replaceArray);
    },
    creatDialog() {
        let tt = this.$element('textContainer');
//        tt.style.color = '#000';
        console.info("tt="+tt);

        let myDialog = this.$element("myDialog");
        console.info("myDialog=" + myDialog);
        if (this.isShowDialog) {
            this.$element("myDialog").show();
        } else {
            this.$element("myDialog").close();
        }
        this.isShowDialog = !this.isShowDialog;
    },
    registerJsCallbackToJava: async function() {
        let requestParams = {};
        requestParams.bundleName = 'com.huawei.hiaceservice';
        requestParams.abilityName = 'com.huawei.hiaceservice.CalcInternalAbility';
        requestParams.messageCode = 10000;
        requestParams.abilityType = ABILITY_TYPE_INTERNAL;
        requestParams.syncOption = ACTION_ASYNC;
        console.info('start subscribeAbilityEvent:');
        // 必须异步 加 async await，不然日志打不出来
        let resultStr = await FeatureAbility.subscribeAbilityEvent(
            requestParams,
            callbackData => {
                console.info('callbackData:' + callbackData);
                let jsonCallback = JSON.parse(callbackData);
                console.info('callbackData:' + jsonCallback);
            }
        );
        console.info('result ttttttttt');
        console.info('result xxxxx' + resultStr);
        let resultObj = JSON.parse(resultStr);
        console.info('result is:' + JSON.stringify(resultObj));
    },
    registerJsCallbackToJava2: async function(callbackData) {
        let requestParams = {};
        requestParams.bundleName = 'com.huawei.hiaceservice';
        requestParams.abilityName = 'com.huawei.hiaceservice.CalcInternalAbility';
        requestParams.messageCode = 10000;
        requestParams.abilityType = ABILITY_TYPE_INTERNAL;
        requestParams.syncOption = ACTION_ASYNC;
        console.info('start subscribeAbilityEvent:');
        // 必须异步 加 async await，不然日志打不出来
        let resultStr = await FeatureAbility.subscribeAbilityEvent(
            requestParams,
            callbackData
        );
        console.info('result ttttttttt');
        console.info('result xxxxx' + resultStr);
        let resultObj = JSON.parse(resultStr);
        console.info('result is:' + JSON.stringify(resultObj));
    },
    registerJsCallbackToJava3: async function(callbackData) {
        let requestParams = {};
        requestParams.bundleName = 'com.huawei.hiaceservice';
        requestParams.abilityName = 'com.huawei.hiaceservice.CalcInternalAbility';
        requestParams.messageCode = 10000;
        requestParams.abilityType = ABILITY_TYPE_INTERNAL;
        requestParams.syncOption = ACTION_SYNC;
        console.info('start subscribeAbilityEvent:');
        // 必须异步 加 async await，不然日志打不出来
        let resultStr = await FeatureAbility.subscribeAbilityEvent(
            requestParams,
            callbackData
        );
        console.info('result ttttttttt');
        console.info('result xxxxx' + resultStr);
        let resultObj = JSON.parse(resultStr);
        console.info('result is:' + JSON.stringify(resultObj));
    },

// 传入callback
    registerJsCallbackToJava10() {
        this.registerJsCallbackToJava2(callbackData => {
            console.info('callbackData chuan callback :' + callbackData);
            let jsonCallback = JSON.parse(callbackData);
            console.info('callbackData chuan :' + jsonCallback);
        });
    },
    registerJsCallbackToJavaSync() {
        this.registerJsCallbackToJava3(callbackData => {
            console.info('callbackData chuan callback :' + callbackData);
            let jsonCallback = JSON.parse(callbackData);
            console.info('callbackData chuan :' + jsonCallback);
        });
    },

    asyncAwait() {
        const res = this.test()
        console.info("async修饰的函数返回promise对象 res: " + res)
        res.then(a => {
            console.info("a: " + a)
        })
        console.info("return " + this.test2());
    },
    sleep(delay) {
        var start = (new Date()).getTime();
        while ((new Date()).getTime() - start < delay) {
            continue;
        }
    },
    // js函数如果只是声明async，并不会异步调用，只有碰到await 等待结果
    // 主线程继续执行
    test: async function() {
        let a = 2;
        this.sleep(2000);
        console.info("sleep 2s finised");
        return a;
    },
    test2() {
        let a = 2;
        return a;
    },
    asyncAwait2() {
        this.f().then(v => console.log(v)) //123
        console.log("finished f()")
        this.f2().then(v => console.log(v)) //a
        console.log("finished f2()")
    },
    f: async function() {
        return await 123
    },
    a() {
        return 'a'
    },
    f2: async function() {
        return await this.a()
    },
    asyncAwait3: async function() {
        const token = await this.login()
        console.log('login finished ->' +token)
        const userInfo = await this.getUserInfo(token)
        console.log('getUserInfo finished->'+userInfo)
        console.log('getUserInfo finished userInfo.isVip->'+userInfo.isVip)
        console.log('getUserInfo finished userInfo.noField->'+userInfo.noField)
        // js 异常为何不crash，只是不往下执行，还是有日志的，爆红,
        try {
            console.log('getUserInfo finished userInfo.noField.data->'+userInfo.noField.data)
        } catch(e) {
            console.log(" is error by catch");
        }


        const vipGoods = await this.getVipGoods(userInfo)
        this.showVipGoods(vipGoods)
    },
    login() {
        return new Promise(resolve => {
            setTimeout(
                ()=>{
                    console.log('login execute ...')
                    resolve('aaaa')
                },
                1000
            );
        })
    },
    getUserInfo(token) {
        return new Promise(resolve => {
            setTimeout(
                ()=>{
                    console.log('getUserInfo execute ...')
                    if (token) {
                        resolve({
                            isVip: true
                        })
                    }
                },
                2000
            );
        })
    },
    getVipGoods(userInfo) {
        return new Promise(resolve => {
            if (userInfo.isVip) {
                resolve({
                    id: '123',
                    price: 'xxx'
                })
            }
        })
    },
    showVipGoods(vipGoods) {
        console.log(vipGoods.id + '----' + vipGoods.price)
    },
    callOtherJs() {
        //        new Promise()
        common.openBluetoothAdapter();
    },
    jumpfourthPage() {
        console.info('fourth ...');
        router.push({
            uri: 'pages/fourth/fourth',
            params: {
                name: 'duanxia',
                age: 18
            }
        });
    },
}
