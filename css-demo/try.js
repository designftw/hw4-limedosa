const applyButton = document.getElementById("apply-button");
const applyButton2 = document.getElementById("apply-button-2");
const cssText = document.getElementById("css-text");
const copyButton = document.getElementById("copy-button");

applyButton.addEventListener("click", function () {
  const bgColor = document.getElementById("bg-color-picker").value;
  const bgColor2 = document.getElementById("bg-color-picker-2").value;
  document.body.style.background = `radial-gradient(${bgColor}, ${bgColor2})`;
  cssText.value = `background-image: radial-gradient(${bgColor}, ${bgColor2});`;
});

applyButton2.addEventListener("click", function () {
  const bgColor = document.getElementById("bg-color-picker").value;
  const bgColor2 = document.getElementById("bg-color-picker-2").value;
  document.body.style.background = `radial-gradient(${bgColor}, ${bgColor2})`;
  cssText.value = `background-image: radial-gradient(${bgColor}, ${bgColor2});`;
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(cssText.value);
  alert("CSS copied to clipboard!");
});