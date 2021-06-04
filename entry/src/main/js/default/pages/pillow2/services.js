import fetch from '@system.fetch'
import configuration from '@system.configuration';

const JS_TAG = "SERVICES_CARD /";
const localeInfo = configuration.getLocale();
const language = localeInfo.language + localeInfo.countryOrRegion;

export default {
    data: {
        text: 'I am root!',
        abilityList:[], // 跳转
        services:[], // 服务列表
        devices:[
                {gender:'1', age:47, iconUrl:'https://hag-ability-test.obs.myhwclouds.com/icon/20200401200608850ee3afa5ee4ea6b6913a1a2ace4c19.png'},
                {gender:'2', age:25, iconUrl:'https://hag-ability-test.obs.myhwclouds.com/icon/20200401200608850ee3afa5ee4ea6b6913a1a2ace4c19.png'},
                {gender:'3', age:89, iconUrl:'https://hag-ability-test.obs.myhwclouds.com/icon/20200401200608850ee3afa5ee4ea6b6913a1a2ace4c19.png'},
                {gender:'4', age:47, iconUrl:'https://hag-ability-test.obs.myhwclouds.com/icon/20200401200608850ee3afa5ee4ea6b6913a1a2ace4c19.png'},
                {gender:'5', age:25, iconUrl:'https://hag-ability-test.obs.myhwclouds.com/icon/20200401200608850ee3afa5ee4ea6b6913a1a2ace4c19.png'},
                {gender:'6', age:89, iconUrl:'https://hag-ability-test.obs.myhwclouds.com/icon/20200401200608850ee3afa5ee4ea6b6913a1a2ace4c19.png'}
        ],
        ability: {
            "name": "华为商城",
            "abilityId": "88ae9638bbb6474e85bc99332d06445c",
            "brief": "买手机，上华为商城",
            "iconUrl": "https://hag-ability-test.obs.myhwclouds.com/icon/20200401200608850ee3afa5ee4ea6b6913a1a2ace4c19.png",
            "type": "FA",
            "linkUrl": "https://1323999.com",
            "packageName": "https://1323999.com",
            "serviceName": "https://1323999.com",
        },
    },
    onInit() {
        console.info("method onInit");
        this.services = this.services.concat(this.ability)
        this.services = this.services.concat(this.ability)

//        this.getSubscribeInfo();

        while (this.devices.length > 4) {
            this.devices.pop();
        }
    },
    testArr() {
        console.info("method testArr");
        while (this.devices.length > 4) {
            this.devices.pop();
        }
    },
    onItemClick(person) {
        console.info("onItemClick ..."+JSON.stringify(person));
    },
    onResult(type, data){
        if (type == "services") {
            this.refreshServicesCard(data);
        }else if (type == "devices") {
            console.info(JS_TAG + "this.devices = " + this.devices.length);
        }
    },
    refreshServicesCard(abilityList){
        if (!abilityList || abilityList.length == 0){
            console.error(JS_TAG + "abilityList is empty");
        }
        this.abilityList = abilityList;
        this.services.push(abilityList[0]);
        this.services.push(abilityList[1]);
        console.info(JS_TAG + "this.services = " + this.services.length);
    },
    getSubscribeInfo: function () {
        console.info(JS_TAG + "start getSubscribeInfo");
        let self = this;
        fetch.fetch({
            url: "https://lfhagmirror.hwcloudtest.cn:18449/user-ability/v1/candidate-abilities/products/query",
            method: 'POST',
            header: {
                "x-hag-trace-id": 'lkk-test',
                'x-udid': '08968605203B7B491B2E3AB6381C266D9845F984A0EA3B126F27313D0971D9CD',
                'x-device-id': 'b37c017d1722f4f59a489ad968ef97e2d8395484333fccda75c76e58de94949f',
                'x-client-version': 'com.raycome.health_1.0',
                'x-prd-pkg-name': "com.raycome.health",
                'Content-Type':"application/json"
            },
            data: {
                "terminalInfo": {
                    "prdVer": "1.0",
                    "language": "language",
                    "locale": "language",
                    "countryCode": "CN",
                    "phoneType": "TAS-AL00",
                    "net": "wifi",
                    "deviceType": "PHONE",
                    "sysVer": "EMUI11",
                    "deltaPlatformVer": 0
                },
                "prdPkgName": "com.raycome.health"
            },
            success: function (response) {
                console.info(JS_TAG + "fetch success====>");
                console.info(JS_TAG +JSON.stringify(response));
                if(!response){
                    console.error(JS_TAG +"response is empty");
                    return;
                }
                let abilityList = [];
                let abilities = JSON.parse(response.data).candidateAbilityDetailList;
                for (let key of Object.keys(abilities)) {
                    console.info(JS_TAG + "abilities[key]: " + JSON.stringify(abilities[key]));
                    abilityList.push(abilities[key].ability);
                }
                try{
                    self.onResult("services", abilityList);
                }catch(e){
                    console.error(JS_TAG + "services onResult error:"+e);
                }
            },
            fail: function (msg) {
                console.info(JS_TAG + "fetch fail:" + msg+JSON.stringify(msg));
            }
        });
    },
    showAllServices: function () {
        console.info(JS_TAG + "showAllServices, this.abilityList = " + JSON.stringify(this.abilityList));
        this.$emit('onShowAllServices', {data: this.abilityList});
    },
    showAllDevices: function () {
        console.info(JS_TAG + "showAllDevices, this.devices = " + JSON.stringify(this.devices));
        this.$emit('onShowAllDevices', {data: this.devices});
    },

}
