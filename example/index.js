const { sum } = require("../lib/sum");

function run(){
    const res = sum(1, 100);
    console.log("res:", res);
}

run();