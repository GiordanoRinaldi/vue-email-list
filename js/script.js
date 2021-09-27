const app = new Vue({
    el: "#root",
    data: {
        mailList: [],
    },
    methods: {

    },
    mounted(){
        for (let i = 0; i < 10; i++){
            let mail = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => ( this.mailList.push(response.data.response) ));

        };
        

        console.log(this.mailList)
    }
})