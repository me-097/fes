

const plane1 = [[855,940,1030,1040,1130,1200,1420,1500,1605,1640],
                [910,1000,1010,1050,1130,1430,1505,1525,1550,1605,1610]];
const name = ["p-box1","p-box2","p-box3","p-box4","p-box5","p-box6","p-box7","p-box8","p-box9","p-box10","p-box11"];

function time_table(day){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let count = -1;
    for(let i=plane1[day-1].length-1; i>=0 ; i--){
        Number(plane1[day-1][i]) > Number(String(hours)+String(minutes<10? "0"+minutes : minutes))? count = i-1 : i = 0;
    }
    //Number(String(hours)+String(minutes<10? "0"+minutes : minutes))
    console.log(count);
    if(count >= 0){
        document.getElementsByClassName(name[count])[day-1].style.borderColor = "#00aaff";
        document.getElementsByClassName(name[count])[day-1].style.backgroundColor = "#4b75ff";
        document.getElementsByClassName(name[count])[day-1].style.color = "#ffffff";
    };
}
document.getElementsByClassName("day1")[0].style.borderColor = "#00aaff";
document.getElementsByClassName("day1")[0].style.backgroundColor = "#4b75ff";
document.getElementsByClassName("day1")[0].style.color = "#ffffff";
time_table(2);
document.getElementsByClassName("day1")[0].addEventListener("click",function(){
    document.getElementsByClassName("day1")[0].style.borderColor = "#00aaff";
    document.getElementsByClassName("day1")[0].style.backgroundColor = "#4b75ff";
    document.getElementsByClassName("day1")[0].style.color = "#ffffff";
    document.getElementsByClassName("day2")[0].style.borderColor = "#9f9f9f";
    document.getElementsByClassName("day2")[0].style.backgroundColor = "#ffffff";
    document.getElementsByClassName("day2")[0].style.color = "#000000";

    document.getElementsByClassName("time-table2")[0].style.visibility = "collapse";
    document.getElementsByClassName("time-table2")[0].style.display = "none";
    document.getElementsByClassName("time-table1")[0].style.visibility = "visible";
    document.getElementsByClassName("time-table1")[0].style.display = "block";
});
document.getElementsByClassName("day2")[0].addEventListener("click",function(){
    document.getElementsByClassName("day2")[0].style.borderColor = "#00aaff";
    document.getElementsByClassName("day2")[0].style.backgroundColor = "#4b75ff";
    document.getElementsByClassName("day2")[0].style.color = "#ffffff";
    document.getElementsByClassName("day1")[0].style.borderColor = "#9f9f9f";
    document.getElementsByClassName("day1")[0].style.backgroundColor = "#ffffff";
    document.getElementsByClassName("day1")[0].style.color = "#000000";

    document.getElementsByClassName("time-table1")[0].style.visibility = "collapse";
    document.getElementsByClassName("time-table1")[0].style.display = "none";
    document.getElementsByClassName("time-table2")[0].style.visibility = "visible";
    document.getElementsByClassName("time-table2")[0].style.display = "block";
});