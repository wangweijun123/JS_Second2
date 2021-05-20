import router from '@system.router';
export default {
    data: {
        // 父控件的状态变化会传给子控件，但是子控件不能作用父控件
        isFull: false,
        text: [{myIndex:0,content:'123'}, {myIndex:1,content:'456'}, {myIndex:2,content:'789'}],
        itemStyle:['color-red', 'color-blue', 'color-ff'],

        content: ['Hello World!', 'Welcome to my world!'],
        count: 5,
    },
    onInit(){

    },
    textClicked (params) {
        console.info("通知到了父hml -> " +params);
//        JSON.parse()
        console.info("通知到了父hml -> params.detail.age = " +params.detail.age);
        console.info("通知到了父hml -> " +params.type);
    },
    xxxxx() {
        console.info("通知到了父 xxxx");
    },
    syncChildState(params) {
        console.info("通知到了父hml -> params.detail.showObj = " +params.detail.showObj);
        this.isFull = params.detail.showObj;
    },
    changeValue() {
        console.info("parent Clicked -->改变前 "+this.isFull);

        this.isFull = !this.isFull;
        console.info("parent 改变了..." + this.isFull);
    },
    changeText(e) {
        console.info(e);
    },
    multiply(multiplier) {
        this.count = multiplier * this.count;
        console.info("this.count = " +this.count);
    },
    jumpFive() {
        router.push({
            uri: 'pages/five/five'
        });
    }
}
