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
        console.log(this.items);
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
        club = +club;
        rollNo = +rollNo;

        if(op === 'E'){
            if(club === 1){
                club1.enqueue(rollNo);
                let available = checkClub(master, club);
                if(!available){
                    master.enqueue(club);
                }
            }
            else if(club === 2){
                club2.enqueue(rollNo);
                let available = checkClub(master, club);
                if(!available){
                    master.enqueue(club);
                }
            }
            else if(club === 3){
                club3.enqueue(rollNo);
                let available = checkClub(master, club);
                if(!available){
                    master.enqueue(club);
                }
            }
            else if(club === 4){
                club4.enqueue(rollNo);
                let available = checkClub(master, club);
                if(!available){
                    master.enqueue(club);
                }
            }
        }

        else if (op === 'D'){
            let masterFront = master.front();
            let clubFront;
            if(masterFront === 1){
                clubFront = club1.front();
                club1.dequeue();

                if(club1.isEmpty()){
                    master.dequeue();
                }
                console.log(1 + " " + clubFront);
            }
            if(masterFront === 2){
                clubFront = club2.front();
                club2.dequeue();

                if(club2.isEmpty()){
                    master.dequeue();
                }
                console.log(2 + " " + clubFront);
            }
            if(masterFront === 3){
                clubFront = club3.front();
                club3.dequeue();

                if(club3.isEmpty()){
                    master.dequeue();
                }
                console.log(3 + " " + clubFront);
            }
            if(masterFront === 4){
                clubFront = club4.front();
                club4.dequeue();

                if(club4.isEmpty()){
                    master.dequeue();
                }
                console.log(4 + " " + clubFront);
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
    for(let i = 0; i < master.size(); i++){
        if(master.items[i] === club){
            return true;
        }
    }
    return false;
}