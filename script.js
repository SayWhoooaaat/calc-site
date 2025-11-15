document.addEventListener("DOMContentLoaded", () => {
  const aInput = document.getElementById("add-a");
  const bInput = document.getElementById("add-b");
  const btn = document.getElementById("add-btn");
  const result = document.getElementById("add-result");

  btn.addEventListener("click", () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const sum = a + b;

    if (Number.isNaN(sum)) {
      result.value = "–";
    } else {
      result.value = sum;
    }
  });
});
