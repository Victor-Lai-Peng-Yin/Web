function emailSend() {
  var userName = document.getElementById('resultName').value;
  var email = document.getElementById('resultEmail').value;

  var messageBody = "Name: " + userName + "<br/> Email: " + email;

  // 注意，这里只是一个示例，真实情况中应该在服务器端发送电子邮件
  // 永远不要将用户名和密码存储在前端代码中
  var emailData = {
    Host: "smtp.elasticemail.com",
    Username: "penguinlai4@gmail.com",
    Password: "33FD71DD249F38A028ADC1373C1B447C119C",
    To: email,
    From: "penguinlai4@gmail.com",
    Subject: "This is the subject",
    Body: messageBody
  };

  // 使用异步函数发送电子邮件
  Email.send(emailData).then(
    function () {
      console.log("Email sent successfully");
      // 可以在成功时执行其他操作
    },
    function (error) {
      console.error("Email sending failed: " + error);
      // 可以在失败时执行其他操作
    }
  );
}

document.getElementById('sendEmailButton').addEventListener('click', emailSend);

