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
const myArray = text.split(" ")
var type = myArray[1]
var to = myArray[3]
let my = Libs.ResourcesLib.userRes("my")
var coin = my.value()
var t1 = "⇜ تم شراء "
var t2 = " بنجاح ! ✅"
var t3 = "⇜ تم خصم"
var t4 = "⇜ تحتاج"
var t5 = "دولار 💵 لشراء"
var numcar = Libs.Random.randomInt(1, 1000000)
var namecar = Libs.Random.randomInt(1, 6)
let options = { reply_to_message_id: request.message_id }

// or for user id
let list = new List({ name: "car", user_id: user.id })

//rendom
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

function generateString(length) {
  let result = " "
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}
var typee = generateString(namecar)
var text5 =
  t1 +
  " سيارة 🏎️ " +
  t2 +
  "\n" +
  t3 +
  " 50,000,000 $  دولار 💵" +
  "\n" +
  "⇜ نوعها  " +
  typee +
  " 🏎️ " +
  "\n" +
  "⇜ رقمها  " +
  numcar

//random
let mymy = Libs.ResourcesLib.userRes("mymy")
let mymy2 = Libs.ResourcesLib.userRes("mymy2")
let mymy3 = Libs.ResourcesLib.userRes("mymy3")
let mymy4 = Libs.ResourcesLib.userRes("mymy4")
let mymy5 = Libs.ResourcesLib.userRes("mymy5")
let mymy6 = Libs.ResourcesLib.userRes("mymy6")

if (type === "فندق" && coin > 150000) {
  if (mymy.value() === 100) {
    Bot.sendMessage(
      "⇜  وصلت لحدك ! \n" +
        "⇜ اشتريت 100 فندق 🏨\n" +
        "⇜ ارباحك وصلت 750,000$ كل 60 دقيقة 💰",
      options
    )
    return
  }
  var numf = Number(mymy.value()) + 1
  Bot.sendMessage(
    t1 +
      " فندق 🏢 " +
      t2 +
      "\n" +
      t3 +
      " 150,000 $  دولار 💵" +
      "\n" +
      "⇜ عدد الفنادق الان " +
      numf +
      " 🏢 " +
      "\n" +
      "⇜ لبدأ استلام الارباح ، ارسل `ارباحي` 💰",
    options
  )
  mymy.add(1)
  my.remove(150000)
  Bot.runCommand("vttfvvtf " + 150000)
} else {
  if (coin < 150000 && type === "فندق") {
    Bot.sendMessage(t4 + " 150,000 " + t5 + " فندق " + "!! ❌", options)
  }
}
if (type === "بيتكوين" || type === "ب") {
  Bot.runCommand("bitc")
} else {
}
if (type === "عقار" && coin > 500000) {
  if (mymy2.value() === 150) {
    Bot.sendMessage(
      "⇜  وصلت لحدك ! \n" +
        "⇜ اشتريت 150 عقار 🏨\n" +
        "⇜ ارباحك وصلت 2,250,000$ كل 60 دقيقة 💰",
      options
    )
    return
  }
  var numf2 = Number(mymy2.value()) + 1
  Bot.sendMessage(
    t1 +
      " عقار 🗺️ " +
      t2 +
      "\n" +
      t3 +
      " 500,000 $  دولار 💵" +
      "\n" +
      "⇜ عدد العقارات الان " +
      numf2 +
      " 🗺️ " +
      "\n" +
      "⇜ لبدأ استلام الارباح ، ارسل `ارباحي` 💰",
    options
  )
  mymy2.add(1)
  my.remove(500000)
  Bot.runCommand("vttfvvtf " + 500000)
} else {
  if (coin < 500000 && type === "عقار") {
    Bot.sendMessage(t4 + " 500,000 " + t5 + " عقار " + "!! ❌", options)
  }
}
if (type === "قطار" && coin > 1000000) {
  if (mymy6.value() === 200) {
    Bot.sendMessage(
      "⇜  وصلت لحدك ! \n" +
        "⇜ اشتريت 150 قطار 🏨\n" +
        "⇜ ارباحك وصلت 4,500,000$ كل 60 دقيقة 💰",
      options
    )
    return
  }
  var numf = Number(mymy6.value()) + 1
  Bot.sendMessage(
    t1 +
      " قطار 🚅 " +
      t2 +
      "\n" +
      t3 +
      " 1,000,000 $  دولار 💵" +
      "\n" +
      "⇜ عدد القطارات الان " +
      numf +
      " 🚅 " +
      "\n" +
      "⇜ لبدأ استلام الارباح ، ارسل `ارباحي` 💰",
    options
  )
  mymy6.add(1)
  my.remove(1000000)
  Bot.runCommand("vttfvvtf " + 1000000)
} else {
  if (coin < 1000000 && type === "قطار") {
    Bot.sendMessage(t4 + " 1,000,000 " + t5 + " قطار " + "!! ❌", options)
  }
}
if (type === "مطار" && coin > 1500000) {
  if (mymy3.value() === 250) {
    Bot.sendMessage(
      "⇜  وصلت لحدك ! \n" +
        "⇜ اشتريت 200 مطار 🏨\n" +
        "⇜ ارباحك وصلت 7,500,000$ كل 60 دقيقة 💰",
      options
    )
    return
  }

  var numf3 = Number(mymy3.value()) + 1
  Bot.sendMessage(
    t1 +
      " مطار 🛫 " +
      t2 +
      "\n" +
      t3 +
      " 1,500,000 $  دولار 💵" +
      "\n" +
      "⇜ عدد المطارات الان " +
      numf3 +
      " 🛫 " +
      "\n" +
      "⇜ لبدأ استلام الارباح ، ارسل `ارباحي` 💰",
    options
  )
  mymy3.add(1)
  my.remove(1500000)
  Bot.runCommand("vttfvvtf " + 1500000)
} else {
  if (coin < 1500000 && type === "مطار") {
    Bot.sendMessage(t4 + " 10,000,000 " + t5 + " مطار " + "!! ❌", options)
  }
}

