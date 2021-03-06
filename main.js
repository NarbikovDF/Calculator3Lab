var vue = new Vue({
    el: '#app',
    data: {
        result: '',
        numbers: [1,2,3,4,5,6,7,8,9,0,'.'],
        operations: ['+','-','*','/'],
    },
    methods: {
        input: function(char) {
            this.result+=char;
        },
        clear: function() {
            this.result = '';
        },
        calc: function() {
            this.result = eval(this.result);
        },
        back: function() {
            this.result = this.result.slice(0, -1);
        }
    }
})