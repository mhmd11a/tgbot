/*CMD
  command: btutttb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: احصائيات

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var id = user.telegramid
var text = message
const myArray = text.split(" ")
let mycoin = Number(myArray[1])
var idd = "احصائيات"
let a2 = Libs.ResourcesLib.userRes("a2")
let a22 = Libs.ResourcesLib.anotherUserRes("a2", idd)

a2.add(mycoin)
a22.add(mycoin)

