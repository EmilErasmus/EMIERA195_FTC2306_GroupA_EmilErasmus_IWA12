// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


for (let i = 1; i < 4; i++) {
    const bookNumber = document.querySelector(`#book${i} .status`);
    const bookStatus = document.querySelector(`#book${i} .status`).innerText;
    console.log(bookStatus)
    bookNumber.style.color = STATUS_MAP[bookStatus]["color"];

    const reserve = document.querySelector(`#book${i} .reserve`);
    const checkout = document.querySelector(`#book${i} .checkout`);
    const checkin = document.querySelector(`#book${i} .checkin`);

    reserve.disabled = STATUS_MAP[bookStatus]["canReserve"] ? false : true;
    checkout.disabled = STATUS_MAP[bookStatus]["canCheckout"] ? false : true;
    checkin.disabled = STATUS_MAP[bookStatus]["canCheckIn"] ? false : true;

    checkin.style.color = "";
};