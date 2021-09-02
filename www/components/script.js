// This is a JavaScript file
window.onload = function(){
  const valor1 = document.querySelector("#valor1");
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", function(){
    let resRefri = (parseFloat(valor1.value) * 600) / 1000;
    document.querySelector("#refri").value = resRefri + " Litros";
    let resAgua = (parseFloat(valor1.value) * 200) / 1000;
    document.querySelector("#agua").value = resAgua + " Litros";
    let resBolo = (parseFloat(valor1.value) * 100) / 1000;
    document.querySelector("#bolo").value = resBolo + " Quilos";
    let resDoce = parseFloat(valor1.value) * 3;
    document.querySelector('#doce').value = resDoce + " Docês em geral";
    let resSalgado = parseFloat(valor1.value) * 10;
    document.querySelector("#salgado").value = resSalgado + " Salgadinhos";
});
}

