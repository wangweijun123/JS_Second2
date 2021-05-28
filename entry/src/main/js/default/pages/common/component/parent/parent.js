// parent.js
export default {
    data: {
        showObj: false,
        text: 'I am parent component!',
    },
    parentClicked () {
        this.showObj = !this.showObj;
        console.info('parent component get parent text');

        let that = this;
        let parent = this.$parent();
        console.info("my print " + parent.text);
        parent.methodInRootJS();// 其实调用了root.js中的函数methodInRootJS

        console.info(`${this.$parent().text}`);// 取父控件js的data中数据,todo 调用函数

        console.info("parent component get child data");
        console.info(`${this.$child('selfDefineChild').extraData}`);

        let selfDefineChild = this.$child('selfDefineChild');
        selfDefineChild.animation();

        console.info("parent component get child function");
        console.info(`${this.$child('selfDefineChild').childClicked()}`);




    },
}
