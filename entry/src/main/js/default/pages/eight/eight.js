export default {
    data: {
        text: 'I am root!',
        persons:[
                {id:1, gender:'man', age:47, name:'s1'},
                {id:2, gender:'woman', age:25, name:'s2'},
                {id:3, gender:'man', age:14, name:'s3'},
        ]
    },
    onItemClick(person) {
        console.info("onItemClick "+JSON.stringify(person));
    },

}
