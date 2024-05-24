let emotion1
let emotion2

let name

let ftv1
let ftv2
let ftv3
let ftv4
let ftv5

let object1
let object2
let object3

let description

document.getElementById("emotionSubmit").onclick = function(){
    emotion1 = document.getElementById("emotion1").value
    emotion2 = document.getElementById("emotion2").value

    name = document.getElementById("name1").value

    ftv1 = document.getElementById("ftv1").value
    ftv2 = document.getElementById("ftv2").value
    ftv3 = document.getElementById("ftv3").value
    ftv4 = document.getElementById("ftv4").value
    ftv5 = document.getElementById("ftv5").value
    ftv6 = document.getElementById("ftv6").value

    object1 = document.getElementById("object1").value
    object2 = document.getElementById("object2").value
    object3 = document.getElementById("object3").value

    description = document.getElementById("description").value

    document.getElementById("emotionp").innerHTML = "I " + emotion1 + " you, " + name + ". All my life, you always tried to " + ftv1 + object1 + ". And sometimes I even " + ftv2 + object2 + ". I really think that you are a " + description + ", always " + ftv3 + object3 + ". I " + ftv4 + " in " + emotion2 + " when you " + ftv5 + " Anyway I hope you " + ftv6 + ". Bye!"
    
}

