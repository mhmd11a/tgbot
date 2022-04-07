/*CMD
  command: راتب
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





var gg = Math.floor(Math.random() * 10);
let my = Libs.ResourcesLib.userRes("my");
var id = user.telegramid
var coin = my.value()

  if (gg === 1){

    var ggg = 15000
 }
 
   if (gg === 2){

    var ggg = 1000
 }
 
   if (gg === 3){

    var ggg = 2000
 }
 
   if (gg === 4){

    var ggg = 5000
 }
 
   if (gg === 5){

    var ggg = 7000
  }
  
  
    if (gg === 6){

    var ggg = 8000
  
  }
  
    if (gg === 7){

    var ggg = 9000
  }
    if (gg === 8){

    var ggg = 10000
  
  }
    if (gg === 9){

    var ggg = 11000
  }
  
  if(gg === 0){
  var ggg = 25000
  }
    
      

          
          
              
 
my.growth.add({value: ggg, interval:10 });
  
    
    
    let options = { reply_to_message_id: request.message_id };
  

            


 var text = " تم اضافة " + ggg + " " + "في حسابك\n " + "فلوسك حاليا : " + my.value()
    
    Bot.sendMessage(text, options);
    
