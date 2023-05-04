// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrzRBq3N0R7LtJl05itqHOppOKH7qapTA",
  authDomain: "portfolio-1-806a9.firebaseapp.com",
  databaseURL: "https://portfolio-1-806a9-default-rtdb.firebaseio.com",
  projectId: "portfolio-1-806a9",
  storageBucket: "portfolio-1-806a9.appspot.com",
  messagingSenderId: "518100777421",
  appId: "1:518100777421:web:7f9757addeaa4b7582ec84"
};


//initialize
firebase.initializeApp(firebaseConfig);

//reference
var contactFormDb = firebase.database().ref("contactForm");
document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('inputName');
  var email = getElementVal('inputEmail');
  var msgContent = getElementVal("msgContent");

  // console.log(name, email, msgContent);
  saveMessages(name, email, msgContent);

}

const saveMessages = (name, email, msgContent) => {
  var newContactForm = contactFormDb.push();

  newContactForm.set({
    name: name,
    email: email,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};