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
  var education = getElementVal("education");
  var interests = getElementVal("interest");

  saveMessages(name, gender,education,emailid,interests);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, gender, emailid,education, interests) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    gender: gender,
    emailid: emailid,
    education: education,
    interest: interests
  });
};

const getElementVal = (id) => {
  if (id === "interest") {
    // 處理下拉式多選選單
    var selectElement = document.getElementById(id);
    var selectedOptions = [];
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].selected) {
        selectedOptions.push(selectElement.options[i].value);
      }
    }
    return selectedOptions;
  } else {
    // 處理其他輸入元素
    return document.getElementById(id).value;
  }
};
