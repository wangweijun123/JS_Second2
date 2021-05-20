// xxx.js
export default {
    data: {
        array: [
                {id: 1, name: 'jack', age: 18},
                {id: 2, name: 'tony', age: 18},
        ],
        persons:[
                {id:1, gender:'man', age:47},
                {id:2, gender:'woman', age:25},
                {id:3, gender:'man', age:14},
        ]

    },
    changeText: function() {
        this.array.pop();
        /*if (this.array[1].name === "tony"){
            console.info("index 1 ")
            this.array.splice(1, 1, {id:2, name: 'Isabella', age: 18});
        } else {
            this.array.splice(2, 1, {id:3, name: 'Bary', age: 18});
        }*/
    },
}