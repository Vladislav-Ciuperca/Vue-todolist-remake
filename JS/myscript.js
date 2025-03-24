const { createApp } = Vue

createApp({
    data() {
        return {
            stato:'',
            task:'',
            todoStuff: [
                {
                    "task": "lavare coscienza",
                    "state": 'done'
                },
                {
                    "task": "alzare le mani per goku",
                    "state": 'not'
                },
                {
                    "task": "odiare gli YT rewind",
                    "state": 'done'
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

            if (this.todoStuff[key].state === 'done') {
                this.todoStuff[key].state = 'not'

            }
            else if (this.todoStuff[key].state === 'not') {
                this.todoStuff[key].state = 'pending'
            }
            else {
                this.todoStuff[key].state = 'done'
            }

        },

        addTask(task,stato) {
           if(this.task && stato){
            console.log(task,stato);
            this.todoStuff.push({"task":task,"state":stato})
           }else{
            console.log("nono");
            
           }

        }
    },
    mounted() {


    }
}).mount('#app')

