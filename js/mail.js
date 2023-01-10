document.getElementById("send_msg").addEventListener("click",SendMSG);

function SendMSG(e) {
  e.preventDefault()
    let name_txt = document.querySelector("#name");
    let email_txt = document.querySelector("#email");
    let subject_txt = document.querySelector("#subject");
    let message_txt = document.querySelector("#message");
    let body = "Name:" + name_txt.value + ",  " + "email:" + email_txt.value + ",  " + "subject:" + subject_txt.value +  ",  "+ "Message : " + message_txt.value

let temp = {
  from_name : name_txt.value,
  to_name : "Anshul Kumar Yadav",
  message : body
}

emailjs.send('service_3fqa39v', 'template_ce5qexv', temp)
.then((res) => {
  if(res.status == 200) {
    success()
  }else {
    failure()
  }
})


// nam_txt.value = ""
// email_txt.value = ""
// subject_txt.value = ""
// message_txt.value = ""

// fetch('https://myporfolio-api.herokuapp.com/visiter', {
//   method: 'POST',
//   body: JSON.stringify({
//     name:name_txt,
//     email:email_txt,
//     subject:subject_txt,
//     message: message_txt,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
//   })
//   .then(function(response){ 
//   return response.json()})
//   .then(function(data)
//   {
//     console.log(data);
//     success();
// }).catch(error =>{
//   console.error('Error:', error);
//   failure();
// }); 


}

function success() {
  let thank = document.querySelector(".msg-pop-up")
  thank.style.display = "block"
  setTimeout(() => {
    thank.style.display = "none"
  },2000)
}

function failure() {
  let fail = document.querySelector(".failed-msgpop")
  fail.style.display = "block"
  setTimeout(() => {
    fail.style.display = "none"
  },2000)
}

// d9edf392-bffd-4fa3-9d98-b2566146073d => token1

// service id = service_f3etz3t