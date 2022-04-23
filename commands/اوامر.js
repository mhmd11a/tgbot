/*CMD
  command: اوامر
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

Bot.sendInlineKeyboard([ {title: "حسابي", command: "حسابي" }, {title: "فلوسي", command: "فلوسي"}, {title: "راتب", command: "راتب" }, {title: "توب", command: "توب" }, {title: "استثمار بكامل فلوسك", command: "استثمار كامل" },  ], "اوامر بشكل مختصر لك ❤️ ")
