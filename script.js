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
    console.log("Price = ", price);
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
}