/*CMD
  command: vttfvvtf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: احصائيات
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = user.telegramid
var text = message
const myArray = text.split(" ")
let mycoin = Number(myArray[1])
var idd = "احصائيات"
let a1 = Libs.ResourcesLib.userRes("a1")
let a11 = Libs.ResourcesLib.anotherUserRes("a1", idd)
a1.add(mycoin)
a11.add(mycoin)

