
// Total Price Section
function totalPrice() {
    // totalPrice = basePrice + memoryCost + storageCost + deliveryCost
    document.getElementById('totalPrice').innerText =
        parseFloat(document.getElementById('basePrice').innerText) +
        parseFloat(document.getElementById('memoryCost').innerText) +
        parseFloat(document.getElementById('storageCost').innerText) +
        parseFloat(document.getElementById('deliveryCost').innerText);

    // After Discount
    document.getElementById('afterDiscount').innerText = document.getElementById('totalPrice').innerText;
}


// Memory Section
document.getElementById('baseMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 0;
    totalPrice();
    document.getElementById('baseMemory').disabled = true;
    document.getElementById('extendedMemory').disabled = false;
});
document.getElementById('extendedMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 180;
    totalPrice();
    document.getElementById('baseMemory').disabled = false;
    document.getElementById('extendedMemory').disabled = true;
});
// totalPrice(cost);
// totalPrice.innerText = parseInt(totalPrice.innerText) + cost;
// document.getElementById('extra-memory-cost').innerText = addCost(memorySpace);



// Storage Section
document.getElementById('baseStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 0;
    totalPrice();
    document.getElementById('baseStorage').disabled = true;
    document.getElementById('extraStorage').disabled = false;
    document.getElementById('extendedStorage').disabled = false;
});
document.getElementById('extraStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 100;
    totalPrice();
    document.getElementById('baseStorage').disabled = false;
    document.getElementById('extraStorage').disabled = true;
    document.getElementById('extendedStorage').disabled = false;
});
document.getElementById('extendedStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 180;
    totalPrice();
    document.getElementById('baseStorage').disabled = false;
    document.getElementById('extraStorage').disabled = false;
    document.getElementById('extendedStorage').disabled = true;
});



// Shipping Section
document.getElementById('freeDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 0;
    totalPrice();
    document.getElementById('freeDelivery').disabled = true;
    document.getElementById('expressDelivery').disabled = false;
});
document.getElementById('expressDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 20;
    totalPrice();
    document.getElementById('freeDelivery').disabled = false;
    document.getElementById('expressDelivery').disabled = true;
});

// promo section
document.getElementById('promoButton').addEventListener('click', function () {
    if (document.getElementById('promoCode').value == 'stevekaku') {
        document.getElementById('afterDiscount').innerText = parseFloat(document.getElementById('totalPrice').innerText) * 0.8;
        document.getElementById('promoCode').value = '';
    }
    else {
        document.getElementById('promoCode').value = '';
    }
});

// console.log(totalPrice);

