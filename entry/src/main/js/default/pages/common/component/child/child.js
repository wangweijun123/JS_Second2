// child.js
export default {
    data: {
        showObj: false,
        text: 'I am child component!',
    },
    childClicked () {
        this.showObj = !this.showObj;
        console.info('child component get parent text');
        console.info('${this.$parent().text}');
        console.info('child component get root text');
        console.info('${this.$root().text}');
    },
}