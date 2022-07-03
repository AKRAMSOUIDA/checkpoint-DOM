function updateTotalPrice() {
  var Totalprix = document.getElementsByClassName("final");
  let sum = 0;
  let price = document.getElementsByClassName("prixinit");

  for (let i = 0; i < price.length; i++) {
    sum += parseInt(price[i].innerHTML);
    Totalprix[0].innerHTML =sum;
  }
  return Totalprix[0].innerHTML;
}
  
  
  



var deleteBtn = document.getElementsByClassName("close")
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function () {
    deleteBtn[i].parentElement.parentElement.parentElement.remove()

  })
}

var PlusBtn = document.getElementsByClassName("btn btn-outline-dark");
for (let i = 0; i < PlusBtn.length; i++) {
  PlusBtn[i].addEventListener("click", function (e) {
     let qte = e.target.nextElementSibling;
    qte.innerHTML = parseInt(qte.innerHTML) +1;
    let prixU =
      e.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling;
    let prixupdated =e.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
     
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
    updateTotalPrice();
  }); }


    var MinBtn = document.getElementsByClassName("btn btn-outline-dark 1");
for (let i = 0; i < PlusBtn.length; i++) {
  PlusBtn[i].addEventListener("click", function (e) {
    let qte = e.target.previousElementSibling;
    if (parseInt(qte.innerHTML) >0)
   { qte.innerHTML = parseInt(qte.innerHTML) -1;}
   let prixU =
      e.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling;
    let prixupdated =e.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
     
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
    updateTotalPrice();
  
});}

var heartBtn = document.getElementsByClassName("btncart");
for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener("click", function (event) {
    var togglebtn = event.target;
   
      togglebtn.classList.toggle("red") });
    }

   
   

    