
const MESSAGE_CODE_START_ABILITY = 9999;
const ABILITY_TYPE_EXTERNAL = 0;
const ABILITY_TYPE_INTERNAL = 1;
const BUNDLE_NAME = "com.huawei.hiaceservice";
const ABILITY_NAME = "com.huawei.hiaceservice.CalcInternalAbility";

export default {

    openBluetoothAdapter() {
        console.log('openBluetoothAdapter ...')
    },

    startAbility: async function(bundleName, abilityName ,startAbilityCallback) {
        let param = {};
        param.bundleName = bundleName;
        param.abilityName = abilityName;
        param.messageCode = MESSAGE_CODE_START_ABILITY;
        param.abilityType = 1;
        // 0: Synchronous mode (default value) 1: Asynchronous
        param.syncOption = 1;

        let actionData = {};
        actionData.withBundleName = "com.huawei.health.bloodsugar";
        actionData.withAbilityName = "com.huawei.health.bloodsugar.FourthPageAbility";
        param.data = actionData;

        let resultStr = await FeatureAbility.subscribeAbilityEvent(param, startAbilityCallback);
                let resultObj = JSON.parse(resultStr);
        console.info('Start Ability result is:' + JSON.stringify(resultObj));
    },

    startAbility2: async function(bundleName, abilityName ,startAbilityCallback) {
        let actionData = {};
        actionData.bundleName = "com.huawei.health.bloodsugar";
        actionData.abilityName = "com.huawei.health.bloodsugar.FourthPageAbility";
//        actionData.params = params;
        let action = {};
        action.bundleName = bundleName;
        action.abilityName = abilityName;
        action.abilityType = 1;
        action.syncOption = 1;
        action.messageCode = MESSAGE_CODE_START_ABILITY;
        action.data = actionData;
        let resultStr = await FeatureAbility.subscribeAbilityEvent(action, startAbilityCallback);
        let resultObj = JSON.parse(resultStr);
        console.info('Start Ability result is:' + JSON.stringify(resultObj));
    },
    startAbility3: async function(bundleName, abilityName ,startAbilityCallback) {
        let actionData = {};
        actionData.bundleName = "com.huawei.health.bloodsugar";
        actionData.abilityName = "com.huawei.health.bloodsugar.FourthPageAbility";
        //        actionData.params = params;
        let action = {};
        action.bundleName = bundleName;
        action.abilityName = abilityName;
        action.abilityType = 1;
        action.syncOption = 1;
        action.messageCode = MESSAGE_CODE_START_ABILITY;
        action.data = actionData;
        let resultStr = await FeatureAbility.callAbility(action);
//        let resultStr = await FeatureAbility.subscribeAbilityEvent(action, startAbilityCallback);
        console.info('Start Ability result is:' + resultStr);
        let resultObj = JSON.parse(resultStr);
        console.info('Start Ability result is:' + JSON.stringify(resultObj));
    },
    callRemoteService: async function(callback) {
        var actionData = {};
        // 直接往对象里添加属性，不用声明
        actionData.firstNum = 1024;
        actionData.secondNum = 2048;
        console.info("js MainAbility plus");
        var action = {}; // 声明一个对象哦
        // 这里必须与java服务端一致
        action.bundleName = BUNDLE_NAME;
        action.abilityName = ABILITY_NAME;
        action.messageCode = 100000;
        action.data = actionData;
        action.abilityType = ABILITY_TYPE_INTERNAL; // 进程内的服务
        action.syncOption = 1;
        console.info("js MainAbility callAbility ");
        // async 与 await 配套使用的哦
        console.info("js MainAbility客户端发送的数据 :" + action);
        var result = await FeatureAbility.callAbility(action);
        console.info("js MainAbility result :" + result);
        callback(result);
    },
}
