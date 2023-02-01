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

let options = { reply_to_message_id: request.message_id }
Bot.sendInlineKeyboard(
  [
    { title: "حسابي 📇", command: "حسابي" },
    { title: "فلوسي 💰", command: "فلوسي" },
    { title: "راتب 💸", command: "راتب" },
    { title: "توب 🧬", command: "توب" },
    { title: "ارباحي 💹", command: "ارباحي" },
    { title: "كم ممكن انخمط 😵", command: "cc" },
    { title: "سياراتي 🏎️", command: "سياراتي" },
    { title: "شراء فندق 🏢", command: "شراء فندق" },
    { title: "شراء عقار 🗺️", command: "شراء عقار" },
    { title: "شراء مطار 🛫", command: "شراء مطار" },
    { title: "شراء مول 🏢", command: "شراء مول" },
    { title: "  شراء 100 مول 🏢", command: "شراء مول100" },
    { title: "شراء سيارة 🏎️", command: "شراء سيارة" },
    { title: "استثمار بكامل فلوسك 💎", command: "استثمار كامل" }
  ],
  "اوامر بشكل مختصر لك ❤️ ",
  options
)