if (type === "مول" && coin > 10000000) {
 if (mymy4.value() === 300) {
    Bot.sendMessage(
      "⇜  وصلت لحدك ! \n" +
        "⇜ اشتريت 300 مول 🏢\n" +
        "⇜ ارباحك وصلت 11,250,000$ كل 60 دقيقة 💰",
      options
    )
    return
  }
  var numf4 = Number(mymy4.value()) + 1
  Bot.sendMessage(
    t1 +
      " مول 🏢 " +
      t2 +
      "\n" +
      t3 +
      " 10,000,000 $  دولار 💵" +
      "\n" +
      "⇜ عدد المولات الان " +
      numf4 +
      " 🏬 " +
      "\n" +
      "⇜ لبدأ استلام الارباح ، ارسل `ارباحي` 💰",
    options
  )
  mymy4.add(1)
  my.remove(10000000)
  Bot.runCommand("vttfvvtf " + 10000000)
} else {
  if (coin < 10000000 && type === "مول") {
    Bot.sendMessage(t4 + " 10,000,000 " + t5 + " مول " + "!! ❌", options)
  }
}
//100m
if (type === "مول100" && coin > 1000000000) {
 if (mymy4.value() > 200) {
    Bot.sendMessage(
      "⇜  جرب تشتري مفرد ! \n" +
        "⇜ اشتريت اكثر 200  مول 🏢\n" ,
      options
    )
    return
  }
  mymy4.add(100)

  Bot.sendMessage(
    t1 +
      " مول 100 🏢 " +
      t2 +
      "\n" +
      t3 +
      " 1,000,000,000 $  دولار 💵" +
      "\n" +
      "⇜ عدد المولات الان " +
      mymy4.value() +
      " 🏬 " +
      "\n" +
      "⇜ لبدأ استلام الارباح ، ارسل `ارباحي` 💰",
    options
  )

  my.remove(1000000000)
  Bot.runCommand("vttfvvtf " + 1000000000)
} else {
  if (coin < 1000000000 && type === "مول100") {
    Bot.sendMessage(t4 + " 1,000,000,000 " + t5 + " 100 مول " + "!! ❌")
  }
}
//100m
var key = generateString(10)
if (type === "سيارة" && coin > 50000000) {
  User.setProperty({
    name: key,
    value: {
      name: "سيارة ",
      type: typee + " " + numcar,
      key: key,
      coin: 50000000
    },
    type: "json",
    list: list
  })

  Bot.sendMessage(text5)
  mymy5.add(1)

  my.remove(50000000)
  Bot.runCommand("vttfvvtf " + 50000000)
  var idd = "احصائيات"
  let a3 = Libs.ResourcesLib.userRes("a3")
  let a33 = Libs.ResourcesLib.anotherUserRes("a3", idd)
  a3.add(50000000)
  a33.add(50000000)
} else {
  if (coin < 50000000 && type === "سيارة") {
    Bot.sendMessage(t4 + " 50,000,000 " + t5 + " سيارة " + "!! ❌", options)
  }
}

