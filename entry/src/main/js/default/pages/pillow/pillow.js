// root.js
export default {
    data: {
        text: 'I am root!',
        servers:[
                {title:'111', subTitle:47},
                {title:'222', subTitle:25},
        ],
        persons:[
                {gender:'1', age:47},
                {gender:'2', age:25},
                {gender:'3', age:89},
                {gender:'4', age:47},
                {gender:'5', age:25},
                {gender:'6', age:89}
        ],
    },
    onInit() {
        console.info("method onInit");
        while (this.persons.length > 4) {
            this.persons.pop();
        }
    },
    testArr() {
        console.info("method testArr");
        while (this.persons.length > 4) {
            this.persons.pop();
        }
    },
    methodInRootJS() {
        console.info("method int root js");
    },
    onItemClick(person) {
        console.info("onItemClick ..."+JSON.stringify(person));
    }
}
