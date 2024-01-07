document.write("45.checks two integer values and returns true if either one is 15 or if their sum or difference is 15."+"<br>");
function test45(a,b){
    if(a==15 || b==15){
        return true;
    }
    if(a+b==15 || Math.abs(a-b)==15){
        return true;
    }
    return false;
}
document.write("The numbers are :10,5 ,Ans :"+test45(10,5)+"<br>");
document.write("The numbers are :15,5 ,Ans :"+test45(15,5)+"<br>");
document.write("The numbers are :45,30 ,Ans :"+test45(45,30)+"<br><br>");