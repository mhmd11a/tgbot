/*CMD
  command: شراء
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
var type = myArray[1]
var to = myArray[3]
let my = Libs.ResourcesLib.userRes("my");
var coin = my.value();
var text1 = "استثمرت بشراء فندق !\n\n " + "كل 20 دقيقة تجيك 2500 الف دولار " 
var text2 = "استثمرت بشراء عقار !\n\n " + "كل 20 دقيقة تجيك 5000 الف دولار " 
var text3 = "استثمرت بشراء مطار !\n\n " + "كل 20 دقيقة تجيك 7500 الف دولار " 
var text4 = "استثمرت بشراء مول !\n\n " + "كل 20 دقيقة تجيك 10000 الف دولار " 
var done = "تم خصم من رصيدك ☜ " 
let options = { reply_to_message_id: request.message_id};
let mymy = Libs.ResourcesLib.userRes("mymy");
let mymy2 = Libs.ResourcesLib.userRes("mymy2");
let mymy3 = Libs.ResourcesLib.userRes("mymy3");
let mymy4 = Libs.ResourcesLib.userRes("mymy4");

if(type === "فندق" && coin > 150000){
  Bot.sendMessage(text1);
  Bot.sendMessage(done + " 150,000 $ ", options);
  mymy.add(1)

    Bot.sendMessage("ارسل `ارباحي` لبدا في استلام الارباح");
  my.remove(150000)

  

  
  }else{
  if(coin < 150000 && type === "فندق"){
    Bot.sendMessage("الاستثمار بلفندق تحتاج 150 الف دولار");

    }
    }
    
if(type === "عقارات" && coin > 500000){
  Bot.sendMessage(text2);
  Bot.sendMessage(done + " 500,000 $ ", options);
  mymy2.add(1)
Bot.sendMessage("ارسل `ارباحي` لبدا في استلام الارباح");
  
  my.remove(500000)
  }else{
  if(coin < 500000 && type === "عقارات"){
    Bot.sendMessage("الاستثمار بلعقارات تحتاج 500 الف دولار");

    }}
    
    
    if(type === "مطار" && coin > 1500000){
  Bot.sendMessage(text3);
  Bot.sendMessage(done + " 1,500,000 $ ", options);
  mymy3.add(1)
  
  Bot.sendMessage("ارسل `ارباحي` لبدا في استلام الارباح");
  my.remove(1500000)
  }else{
  if(coin < 1500000 && type === "مطار"){
    Bot.sendMessage("الاستثمار بلمطار تحتاج  مليون و 500 الف دولار");

    }
    }
    


if(type === "مول" && coin > 10000000){
  Bot.sendMessage(text4);
  Bot.sendMessage(done + " 10,000,000 $ ", options);
  mymy4.add(1)
  Bot.sendMessage("ارسل `ارباحي` لبدا في استلام الارباح");
  
  my.remove(10000000)
  }else{
  if(coin < 10000000 && type === "مول"){
    Bot.sendMessage("الاستثمار بلمول تحتاج عشرة ملايين دولار ");

    }
    }
    

 
