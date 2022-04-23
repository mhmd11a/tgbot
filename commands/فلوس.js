/*CMD
  command: فلوس
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ");
var usr = myArray[1]

let res1 = Libs.ResourcesLib.anotherUserRes("my", 904893551);
let res2 = Libs.ResourcesLib.anotherUserRes("my", 1404750206);
let res3 = Libs.ResourcesLib.anotherUserRes("my", 1772199373);
let res4 = Libs.ResourcesLib.anotherUserRes("my", 1045723242);
let res5 = Libs.ResourcesLib.anotherUserRes("my", 1587047844);
let res6 = Libs.ResourcesLib.anotherUserRes("my", usr);
var g = "g"


  if (usr === "@mh_azh"){
var textme = "⇜ فلوسه ↢ ( " + res1.value() + " دولار 💸 )"
           Bot.sendMessage(textme);
           var g = "o"
           }
 
   if (usr === "@NG_11"){
     var textme = "⇜ فلوسه ↢ ( " + res2.value() + " دولار 💸 )"
Bot.sendMessage(textme);
var g = "o"

     }
 
   if (usr === "@Hassanein_863"){
var textme = "⇜ فلوسه ↢ ( " + res3.value() + " دولار 💸 )"
    Bot.sendMessage(textme);
    var g = "o"
 }
 
   if (usr === "@yoseph199"){
var textme = "⇜ فلوسه ↢ ( " + res4.value() + " دولار 💸 )"
    Bot.sendMessage(textme);
    var g = "o"
     }
 
   if (usr === "@niega"){
var textme = "⇜ فلوسه ↢ ( " + res5.value() + " دولار 💸 )"
    Bot.sendMessage(textme);
    var g = "o"
  }
  
if (g === "g"){
  var textme = "⇜ فلوسه ↢ ( " + res6.value() + " دولار 💸 )"
    Bot.sendMessage(textme);

  }
