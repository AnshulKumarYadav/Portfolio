let register = async (e) => {
  e.preventDefault();

  let form_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  form_data = JSON.stringify(form_data);

  let res = await fetch(
    "https://myporfolio-api.herokuapp.com/visiter",
    {
      method: "POST",
      body: form_data,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  console.log(data);
};

document.getElementById("send_msg").addEventListener("click", register);