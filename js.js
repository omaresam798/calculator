var CE = document.querySelector("#CE")
var inp = document.querySelector("#input")
CE.addEventListener("click", function () {
    inp.value = ""
    arr = []
})
var plus = document.querySelector("#plus")
var minus = document.querySelector("#minus")
var divide = document.querySelector("#divide")
var astric = document.querySelector("#astric")
var pii = document.querySelector("#pii")
var eee = document.querySelector("#eee")
var sqrt = document.querySelector("#sq")
var power = document.querySelector("#po")
var eqe = document.querySelector("#eqe")
var nums = document.querySelectorAll("#zero,#one,#two,#three,#four,#five,#six,#seven,#eight,#nine")
var sympols = document.querySelectorAll("#plus,#minus,#divide,#astric,#sq,#po")
var other = document.querySelectorAll("#pii,#eee")
var arr = []
var strt = ""
nums.forEach(item => item.addEventListener("click", function () {
    inp.value += item.textContent
}));

other.forEach(te => te.addEventListener("click", function () {
    if (te.textContent == "π") {
        arr.push(Math.PI)
        inp.value = Math.PI
    }
    else {
        arr.push(2.71828)
        inp.value = 2.71828

    }
}))
sympols.forEach(x => x.addEventListener("click", function () {
    arr.push(parseInt(inp.value))
    var sympol = ""
    inp.value = ""
    sympol = x.textContent
    if (sympol == '+') {
        eqe.addEventListener("click", function () {
            arr.push(parseInt(inp.value))
            inp.value = (arr[0] + arr[1])
        })
    }
    else if (sympol == '-') {
        eqe.addEventListener("click", function () {
            arr.push(parseInt(inp.value))
            inp.value = (arr[0] - arr[1])
        })
    }
    else if (sympol == '*') {
        eqe.addEventListener("click", function () {
            arr.push(parseInt(inp.value))
            inp.value = (arr[0] * arr[1])
        })
    }
    else if (sympol == '/') {
        eqe.addEventListener("click", function () {
            arr.push(parseInt(inp.value))
            if (arr[1] == 0) {
                alert("cannot divide by zero")
                inp.value = ""
                arr = []
            }
            else {
                inp.value = (arr[0] / arr[1])
            }
        })
    }
    else if (sympol == "Sqrt") {
        arr.push(parseInt(inp.value))
        inp.value = Math.sqrt(arr[0])

    }
    else if (sympol == "POW") {
        eqe.addEventListener("click", function () {
            arr.push(parseInt(inp.value))
            inp.value = Math.pow(arr[0], arr[1])
        })
    }
}
))

