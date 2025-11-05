let password = "sakshi";
let attempts = 0;
let UserPassword;

while (attempts < 3) {
  UserPassword = prompt("Enter the password ");

  if (UserPassword === password) {
    console.log("Login Granted : ");
    break;
  }
  attempts++;
}
if (attempts === 3 && UserPassword !== password) {
  console.error("Account Locked! ");
}
