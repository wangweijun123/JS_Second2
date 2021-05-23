// xxx.js
import router from '@system.router';
export default {
    data: {
        array: [
                {id: 1, name: 'jack', age: 18},
                {id: 2, name: 'tony', age: 18},
        ],
        persons:[
                {id:1, gender:'man', age:47},
                {id:2, gender:'woman', age:25},
                {id:3, gender:'man', age:14},
        ],
        isBtnDisable: false,
        appData: 'localData',
        appVersion:'1.0',
        myFunc : function(num) {
            console.info('这是定义在data中的函数');
            return num;
        },
        keyMap: {
            OS: 'HarmonyOS',
            Version: '2.0',
        },
    },
    onInit() {
       let num = this.myFunc(222)
        this.keyMap.OS = "modify";
       console.info(" num:"+num + " "+this.keyMap.OS)
    },
    changeText: function() {
        this.array.pop();
        /*if (this.array[1].name === "tony"){
            console.info("index 1 ")
            this.array.splice(1, 1, {id:2, name: 'Isabella', age: 18});
        } else {
            this.array.splice(2, 1, {id:3, name: 'Bary', age: 18});
        }*/
    },
    changeBtnDisable() {
        this.isBtnDisable = !this.isBtnDisable;
    },
    callGloabMethodAndData() {
        this.appData = this.$app.$def.globalData.appData;
        console.info("从app获取全局信息:" + this.appData);
        this.$app.$def.globalMethod();
    },
    jumpSixPage() {
        router.push({
            uri: 'pages/six/root'
        })
    }
}
