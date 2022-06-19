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
var numcar = Libs.Random.randomInt(1, 1000000); 
var namecar = Libs.Random.randomInt(2, 4); 
var done = "تم خصم من رصيدك ☜ " 
let options = { reply_to_message_id: request.message_id};


// or for user id
let list = new List({ name: "car", user_id: user.id })

//rendom
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
var typee = generateString(namecar)
var text5 = " اشتريت سيارة فراري !\n\n " + " نوعها  " + typee

//random
let mymy = Libs.ResourcesLib.userRes("mymy");
let mymy2 = Libs.ResourcesLib.userRes("mymy2");
let mymy3 = Libs.ResourcesLib.userRes("mymy3");
let mymy4 = Libs.ResourcesLib.userRes("mymy4");
let mymy5 = Libs.ResourcesLib.userRes("mymy5");







if(type === "فندق" && coin > 150000){
  if(mymy.value() === 100){
    Bot.sendMessage("⇜  وصلت لحدك ! \n" + "⇜ اشتريت 100 فندق 🏨\n" + 
"⇜ ارباحك وصلت 250000$ كل 20 دقيقة 💰");
  return
  }
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
  if(mymy2.value() === 150){
    Bot.sendMessage("⇜  وصلت لحدك ! \n" + "⇜ اشتريت 150 عقار 🏨\n" + 
"⇜ ارباحك وصلت 750000$ كل 20 دقيقة 💰");
  return
  }
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
      if(mymy3.value() === 200){
    Bot.sendMessage("⇜  وصلت لحدك ! \n" + "⇜ اشتريت 200 مطار 🏨\n" + 
"⇜ ارباحك وصلت 1,500,000$ كل 20 دقيقة 💰");
  return
  }
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
    var key = generateString(10) 
    if(type === "سيارة-فراري" && coin > 50000000){
      
      
      User.setProperty({
  name: key,
  value: { name: "سيارة فراري ", type: typee + " " + numcar, key: key },
  type: "json",
  list: list
  
});


  Bot.sendMessage(text5);
  Bot.sendMessage(done + " 50,000,000 $ ", options);
  mymy5.add(1)
  Bot.sendMessage("ارسل `سياراتي` لمعرفة انواع السيارات الي عندك ");
  
  my.remove(50000000)
  }else{
  if(coin < 50000000 && type === "سيارة-فراري"){
    Bot.sendMessage("لشراء سيارة فراري تحتاج 50 مليون دولار ");

    }
    }
    

 

 
