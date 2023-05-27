  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD0asHo0qDj5zYplavVzFUsNWL1Da1e1c8",
    authDomain: "sendinfo-9f1cb.firebaseapp.com",
    databaseURL: "https://sendinfo-9f1cb-default-rtdb.firebaseio.com",
    projectId: "sendinfo-9f1cb",
    storageBucket: "sendinfo-9f1cb.appspot.com",
    messagingSenderId: "842821060420",
    appId: "1:842821060420:web:47008a44a86e78be69b911"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
