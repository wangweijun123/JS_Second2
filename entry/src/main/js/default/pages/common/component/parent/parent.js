// parent.js
export default {
    data: {
        showObj: false,
        text: 'I am parent component!',
    },
    parentClicked () {
        this.showObj = !this.showObj;
        console.info('parent component get parent text');
        console.info(`${this.$parent().text}`);
        console.info("parent component get child function");
        console.info(`${this.$child('selfDefineChild').childClicked()}`);
    },
}