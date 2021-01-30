//function to change number of ticket and total cost
function seatAndTotalCount(isIncrease, idSeatCountType, idPriceLabel) {
    seatCountIncreaseDecrease(isIncrease, idSeatCountType);
    allTotal(idSeatCountType, idPriceLabel);
}

// function to increase or decrease number of seat by + / - buttons
function seatCountIncreaseDecrease(isIncrease, idSeatCountType) {
    var seatCount = document.getElementById(idSeatCountType).value;
    seatCount = parseInt(seatCount);

    if (isIncrease == true) {
        seatCount = seatCount + 1;
    } else if (isIncrease == false, seatCount !== 0) {
        seatCount = seatCount - 1;
    }
    document.getElementById(idSeatCountType).value = seatCount;
}


// getPrice - from first class label
function getPrice(idPriceLabel) {
    var price = document.getElementById(idPriceLabel).innerText;
    price = price.replace(/[^.\d]/g, '');
    price = parseInt(price);
    return price;
}

//Calculate subtotal, total and tax
function allTotal(idPriceLabel) {
    var firstClassCount = document.getElementById("firstClassSeatCount").value;
    firstClassCount = parseInt(firstClassCount);

    var econoClassCount = document.getElementById("econoClassSeatCount").value;
    econoClassCount = parseInt(econoClassCount);


    var firstClassPrice = getPrice("label-first-class");
    var econoClassPrice = getPrice("label-econo-class");

    var subTotal = (firstClassPrice * firstClassCount) + (econoClassPrice * econoClassCount);

    document.getElementById("subTotal").innerText = subTotal;
    var taxRate = 0.10;
    var tax = subTotal * taxRate;
    document.getElementById("taxAmount").innerText = tax;
    var total = subTotal + tax;
    document.getElementById("totalAmount").innerText = total;
    return total;
}


//get data to display in feedback modal message
function getMessageData() {
    //Total ticket
    var firstClassCount = document.getElementById("firstClassSeatCount").value;
    firstClassCount = parseInt(firstClassCount);
    var econoClassCount = document.getElementById("econoClassSeatCount").value;
    econoClassCount = parseInt(econoClassCount);
    var totalTickets = firstClassCount + econoClassCount;
    document.getElementById("totalTickets").innerText = totalTickets;
    // Date of departure
    var inputDepartureDate = document.getElementById("input-departure-date").value;
    inputDepartureDate = inputDepartureDate.replaceAll("^\"|\"$", "");
    document.getElementById("departure-date").innerText = inputDepartureDate;
    // total Amount
    document.getElementById("total-amount").innerText = document.getElementById("totalAmount").innerText;

}


//what happanes when the book now button is hit
function bookingButton() {
    // inputErrorCheck
    //getDate
    var inputDepartureDate = document.getElementById("input-departure-date").value;
    inputDepartureDate = inputDepartureDate.replaceAll("^\"|\"$", "");

    var inputArrivalDate = document.getElementById("input-arrival-date").value;
    inputArrivalDate = inputArrivalDate.replaceAll("^\"|\"$", "");

    //getTotal Amount
    totalAmount = document.getElementById("totalAmount").innerText;
    totalAmount = parseFloat(totalAmount);

    if (inputDepartureDate === "") {
        window.dialog2.showModal()
    } else if (inputArrivalDate === "") {
        window.dialog4.showModal()
    } else if (totalAmount === 0) {
        window.dialog3.showModal()
    } else {
        getMessageData();
        window.dialog.showModal();
    }
}

function signUpNow() {
    document.getElementById("booking-area").style.display = "none";
    window.dialog.close()
    document.getElementById("signup-area").style.display = "block";
}

function signUpButton() {
    window.dialog5.showModal()
}