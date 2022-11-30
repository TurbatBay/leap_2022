

let on, sar, udur;

on = prompt("On oruulna uu")
sar = prompt("sar oruulna uu")
udur = prompt("udur oruulna uu")

if (sar < 12) {
    if (sar < 10) {
        sar = "0" + sar
    }
} else console.log("sar chin hudlaa bn")
if (sar == 2 && ((on % 4 == 0) && (on % 100 != 0) || (on % 400 == 0))) {
    if (udur <= 29) {
        if (udur < 10) {
            udur = "0" + udur
            console.log(on + " " + sar + " " + udur)
        } else console.log(on + " " + sar + " " + udur) 
    } else console.log("tiim udur bhgu")
        } else if (sar == 2 && ((on % 4 == 0) && (on % 100 != 0) && (on % 400 == 0))) {
            if (udur <= 28) {
                if (udur < 10) {
                    udur = "0" + udur
                    console.log(on + " " + sar + " " + udur)
                } else console.log(on + " " + sar + " " + udur)
    }
    else console.log("tiim udur bhgu")
    
}
else if(sar==1 && sar==3 && sar==5 && sar==7 && sar==8 && sar==10 && sar==12)
{ if(udur <= 31) {
    if (udur < 10) {
        udur = "0" + udur
        console.log(on + " " + sar + " " + udur)
    } else console.log(on + " " + sar + " " + udur)

} else console.log("udur chin hudlaa bn") }
else {if(udur <= 30) {
    if (udur < 10) {
        udur = "0" + udur
        console.log(on + " " + sar + " " + udur)
    }else console.log(on + " " + sar + " " + udur)
 } else console.log("tiim udur bhgu")
}
