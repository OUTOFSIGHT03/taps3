const authorInput = document.getElementById("author");
const messageInput = document.getElementById("message");
const sendBtn = document.querySelector(".btn");

class Message {
  constructor(sender, content) {
    this.sender = sender;
    this.date = gettime();
    this.content = content;
  }

  toString() {
    return `${this.date} ${this.sender}: ${this.content}`;
  }

  toHtml() {
    return `<p>${this.date} ${this.sender}: ${this.content}</p></b>`;
  }
}

class Messenger {
  constructor() {
    bu. keçmiş = [];
    bu. historyelement=document. querySelector('.history');
  }

  show_history() {
    bu. tarix. forEach((message)) => {
      konsol. log(ismarıc. ToString());
    };
  }

  göndərmə(müəllif,mətn) {
    constmesaj=yeniMesaj(müəllif,mətn);
    bu. tarix. date(message);
    constp=document. createElement("p");
    p. innerHTML=message. toHtml();
    bu. historyelement. appendChild(p);
  }
}

funksiyagettime() {
  letnow=yenitarix();
  return'${now. getHours()}:${indi. getMinutes()}';
}

let messenger = new Messenger("messenger");

sendBtn. addEventListener("click", () => {
  constauthor=authorInput. qiymət;
  constmessage=messageInput. qiymət;
  müəllifİnput. qiymət = "";
  messageInput. qiymət = "";
  pul. göndər(müəllif,mesaj);
});
