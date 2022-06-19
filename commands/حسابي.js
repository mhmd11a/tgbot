/*CMD
  command: حسابي
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

var id = user.telegramid

if(id === 1404750206){
  
  var myo = "  👨🏻‍🌾 فلاح  "
  }
  
  if(id === 904893551){
  
  var myo = "مدير بنك 🏦 "
  }
  
  if(id === 1772199373){
  
  var myo = "طبيب 👨‍⚕ "
  }
  
  
  if(id === 1045723242){
  
  var myo = " فلاح 👨🏻‍🌾"
  }
  
  if(id === 1587047844){
  
  var myo = " طيار 👨🏻‍✈️ "
  }
  
  let my = Libs.ResourcesLib.userRes("my");
  let mymy = Libs.ResourcesLib.userRes("mymy");
  let mymy2 = Libs.ResourcesLib.userRes("mymy2");
  let mymy3 = Libs.ResourcesLib.userRes("mymy3");
  let mymy4 = Libs.ResourcesLib.userRes("mymy4");
  
var text = " حسابك في بنك 'One'\n\n" + "رقم حسابك ⇠ 📠  ```" + user.telegramid + "```\n\n" + " مفتاح  حسابك ⇠ 🔑  " + " `"+ user.id + "`" +  "\n\n" +  "نوع البطاقة  ⇠ 💳  " + " فيزا ون " + "\n\nوضيفتك ⇠👱🏼‍♂️ " + myo + "\n\n" + "رصيدك ⇠ 💰 " + my.value() + "$" + "\n\n" + " ✧ الاملاك " + "\n\n" + " ✧ الفنادق ⇠ " + mymy.value() + "\n" + " ✧ العقارات ⇠ " + mymy2.value() + "\n" + " ✧ المطارات ⇠ " + mymy3.value() + "\n" + " ✧ المولات ⇠ " + mymy4.value() 

let options = { reply_to_message_id: request.message_id };
  

Bot.sendMessage(text, options);

