/*CMD
  command: ارباحي
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
let coin = Libs.ResourcesLib.userRes("mymy");

let coin2 = Libs.ResourcesLib.userRes("mymy2");
let coin3 = Libs.ResourcesLib.userRes("mymy3");

let coin4 = Libs.ResourcesLib.userRes("mymy4");

  
  var all1 = coin.value() * 2500
  var all2 = coin2.value() * 5000
  var all3 = coin3.value() * 7500
  var all4 = coin4.value() * 10000
  var allcash = all1 + all2 + all3 + all4
  
  my.growth.add({value: allcash, interval:1200 });

    Bot.sendMessage(" ↢ ارباحك من الفنادق ⇜ " + all1 + " $ " + "\n\n" + " ↢ ارباحك من العقارات ⇜   " + all2 + " $ " + "\n\n" + " ↢ ارباحك من المطارات ⇜ " + all3 + " $  " + "\n\n" + " ↢ ارباحك من المولات ⇜  " + all4 + "\n\n\n" + " ↢ كل 20 دقيقة تجيك " + allcash + " $  💰 " 
    
    );
  
  
  

