
// grading system

function grade(score){

if(score>=90){
    console.log("+A");

}else if(score<=89 && score>=80){
    console.log("+B");

}else if(score<=79 && score>=60){
    console.log("+C");

}else if(score<=59 && score>=33){
    console.log("+D");

}else{
    console.log("-F");
}

}
 grade(90);
 grade(89);
 grade(79);
 grade(59);
 grade(39);
 grade(33);
 grade(28);