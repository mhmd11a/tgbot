/*CMD
  command: ثثر
  help: 
  need_reply: 
  auto_retry_time: 
  folder: قرض
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cooldown = Libs.CooldownLib.user.getCooldown("قرض")

Bot.sendMessage(cooldown.value())

