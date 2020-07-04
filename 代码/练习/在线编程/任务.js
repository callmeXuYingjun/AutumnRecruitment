class Queue {
    constructor() {
        this.queue = [];
        this.time = 0;
    }
    task(t, fn) {
        this.time += t;
        this.queue.push([fn, this.time]);
        return this;
    }
    start() {
        this.queue.forEach((item) => {
            setTimeout(() => {
                item[0]();
            }, item[1]);
        })
    }
}
 
new Queue()
    .task(1000, () => {
        console.log(1)
    })
    .task(1000, () => {
        console.log(2)
    })
    .task(1000, () => {
        console.log(3)
    })
    .start() 
