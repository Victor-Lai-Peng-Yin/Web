const firebaseConfig = {
    apiKey: "AIzaSyAV_qZMyDLO7c9SprNOWWtHIKFRYs7Ettg",
    authDomain: "contactform-html.firebaseapp.com",
    databaseURL: "https://contactform-html-default-rtdb.firebaseio.com",
    projectId: "contactform-html",
    storageBucket: "contactform-html.appspot.com",
    messagingSenderId: "1029167413093",
    appId: "1:1029167413093:web:582f726dd61bcf0d16d38c"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var gender = getElementVal("gender");
  var emailid = getElementVal("emailid");

  saveMessages(name, gender, emailid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, gender, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    gender: gender,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};