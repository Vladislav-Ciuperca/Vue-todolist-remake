const { createApp } = Vue

createApp({
    data() {
        return {
            todoStuff: [
                {
                    "task": "lavare coscienza",
                    "state": true
                },
                {
                    "task": "alzare le mani per goku",
                    "state": false
                },
                {
                    "task": "odiare gli YT rewind",
                    "state": true
                },
                {
                    "task": "piangere per i ninja della foglia caduti",
                    "state": 'pending'
                },
            ]
        }
    },
    methods: {
        
        changeState(key) {
                        
            console.log(this.todoStuff);
            
            if(this.todoStuff[key].state === true){
                this.todoStuff[key].state = false
                
            }
            else if(this.todoStuff[key].state === false){
                this.todoStuff[key].state = 'pending'
            }
            else{
                this.todoStuff[key].state = true
            }
           
        }
    },
    mounted(){

        
    }
}).mount('#app')

