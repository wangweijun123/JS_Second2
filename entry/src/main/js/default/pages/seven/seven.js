import prompt from '@system.prompt';
export default {
    data: {
        text: 'I am root!',
        persons:[
                {id:1, gender:'man', age:47, name:'s1'},
                {id:2, gender:'woman', age:25, name:'s2'},
                {id:3, gender:'man', age:14, name:'s3'},
        ]
    },
    methodInRootJS() {
        console.info("method int root js");
    },
    getCol(e) {
        const mygrid = this.$element('mygrid');
        console.info("mygrid.attr.columns : " + mygrid.attr.columns);
        console.info("mygrid.getColumns() : " + mygrid.getColumns());
        console.info("mygrid.nodeId : " + mygrid.nodeId);
        mygrid.getColumns(function (result) {
            prompt.showToast({
                message: e.target.id + ' result = ' + result,
                duration: 3000,
            });
        })
    },
    getColWidth(e) {
        this.$element('mygrid').getColumnWidth(function (result) {
            prompt.showToast({
                message: e.target.id + ' result = ' + result,
                duration: 3000,
            });
        })
    }
}
