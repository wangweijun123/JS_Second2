// comp.js
export default {
    /*data: {
        showObj: true,
    },*/
    props: {
        showObj: true,
    },
    onInit() {
        console.info("onInit  showObj: "+this.showObj);
        this.$watch('showObj', 'onPropertyChange');
    },
    onPropertyChange(newV, oldV) {
        console.info('showObj 属性变化 ' + newV + ' ' + oldV);
        this.$emit("syncChildState", {"showObj":newV});
    },
    childClicked () {
        console.info("childClicked -->改变前 "+this.showObj);
        // 发送事件告诉使用的组件, 注意名字(在父组件hml定义的方法名)
//        this.$emit('eventType1');
        this.$emit('cancleButton', {"age":18});
        this.showObj = !this.showObj;
        console.info("childClicked -->改变后 "+this.showObj);
    },

    childPreButton() {
        console.info("childClicked -->");
        this.$emit('childPreButton');
    }
}
