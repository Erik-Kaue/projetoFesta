// This is a JavaScript file
window.onload = function(){
  const valor1 = document.querySelector("#valor1");
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", function(){
    let resRefri = (parseFloat(valor1.value) * 600) / 1000;
    document.querySelector("#refri").value = resRefri + " Litros";
});
}

