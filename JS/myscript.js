const { createApp } = Vue

createApp({
    data() {
        return {
            todoStuff:[
                {
                    "task":"lavare coscienza",
                    "state": true
                },
                {
                    "task":"alzare le mani per goku",
                    "state": false
                },
                {
                    "task":"odiare gli YT rewind",
                    "state": true
                },
                {
                    "task":"piangere per i ninja della foglia caduti",
                    "state": "pending"
                },
            ] 
        }
    },
    methods: {
        //   placeholder
    }
}).mount('#app')

