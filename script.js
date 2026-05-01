

const plane1 = [[855,940,1030,1040,1130,1200,1420,1500,1605,1640],
                [910,1000,1010,1050,1130,1430,1505,1525,1550,1605,1610]];
const name = ["p-box1","p-box2","p-box3","p-box4","p-box5","p-box6","p-box7","p-box8","p-box9","p-box10","p-box11"];

const day = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
console.log("Day:"+day,"Hours:"+hours,"Minutes:"+minutes,"TimeCode:"+String(hours)+String(minutes<10? "0"+minutes:minutes));

function select(n,num,color1,color2,color3){
    document.getElementsByClassName(n)[num].style.borderColor = color1;
    document.getElementsByClassName(n)[num].style.backgroundColor = color2;
    document.getElementsByClassName(n)[num].style.color = color3;
}

function display(n1,n2){
    document.getElementsByClassName(n1)[0].style.visibility = "collapse";
    document.getElementsByClassName(n1)[0].style.display = "none";
    document.getElementsByClassName(n2)[0].style.visibility = "visible";
    document.getElementsByClassName(n2)[0].style.display = "block";
    console.log("SelectDay:"+n2);
}
function time_table(day){
    let count = plane1[day-1].length-1;
    for(let i=plane1[day-1].length-1; i>=0 ; i--){
        Number(plane1[day-1][i]) > Number(String(hours)+String(minutes<10? "0"+minutes : minutes))? count = i-1 : i = 0;
    }
    //Number(String(hours)+String(minutes<10? "0"+minutes : minutes))
    if(count >= 0){
        select(name[count],day-1,"#00aaff","#4b75ff","#ffffff");
    };
    console.log("SelectContent:"+count);
}

if(day<=2){
    select("day"+String(day),0,"#00aaff","#4b75ff","#ffffff");
    time_table(Number(day));
    display("time-table"+String(day==1? 2:1),"time-table"+String(day==1? 1:2));
}
document.getElementsByClassName("day1")[0].addEventListener("click",function(){
    select("day1",0,"#00aaff","#4b75ff","#ffffff");
    select("day2",0,"#9f9f9f","#ffffff","#000000");
    display("time-table2","time-table1");
});
document.getElementsByClassName("day2")[0].addEventListener("click",function(){
    select("day2",0,"#00aaff","#4b75ff","#ffffff");
    select("day1",0,"#9f9f9f","#ffffff","#000000");
    display("time-table1","time-table2");
});