const accountId = 123456
let accountEmail = "nandini@google.com"
var passward = "12345"
accountCity ="Pune"


//accountId=2 not allowed for contant variables

accountEmail="veer@gmail.com"
passward="21231"
accountCity="aurangabad"


console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountEmail,accountId,accountCity,passward])

