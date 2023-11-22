



function calci(){
let day=document.getElementById("day").value;
let month=document.getElementById("month").value;
let year=document.getElementById("year").value;
let bDate=new Date(year,month,day);
let pDate=new Date();
let pyear=pDate.getFullYear();
let pmonth=pDate.getMonth()+1;
let pday=pDate.getDate();    
let days=pday-day;
days=Math.abs(days);
if((day==""||month==""||year=="")||(day>31||day<=0||month>12||month<=0)||(year>pyear)||(day>28 && month==4)){
    
    document.getElementById("error").style.display="flex";
    document.getElementById("inc").style.color="red";
    document.getElementById("day").style.border="1px solid red";
    document.getElementById("month").style.border="1px solid red";
    document.getElementById("year").style.border="1px solid red";

}else{
document.getElementById("ry").innerHTML=`${pyear-year}`;
document.getElementById("rm").innerHTML=`${pmonth-month}`;
document.getElementById("rd").innerHTML=`${days}`;
}

}

document.getElementById("year").addEventListener('change',calci);

