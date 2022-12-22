const { createApp } = Vue;

createApp({
    data() {
        return {
            namesList: [],
            inputName: '',
            nNames: 10,
            isNameInList: false,
        }
    },
    methods: {
        setNames(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                .then(result => {
                    this.namesList.push(result.data.response);
                    console.log(result.data.response);
                })
                .catch(error => {
                    console.warn(error);
                })
                .then(()=>{

                })
        },
        checkName(){
            this.isNameInList = (this.namesList.includes(this.inputName));
        }
    },
    created() {
        for (let i = 0; i < this.nNames; i++) {
            this.setNames();            
        }
    },
}).mount('#app');