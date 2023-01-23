function megszerkesztheto() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var a = document.getElementById("a").value;

    if (Math.round(Math.pow(b1, 2) + Math.pow(b2, 2)) == Math.round(Math.pow(a, 2))) {
        alert("A derékszögű háromszög megszerkeszthető!");
    }
    else {
        alert("A derékszögű háromszög NEM szerkeszthető meg!");
    }
}

function veletlen() {
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var a = document.getElementById("a");

    b1.value = Math.floor(Math.random() * 90 + 10)
    b2.value = Math.floor(Math.random() * 90 + 10)
    a.value = Math.floor(Math.random() * 90 + 10)
}

function atfogo() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var a = document.getElementById("a");

    a.value = Math.sqrt(Math.pow(b1, 2) + Math.pow(b2, 2)).toFixed(3);
}