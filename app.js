document.addEventListener("DOMContentLoaded", function () {

    function getTime() {
        var data = new Date();

        return data.toLocaleTimeString();
    }
    document.getElementById('time').innerHTML = getTime();


//dodawanie minut
    document.getElementById('add').addEventListener("click", function () {
        let newDateObj = getTime() + (5 * 60 * 1000);
        console.log(newDateObj)
        document.getElementById('time').innerHTML = newDateObj;
    })

//odejmowanie minut
    document.getElementById('subtract').addEventListener("click", function () {
        let newDateObj = getTime() - (5 * 60 * 1000);
        console.log(newDateObj)
        document.getElementById('time').innerHTML = newDateObj;
    })

    
    
    
    document.querySelector(".item-12").addEventListener("click", function (e){
        e.preventDefault();
        console.log("dupa")
        const nameBank = document.querySelector("#from-bank").value
        const bankName = dataTime.map(function (e) {
            return e.name;
           
        });
        e.name.map(function (el){
            if(nameBank == el) { console.log("ania")}
        })

        
    })
});