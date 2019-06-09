document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('time');
    const add = document.getElementById('add');
    const subtract = document.getElementById('subtract');
    input.value = new Date().toLocaleTimeString();
    let currentTime = new Date().getTime();
    let i = 0;

    add.addEventListener('click', function () {
        console.log(i);
        i = i + 1000 * 60 * 5;
        input.value = new Date(currentTime + i).toLocaleTimeString();
    });
    subtract.addEventListener('click', function () {
        console.log(i);
        i = i - 1000 * 60 * 5;
        input.value = new Date(currentTime + i).toLocaleTimeString();
    });

    document.querySelector(".item-12").addEventListener("click", function (e) {
        e.preventDefault();
        const nameBankOut = document.querySelector("#from-bank").value //nazwa banku wychodzącego
        const nameBankIn = document.querySelector("#to-bank").value //nazwa banku przychodzącego

        // pobieram nazwy banków z tablicy
        const dataName = allDataDetails.map(function (e) {
            return e.name;
        })
        console.log(dataName) //wszystkie banki

        //wyciągnięcie godzin konkretnych banków
        const isTheBankNameExiste = dataName.filter(function (e) {
            const nameOfBank = allDataDetails.find(item => item.name === nameBankOut);
            const timeOutOfBank = nameOfBank.timeOut;
            const firstTime = timeOutOfBank.filter( e => {
                if (input.value <= e) {
                   console.log("godzina jest mniejsza")
                } else {
                    console.log("godzina jest większa")
                }
                return e
            })
        });

        function byLength(e1, e2) {
            e1 = e1.length;
            e2 = e2.length;
            return e1 > e2 ? 1 : (e1 < e2 ? -1 : 0);
        }

    })
});