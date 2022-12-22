const { createApp } = Vue;

createApp({
    data() {
        return {
            nums: [],
            sum: 0,
            min: '1',
            max: '100',
            nNums: '',
            inputPlaceholder: 'type the quantity(max 100) of numbers you want',
        }
    },
    methods: {
        getNumber(){
            if(Number.isNaN(parseInt(this.nNums, 10))){
                //reset
                this.nums = [];
                this.sum = 0;
                //error message in placeholder
                this.inputPlaceholder = 'a word can\'t define a quantity, retry';
            }
            else{
                axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min='+ this.min +'&max='+ this.max +'&items='+ parseInt(this.nNums, 10))
                .then(result => {
                    this.nums = result.data.response;
                    console.log(result.data.response);
                })
                .catch(error => {
                    console.warn(error);
                })
                .then(()=>{
                    console.log('done');
                    this.nums.forEach(num => {
                        this.sum += num;
                    });
                })
            }
            this.nNums = '';
        },
    },
}).mount('#app');