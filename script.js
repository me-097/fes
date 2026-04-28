

const plane1 = [855,940,1030,1040,1130,1200,1420,1500,1605,1640];
const name = ["p-box1","p-box2","p-box3","p-box4","p-box5","p-box6","p-box7","p-box8","p-box9","p-box10",]

function time_table(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let count = -1;
    for(let i=plane1.length-1; i>=0 ; i--){
        Number(plane1[i]) > Number(String(hours)+String(minutes<10? "0"+minutes : minutes))? count = i-1 : i = 0;
    }
    if(count >= 0){document.getElementsByClassName(name[count])[0].style.borderColor = "#00aaff"};
}
time_table();
