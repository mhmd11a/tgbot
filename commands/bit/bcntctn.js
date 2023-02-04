/*CMD
  command: bcntctn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: bit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let gg = JSON.parse(content)
Bot.setProperty({ name: "بيتكوين", value: Math.trunc(gg.result.price) })
Bot.sendMessage(
  "*" +
    "⇜ سعر البيتكوين الان " +
    Math.trunc(gg.result.price).toLocaleString() +
    " دولار 💵" +
    "*"
)

