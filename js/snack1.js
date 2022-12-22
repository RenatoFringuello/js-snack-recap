const { createApp } = Vue;

createApp({
    data() {
        return {
            redNums :[],
            greenNums : []
        }
    },
    methods: {
        getNumber(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then(result => {
                    if(result.data.response % 2 === 0){
                        //even
                        this.greenNums.push(result.data.response);
                    }
                    else{
                        //odd
                        this.redNums.push(result.data.response);
                    }
                })
                .catch(error => {
                    console.warn(error);
                })
                .then(()=>{

                })
        }
    },
}).mount('#app');