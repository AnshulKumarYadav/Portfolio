let submit = document.getElementById('send_msg').addEventListener("click", function() {
    // e.preventDefault();
    
    let visitorName = document.getElementById('name').value;
    let visitoremail = document.getElementById('email').value;
    let visitorsubject = document.getElementById('subject').value;
    let visitormessage = document.getElementById('message').value;


    fetch('http://portfoliodata-env.eba-pttt9qzp.us-west-2.elasticbeanstalk.com/visiter', {
  method: 'POST',
  body: JSON.stringify({
    name:visitorName,
    email:visitoremail,
    subject: visitorsubject,
    message: visitormessage
  }),
  headers: {
    'Content-type': 'application/json;',
  },
})
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
    

});
