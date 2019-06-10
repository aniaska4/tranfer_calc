document.addEventListener("DOMContentLoaded", function() {
  // setting current time:
  const input = document.getElementById("time");
  const add = document.getElementById("add");
  const subtract = document.getElementById("subtract");
  input.value = new Date().toLocaleTimeString();
  let currentTime = new Date().getTime();
  let i = 0;

  //add and subtract 5 minutes to current time:
  add.addEventListener("click", function() {
    i = i + 1000 * 60 * 5;
    input.value = new Date(currentTime + i).toLocaleTimeString();
  });

  subtract.addEventListener("click", function() {
    console.log(i);
    i = i - 1000 * 60 * 5;
    input.value = new Date(currentTime + i).toLocaleTimeString();
  });

  //event getting all information about bank's transfers:
  document.querySelector(".item-12").addEventListener("click", function(e) {
    e.preventDefault();

    //hours of outgoing transfers:
    const nameBankOut = document.querySelector("#from-bank").value;

    // get name of bank from array:
    const dataName = allDataDetails.map(function(e) {
      return e.name;
    });
    console.log(dataName); //all banks in array

    //extracting hours of specific banks (OUT):
    const nameOfBank = allDataDetails.find(item => item.name === nameBankOut);
    const timeOutOfBank = nameOfBank.timeOut; //tablica z godzinami
    const finalTimeOut = timeOutOfBank.find(e => input.value <= e);

    console.log(timeOutOfBank);
    console.log(finalTimeOut);

    //hours of incoming transfers:
    const nameBankIn = document.querySelector("#to-bank").value;
    console.log(nameBankIn);

    //extracting hours of specific banks (IN):
    const nameofBankIn = allDataDetails.find(item => item.name === nameBankIn);
    const timeInOfBank = nameofBankIn.timeIn; //tablica z godzinami
    const finalTimeIn = timeInOfBank.find(e => finalTimeOut <= e);
    console.log(nameofBankIn);
    console.log(timeInOfBank);
    console.log(finalTimeIn);

    // //pobranie innerHTML z HTML
    // const select = document.querySelector("#from-bank");
    // const select2 = function(sel) {
    //   const selectbankname = sel.options[sel.selectedIndex].text;
    //   return selectbankname;
    // };

    $(".information").html(`<span>Przelew wykonano o :  ${input.value} </span>
        </br> <span>Środki zostaną zaksięgowane w banku  o godzinie: ${finalTimeOut} </span> 
        </br> <span>Środki pojawią się w banku: o godzinie: ${finalTimeIn}</span>`);
  });
});
