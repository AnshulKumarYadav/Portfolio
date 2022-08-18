let submit = document.getElementById('send_msg').addEventListener("submit", function(e) {
    e.preventDefault();
    
    let visitorName = document.getElementById('name').value;
    let visitoremail = document.getElementById('email').value;
    let visitorsubject = document.getElementById('subject').value;
    let visitormessage = document.getElementById('message').value;

    
    fetch('https://myporfolio-api.herokuapp.com/visiter', {
        method: 'POST',
        body: JSON.stringify({
            name:visitorName,
            email:visitoremail,
            subject: visitorsubject,
            message: visitormessage
         
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        mode:'no-cors'
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    

});
