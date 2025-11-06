let age = prompt("Enter your age ");
if(age<0 || age>200){
  console.log("Invalid Age");
}
else if(age >=18){
   console.log("You are Eligible to vote!");
}
else{
  console.log("You are not eligible!");
}