 let welcome = prompt("Welcome to Xclusive Shoes, whats your name?")
 let yourBid = parseInt(prompt(welcome + " what's your $Bid for those?"))
 let confirm = prompt("$" + yourBid + " your Final Bid? ('Yes' / 'No' to stop )")


 while (confirm != "No") {
    
     if (yourBid >= 450) {
        alert("Those shoes are yours")
        break
    } else if (yourBid >= 400) {
        alert("Try harder! You are close!")
    } else if (yourBid <= 399) {
        alert("Better next time")
    } else {
        alert("Please enter a Bid or number")
    }

    yourBid = parseInt(prompt(welcome + " try another $Bid:"))
    confirm = prompt("$" + yourBid + " is your new Bid? (Yes / 'No' to stop)")
}

let despedida = alert("Thanks for visit us!")