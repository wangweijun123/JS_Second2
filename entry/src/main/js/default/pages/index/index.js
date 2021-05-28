import router from '@system.router';
export default {
    data: {
        title: "",
        headTitle: "Capture ",
        paragraphFirst: 'Capture the beauty of ',
        paragraphSecond: 'Reflecting the purity of nature, the innovative design upgrades your visual entertainment and ergonomic comfort. Effortlessly capture what you see and let it speak for what you feel.',
        // 绝对路劲
        middleImage: "/common/meinv.jpg",
        zanImagePressed: "/common/zan_pressed.jpg",
        zanImageNormal: "/common/zan_normal.jpg",
        isZan:false,
        number:0,
        inputValue: "",
        isCommit:false,
        persons:[],
        itemStyle:['color-red', 'color-blue', 'color-ff']
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    updateValue(e){
        console.info("update value: " + e.text);
        this.inputValue = e.text;
    },
    submitCommit() {
        this.isCommit = !this.isCommit;
        console.info("submitCommit value: " + this.inputValue);
    },
    clickZan() {
        console.info("update clickZan: ");
        this.number = this.number + 1;
        this.isZan = !this.isZan;
//        this.persons = ['a', 'b', 'c'];
        this.persons = [{index:0, name:'x00000'}, {index:1, name:'x11111'}, {index:2, name:'x22222'}];
    },
    /* js界面 跳转 js界面*/
    launch() {
        router.push({
            uri: 'pages/detail/detail',
        });
    }
}
