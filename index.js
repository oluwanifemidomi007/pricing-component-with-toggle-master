
const switchEL = document.getElementById("switch");
let priceVariable1 = document.getElementById("price1");
let priceVariable2 = document.getElementById("price2");
let priceVariable3 = document.getElementById("price3");
function monthlyPrice() {
  priceVariable1.innerHTML = "&dollar;19.99";
  priceVariable2.innerHTML = "&dollar;24.99";
  priceVariable3.innerHTML = "&dollar;39.99";
}

function annuallyPrice() {
    priceVariable1.innerHTML = "&dollar;199.99"
    priceVariable2.innerHTML = "&dollar;249.99"
    priceVariable3.innerHTML = "&dollar;399.99"
}
switchEL.addEventListener("change", function () {
  if (this.checked) {
    monthlyPrice();
  }
  else (
    annuallyPrice()
  )
});
