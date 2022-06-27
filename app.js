// particles
window.onload = function () {
  Particles.init({
    selector: ".background",
    color: "#16DFA1",
    connectParticles: true,
  });
};

// calculate
document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeEl = document.getElementById("income").value;

  const foodEl = document.getElementById("food").value;
  const rentEl = document.getElementById("rent").value;
  const clothEl = document.getElementById("cloth").value;

  const expensesEl = document.getElementById("expenses");

  const balanceEl = document.getElementById("balance");

  const expensesTotal = parseInt(foodEl) + parseInt(rentEl) + parseInt(clothEl);

  if (incomeEl > expensesTotal) {
    expensesEl.innerHTML = expensesTotal;
    balanceEl.innerHTML = parseInt(incomeEl) - expensesTotal;
  } else if (incomeEl == "" || expensesEl == "") {
    alert("Cannot Be Empty");
    expensesEl.innerHTML = "Empty";
    balanceEl.innerHTML = "Empty";
  } else {
    alert("Expenses Need To Be Less Than Income");
    expensesEl.innerHTML = "??";
    balanceEl.innerHTML = "??";
  }
});

document.getElementById("save").addEventListener("click", function () {
  const incomeEl = document.getElementById("income").value;

  const saveEl = document.getElementById("percent").value;

  const savingAmountEl = document.getElementById("saving-amount");
  const remainingEl = document.getElementById("remaining");

  const percent = parseInt(incomeEl) * (parseInt(saveEl) / 100);

  const remain = parseInt(incomeEl) - percent;

  if (percent > 0 || remainingEl > 0) {
    savingAmountEl.innerHTML = percent;
    remainingEl.innerHTML = remain;
  } else if (saveEl < incomeEl || saveEl > incomeEl) {
    alert("Cannot Input Minus Number");
  }
});
