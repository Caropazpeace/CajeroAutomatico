var cuentas = [
    { nombre: "Mali", saldo: 200, password: "12345" },
    { nombre: "Gera", saldo: 290, password: "123456" },
    { nombre: "Maui", saldo: 67, password: "123457" }
  ];
  var currentAccountIndex;

  function login(index) {
    var password = prompt("Ingresa el password de la cuenta:");
    var account = cuentas[index];

    if (account && password === account["password"]) {
      currentAccountIndex = index;
      document.getElementById("accountName").textContent = account.nombre;
      document.getElementById("login").style.display = "none";
      document.getElementById("actions").style.display = "block";
    } else {
      alert("Password incorrecto. Inténtalo nuevamente.");
    }
  }

  function logout() {
    currentAccountIndex = undefined;
    document.getElementById("accountName").textContent = "";
    document.getElementById("actions").style.display = "none";
    document.getElementById("balance").style.display = "none";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("login").style.display = "block";
  }

  function checkBalance() {
    var account = cuentas[currentAccountIndex];
    document.getElementById("balanceAmount").textContent =
      "$" + account.saldo;
    document.getElementById("actions").style.display = "none";
    document.getElementById("balance").style.display = "block";
  }

  function deposit() {
    document.getElementById("actions").style.display = "none";
    document.getElementById("deposit").style.display = "block";
  }

  function confirmDeposit() {
    var amount = parseInt(document.getElementById("depositAmount").value);
    var account = cuentas[currentAccountIndex];

    if (isNaN(amount) || amount <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }

    if (account.saldo + amount > 990) {
      alert("El saldo no puede superar los $990.");
      return;
    }

    account.saldo += amount;
    alert(
      "Has depositado $" + amount + ". Nuevo saldo: $" + account.saldo + "."
    );
    backToActions();
  }

  function withdraw() {
    document.getElementById("actions").style.display = "none";
    document.getElementById("withdraw").style.display = "block";
  }

  function confirmWithdraw() {
    var amount = parseInt(document.getElementById("withdrawAmount").value);
    var account = cuentas[currentAccountIndex];

    if (isNaN(amount) || amount <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }

    if (account.saldo - amount < 10) {
      alert("El saldo no puede ser menor a los $10.");
      return;
    }

    account.saldo -= amount;
    alert(
      "Has retirado $" + amount + ". Nuevo saldo: $" + account.saldo + "."
    );
    backToActions();
  }

  function backToActions() {
    document.getElementById("depositAmount").value = "";
    document.getElementById("withdrawAmount").value = "";
    document.getElementById("balance").style.display = "none";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("actions").style.display = "block";
  }