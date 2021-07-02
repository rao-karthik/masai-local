class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if(this.items.length == 0) return "underflow";
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
      return this.items.length == 0;
    }
    clear() {
        return this.itsms = [];
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}

function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let N = +input[0];

    let master = new Queue;
    let club1 = new Queue;
    let club2 = new Queue;
    let club3 = new Queue;
    let club4 = new Queue;

    for (let i = 1; i <= N; i++){
        let [op, club, rollNo] = input[i].trim().split(" ");
        if(op === 'E'){
            if(club == 1){
                if (checkClub(master, club)){
                    club1.enqueue(rollNo);
                }
                else {
                    club1.enqueue(rollNo);
                }
                if(!checkClub(master, club)){
                    master.enqueue(club);
                    master.print()
                }
            }
            else if(club == 2){
                if (checkClub(master, club)){
                    club2.enqueue(rollNo);
                }
                else {
                    club2.enqueue(rollNo);
                }
                if(!checkClub(master, club)){
                    master.enqueue(club);
                }
            }
            else if(club == 3){
                if (checkClub(master, club)){
                    club3.enqueue(rollNo);
                }
                else {
                    club3.enqueue(rollNo);
                }
                if(!checkClub(master, club)){
                    master.enqueue(club);
                }
            }
            else if(club === 4){
                if (checkClub(master, club)){
                    club4.enqueue(rollNo);
                }
                else {
                    club4.enqueue(rollNo);
                }
                if(!checkClub(master, club)){
                    master.enqueue(club);
                }
            }
        }
        else if(op === 'D'){
            const masterFront = master.front();
            if(masterFront == 1){
                const club1Front = club1.front();
                // console.log(1 + " " + club1Front + " " + club1.size())
                club1.dequeue();
                if(club1.isEmpty()){
                    master.print();
                    master.dequeue();
                }
            }
            if(masterFront == 2){
                const club2Front = club2.front();
                // console.log(2 + " " + club2Front + " " + club2.size())
                club2.dequeue();
                if(club2.isEmpty()){
                    master.dequeue();
                }
            }
            if(masterFront == 3){
                const club3Front = club3.front();
                // console.log(3 + " " + club3Front + " " + club3.size())
                club3.dequeue();
                if(club3.isEmpty()){
                    master.dequeue();
                }
            }
            if(masterFront == 4){
                const club4Front = club4.front();
                // console.log(4+ " " + club4Front + " " + club4.size())
                club4.dequeue();
                if(club4.isEmpty()){
                    master.dequeue();
                }
            }
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
}
else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}

function checkClub(master, club){
    for(let i = 0; i < master.length; i++){
        if(master[i] === club){
            return true;
        }
    }
    return false;
}