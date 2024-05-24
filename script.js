let for_against
// If against, false, if for, true.
document.getElementById("pineappleSubmit").onclick = function(){
    if (document.getElementById("foragainst").value == "for"){
        for_against = true
        if (for_against == true){
            alert("Working - for")
        }
    }
    else if (document.getElementById("foragainst").value == "against"){
        for_against = false
        if (for_against == false){
            alert("Working - false")
        }
    }
    else{
        alert("That is not a viable message")
    }
}