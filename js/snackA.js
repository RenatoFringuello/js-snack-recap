const { createApp } = Vue;

createApp({
    data() {
        return {
            messageSent: '',
            chatMessages: [],
        }
    },
    methods: {
        addMessage(message,status){
            this.chatMessages.push({message:message, status:status});
            if(status === 'sent'){
                this.setReply();
                this.messageSent = '';
            }
        },
        setReply(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then(result => {
                    this.addMessage(result.data.response, 'received');
                    console.log(result.data.response);
                })
                .catch(error => {
                    console.warn(error);
                })
                .then(()=>{
                    console.log('done');
                })
        },
    },
}).mount('#app');