const email = document.querySelector(".email");
const password = document.querySelector(".pass");
const btn = document.querySelector(".btn");

const post = async (email, pass) => {
    return await fetch("http://www.luis.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    });
  };
  

btn.addEventListener("click", async () => {
  const emailValue = email.value;
  const passValue = password.value;
  try {
    const response = await post(emailValue, passValue);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.error("Error en la solicitud:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
});
