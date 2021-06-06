export default {
    data: {
        text: 'I am root!',
        persons: [],
        getBgColor: function(index) {
            if (index % 2 == 0) {
                return 'item-bg';
            } else {
                return 'item-bg2';
            }
        },
    },
    onInit() {
        setTimeout(()=>{
            for(var i=0; i<10; i++) {
                let person = {};
                person.index = i;
                person.name = 'w' + i;
                this.persons.push(person);
            }

        }, 100);
    },

    onItemClick(person) {
        console.info("onItemClick "+JSON.stringify(person));
    },
    touchstart(e) {
        console.info("touchstart -->" + e)
    },
    onlongpress(e) {
        console.info("onlongpress -->" + e)
    }

}
