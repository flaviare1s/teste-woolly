window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => {
    error.textContent = "";
    error.style.display = "none";
  });

  let valid = true;

  const name = document.getElementById("name");
  if (!name.value.trim()) {
    document.getElementById("name-error").textContent =
      "Por favor, insira seu nome completo.";
    document.getElementById("name-error").style.display = "block";
    valid = false;
  }

  const cnpj = document.getElementById("cnpj");
  const cnpjPattern = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/;
  if (!cnpj.value.trim() || !cnpjPattern.test(cnpj.value.trim())) {
    document.getElementById("cnpj-error").textContent =
      "Por favor, insira um CNPJ válido no formato XX.XXX.XXX/XXXX-XX.";
    document.getElementById("cnpj-error").style.display = "block";
    valid = false;
  }

  const email = document.getElementById("email");
  if (!email.value.trim() || !email.validity.valid) {
    document.getElementById("email-error").textContent =
      "Por favor, insira um e-mail válido.";
    document.getElementById("email-error").style.display = "block";
    valid = false;
  }

  const phone = document.getElementById("phone");
  const phonePattern = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  if (!phone.value.trim() || !phonePattern.test(phone.value.trim())) {
    document.getElementById("phone-error").textContent =
      "Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.";
    document.getElementById("phone-error").style.display = "block";
    valid = false;
  }

  const empresa = document.getElementById("empresa");
  if (!empresa.value.trim()) {
    document.getElementById("empresa-error").textContent =
      "Por favor, insira o nome da empresa.";
    document.getElementById("empresa-error").style.display = "block";
    valid = false;
  }

  if (valid) {
    console.log("Formulário enviado com sucesso!");
    alert("Formulário enviado com sucesso!");
  }
});

document.getElementById("scroll-btn").addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("form").scrollIntoView({
    behavior: "smooth",
  });
});
