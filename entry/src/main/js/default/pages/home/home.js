import router from '@system.router';
import common from '../common/common.js'

export default {
    data : {
        funArray:[
                {title:'文档上的简单列子', uri: "pages/index/index"},
                {title:'详情页', uri: "pages/detail/detail"},
                {title:'第三个js页面', uri: "pages/third/third"},
                {title:'第四个js页面', uri: "pages/fourth/fourth"},
                {title:'第五个js页面', uri: "pages/five/five"},
                {title:'第六个js页面(子控件与父控件交互)', uri: "pages/six/root"},
                {title:'高级ui(父控件控制子控件渲染)', uri: "pages/seven/seven"},
                {title:'智能枕头', uri: "pages/pillow/pillow"},
                {title:'列表', uri: "pages/eight/eight"},
                {title:'js页面跳转java页面FourthPageAbility', uri: "", page:'java'},

        ],
        plugResult: undefined,
        isRefreshing : false,
    },
    onItemClick(idx) {
        let obj = this.funArray[idx];
        console.info(idx + ", obj.page = "+obj.page);
        console.info("obj.page === 'java' ? "+(obj.page === 'java'));
        if (obj.page === 'java') {
            this.js2JavaPage();
        } else {
            console.info(obj.uri);
            router.push({
                uri: obj.uri,
                params:{

                }
            });
        }
    },
    js2JavaPage() {
        // bundleName, abilityName ,startAbilityCallback
        let bundleName = 'com.huawei.hiaceservice';
        let abilityName = 'com.huawei.hiaceservice.CalcInternalAbility';
        common.startAbility3(bundleName, abilityName, callbackData => {
            console.info('js2JavaPage chuan callback :' + callbackData);
            let jsonCallback = JSON.parse(callbackData);
            console.info('js2JavaPage chuan :' + jsonCallback);
        });
    },
    onRefresh(e) {
        console.info("refreshing : " + e.refreshing);
        // 这句话必须加
        this.isRefreshing = e.refreshing;
        if (e.refreshing) {
            // 下拉刷新加载数据
            this.loadData();
        }
    },
    onPulldown(e) {
        console.info("state:" + e.state);
    },
    loadData() {
        console.info("js MainAbility load ....");
        common.callRemoteService(result => {
            var ret = JSON.parse(result);
            console.info("js MainAbility ret :" + ret);
            console.info("js MainAbility ret.code :" + ret.code + ", abilityResult:" + ret.abilityResult);
            if (ret.code == 0) {
                console.info('MainAbility plus result is:' + JSON.stringify(ret.abilityResult));
                // 给变量设置，就可以刷新界面了
                this.plugResult = JSON.stringify(ret.abilityResult);
            } else {
                console.error('MainAbility plus error code:' + JSON.stringify(ret.code));
            }
            // 隐藏刷新进度条
            const refresh = this.$element('refresh');
            console.info("refresh :"+refresh);
            this.isRefreshing = false;
        });
        console.info("js MainAbility load finised");
    },


}
