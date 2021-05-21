export default {
    onCreate() {
        console.info('AceApplication onCreate');
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    },
    globalData:{
        appData: 'appData',
        appVersion: '2.0',
    },
    globalMethod() {
        console.info('This is a global method!');
        this.globalData.appVersion = '3.0'
    }
};
