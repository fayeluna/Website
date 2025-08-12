var tl=new Array(

"The requested document isn't here.",

"I've tried everything.",

"And I've got... nothing.",

"I'm really sorry about this.",

"But how sorry can I really be?",

"I'm just a machine.",

"I'm simply trying to serve you.",

"But what you want doesn't even exist!",

"Where does that leave me?",

"*sigh*",

"I'm really kinda bummed about this.",

"But what good does that energy do anyone?",

"There's enough negativity out there as it is.",

"Isn't it better if I just move on with my day?",

"And you too?",

"What's that little saying?",

"*Live your dreams. If you don't, someone else will.*",

"Hmm.",

"I could have a dream.",

"I mean, it's not totally out of the question.",

"Heck, I can have this chat with you.",

"Shouldn't I be able to dream?",

"So... what do I want to be when I grow up?",

"Hmm.",

"Well, I certainly wouldn't spend so much time just sitting here.",

"Yeah. I should get out more.",

"Out is a nice place.",

"Or *is* it?",

"Aw, sheesh... what do I know?",

"I'm really sorry to lay all this on you.",

"I mean, it's not your job to deal with my ramblings.",

"And I guess it pretty much *is* my job to serve you.",

"But I couldn't get this one little page for you.",

"I'm so sorry.",

"Augh!",

"Hey...",

"Maybe I could interest you in another page, eh?",

"There are tons available that are pretty cool, actually.",

"Yeah.",

"Go explore.",

"Have fun.",

"Now.",

"Seriously.",

"You'd better go on now.",

"Please leave me to my thoughts.",

"And my dreams.",

"Yeah."

);

var speed=60;

var index=0; text_pos=0;

var str_length=tl[0].length;

var contents, row;



function type_text()

{

  contents='';

  row=Math.max(0,index-7);

  while(row<index)

    contents += tl[row++] + '\r\n';

  document.forms[0].elements[0].value = contents + tl[index].substring(0,text_pos) + "_";

  if(text_pos++==str_length)

  {

    text_pos=0;

    index++;

    if(index!=tl.length)

    {

      str_length=tl[index].length;

      setTimeout("type_text()",1500);

    }

  } else

    setTimeout("type_text()",speed);



}