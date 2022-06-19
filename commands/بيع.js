/*CMD
  command: بيع
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
var type = myArray[2]
var numm = myArray[1]
var num = Number(numm)
var id = user.telegramid
let my = Libs.ResourcesLib.userRes("my");
let mymy = Libs.ResourcesLib.userRes("mymy");
let mymy2 = Libs.ResourcesLib.userRes("mymy2");
let mymy3 = Libs.ResourcesLib.userRes("mymy3");
let mymy4 = Libs.ResourcesLib.userRes("mymy4");
let mymy5 = Libs.ResourcesLib.userRes("mymy5");

if(type === "فندق"){
  if(num > mymy.value()){
    
    Bot.sendMessage("ما عندك هل عدد كلة ! ")
    return
    }
    var add = num * 130000
    mymy.remove(num)
    my.add(add)
    Bot.sendMessage(" ✸ تم بيع  " + num + "فندق " + " بسعر " + add + " $ 💰 ")
    Bot.runCommand("ارباحي")
  }
  
  if(type === "عقارات"){
  if(num > mymy2.value()){
    
    Bot.sendMessage("ما عندك هل عدد كلة ! ")
    return
    }
    var add = num * 480000
    mymy2.remove(num)
    my.add(add)
    Bot.sendMessage(" ✸ تم بيع  " + num + "عقارات " + " بسعر " + add + " $ 💰 ")
    Bot.runCommand("ارباحي")
  }
  if(type === "مطار"){
  if(num > mymy3.value()){
    
    Bot.sendMessage("ما عندك هل عدد كلة ! ")
    return
    }
    var add = num * 1450000
    mymy3.remove(num)
    my.add(add)
    Bot.sendMessage(" ✸ تم بيع  " + num + "مطار " + " بسعر " + add + " $ 💰 ")
    Bot.runCommand("ارباحي")
  }
  
  
  if(type === "مول"){
  if(num > mymy4.value()){
    
    Bot.sendMessage("ما عندك هل عدد كلة ! ")
    return
    }
    var add = num * 9500000
    mymy4.remove(num)
    my.add(add)
    Bot.sendMessage(" ✸ تم بيع  " + num + "مول " + " بسعر " + add + " $ 💰 ")
    Bot.runCommand("ارباحي")
  }
  
  
  
  
  
