/*CMD
  command: معلومات
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

var id = user.telegramid
var text = message
const myArray = text.split(" ");
var usr = myArray[1]
var to = myArray[3]

let res1 = Libs.ResourcesLib.anotherUserRes("my", 904893551);
let res2 = Libs.ResourcesLib.anotherUserRes("my", 1404750206);
let res3 = Libs.ResourcesLib.anotherUserRes("my", 1772199373);
let res4 = Libs.ResourcesLib.anotherUserRes("my", 1045723242);
let res5 = Libs.ResourcesLib.anotherUserRes("my", 1587047844);



var go1 = "◊ متفاعل " + "\n" + "◊ مبرمج" + "\n" + "◊ مؤسس 11A" + "\n" + "◊ مالك الاساطير " 

var text1 = " ✸حسابه\n\n" + "↢ فلوسه ⇜ " + res1.value() + " $ " + "\n\n" + "↢ ايدي حسابه ⇜ " + "```904893551```" + "\n\n" + "↢ وضيفتة ⇜ " + "مدير بنك 🏦 " + "\n\n\n" + " ✸ صفات اكتسبها    ╭[☉﹏☉]╮" + "\n\n" + go1
   
   var go2 = "◊ متفاعل " + "\n" + "◊ مبرمج" + "\n" + "◊ مؤسس UG " + "\n" 
   
var text2 = " ✸حسابه\n\n" + "↢ فلوسه ⇜ " + res2.value() + " $ " + "\n\n" + "↢ ايدي حسابه ⇜ " + "```1404750206```" + "\n\n" + "↢ وضيفتة ⇜ " + " فلاح 👨🏻‍🌾 " + "\n\n\n" + " ✸ صفات اكتسبها    ╭[☉﹏☉]╮" + "\n\n" + go2

var go3 = "◊ متوسط التفاعل " + "\n" + "◊ لاعب قنشن " + "\n" + "◊ يبيع  " + "\n" + "◊ اول من لعب قنشن" + "\n" + "◊ عضو من المختبرون🧪 "
var text3 = " ✸حسابه\n\n" + "↢ فلوسه ⇜ " + res3.value() + " $ " + "\n\n" + "↢ ايدي حسابه ⇜ " + "```1772199373```" + "\n\n" + "↢ وضيفتة ⇜ " + " طبيب 👨🏻‍⚕️ " + "\n\n\n" + " ✸ صفات اكتسبها    ╭[☉﹏☉]╮" + "\n\n" + go3


var go4 = "◊ متوسط التفاعل " + "\n" + "◊ يدز ميمز" + "\n" + "◊ مؤسس هواي كروبات" + "\n" + "◊ لاعب قنشن غني" + "\n" + "◊ يباع مقاطع 100 ساعة او اكثر " + "\n" + "◊ مختم نص انميات العالم"
var text4 = " ✸حسابه\n\n" + "↢ فلوسه ⇜ " + res4.value() + " $ " + "\n\n" + "↢ ايدي حسابه ⇜ " + "```1045723242```" + "\n\n" + "↢ وضيفتة ⇜ " + " فلاح 👨🏻‍🌾 " + "\n\n\n" + " ✸ صفات اكتسبها    ╭[☉﹏☉]╮" + "\n\n" + go4

var go5 = "◊ قليل التفاعل  " + "\n" + "◊ لاعب قنشن " + "\n" + "◊ مميز  " + "\n" + "◊ عضو من المختبرون🧪" 
var text5 = " ✸حسابه\n\n" + "↢ فلوسه ⇜ " + res5.value() + " $ " + "\n\n" + "↢ ايدي حسابه ⇜ " + "```1587047844```" + "\n\n" + "↢ وضيفتة ⇜ " + "طيار 👨🏻‍✈️" + "\n\n\n" + " ✸ صفات اكتسبها    ╭[☉﹏☉]╮" + "\n\n" + go5

  if (usr === "@mh_azh"){

           Bot.sendMessage(text1);
           }
 
   if (usr === "@NG_11"){
     
Bot.sendMessage(text2);

     }
 
   if (usr === "@Hassanein_863"){

    Bot.sendMessage(text3);
 }
 
   if (usr === "@yoseph199"){

    Bot.sendMessage(text4);
     }
 
   if (usr === "@niega"){

    Bot.sendMessage(text5);
  }
  
