let unit = 100;

function setup(){
    createCanvas(8*unit,8*unit);
    background("white");
    translate(4*unit,4*unit)
    generateSeq([],15);
}

function generateSeq(seq, level){
    if(level<=0){
        console.log(evaluate(seq, 2));
        return;
    }

    for(let d=0; d<2; d++){
        seq.push(d);
        generateSeq(seq, level-1);
        seq.pop();
    }
}

function evaluate(seq, base){
    let sum = math.complex(0, 0);
    const b = math.complex(-1, 1);
    for(let k in seq){//0~6が入る
        sum = math.add(sum, math.multiply(seq[k], math.pow(b, k))) ;//seq[0]=2の0乗
    }
    if(seq[10]==0 && seq[11]==0){
        fill("red");
        stroke("red");
    }else if(seq[10]==0 && seq[11]==1){
        fill("cyan");
        stroke("cyan");
    }else if(seq[10]==1 && seq[11]==0){
        fill("yellow");
        stroke("yellow");
    }else if(seq[10]==1 && seq[11]==1){
        fill("");
        stroke("green");
    }
    circle(2*sum.re, 2*sum.im, 1);
    return(sum);
}