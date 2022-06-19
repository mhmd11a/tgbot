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


let my = Libs.ResourcesLib.userRes("my");
var id = user.telegramid
var coin = my.value()



  if (id === 1404750206){

    var ggg = 600
    var nog = " فلاح 👨🏻‍🌾 "
 }
 
   if (id === 904893551){

    var ggg = 3000
    var nog = " مبرمج 👨🏻‍💻 "

 }
 
   if (id === 1772199373){

    var ggg = 5000
    var nog = " طبيب 👨🏾‍⚕️ "

 }
 
   if (id === 1045723242){

    var ggg = 600
    var nog = " فلاح 👨🏻‍🌾 "
 }
 
   if (id === 1587047844){

    var ggg = 5000
    var nog = " طيار 👨🏼‍✈️ "

  }
  
  
    
  
  //hiiiiiiii
  
  let qqq = Libs.CooldownLib.user.getCooldown("راتب");


  

  let options = { reply_to_message_id: request.message_id };
  
  function onEnding(time){
var mycoin = ggg + coin
  Bot.sendMessage("اشعار ايداع " + request.from.first_name + "\n" + "المبلغ : " + ggg +" $ " + "\n" + " وضيفتك : " + nog + "\n" + " نوع العملية : اضافة راتب " + "\n" + "رصيدك حالياً : " + mycoin, options);
  my.add(ggg)

  return true; 
}

function onWaiting(waitTime){
  
  var qo = "قبل شوي استلمت راتب !\n\n" +"تعال بعد " + waitTime + " ثانية "
  
  Bot.sendMessage(qo, options);
}

    
      
Libs.CooldownLib.user.watch({

  name: "راتب",
  time: 600,
  onEnding: onEnding,
  onWaiting: onWaiting
})

          
          
              var text = "يتم اضافة رصيد لحسابك كل 10 دقائق\n " + "من 1000 الى 25,000 بشكل عشوائي"
 
if(id === 1404750206){
  
  var text = "يتم اضافة 600$ لحسابك كل 10 دقائق\n "
  }
  
  if(id === 904893551){
  
  var text = "يتم اضافة 10,000$ لحسابك كل 10 دقائق\n "
  }
  
  if(id === 1772199373){
  
  var text = "يتم اضافة 5000$ لحسابك كل 10 دقائق\n "
  
  }
  
  if(id === 1045723242){
  
  var text = "يتم اضافة 600$ لحسابك كل 10 دقائق\n "
  }
 
 if(id === 1587047844){
  var text = "يتم اضافة 5000$ لحسابك كل 10 دقائق\n "
  }

    
    
      
  
    
    

    
    
    
