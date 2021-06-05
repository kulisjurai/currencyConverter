let select = document.querySelectorAll('.select');
let btn = document.getElementById('button');
let oputput = document.getElementById('output');

fetch('https://api.exchangerate.host/latest?fbclid=IwAR37ezqZVImhicqIFpnxj-y-wP0owKSUoX18MGCkhn6F8vPJ1iB_jAcwY-w')
    .then(data => data.json())
    .then(data => {
        insertValutesInSelect(data);
    })

function insertValutesInSelect(_data) {
    const entries = Object.keys(_data.rates);
    for (let i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i]}">${entries[i]}</option>`
        select[1].innerHTML += `<option value="${entries[i]}">${entries[i]}</option>`
    }
}

btn.addEventListener('click', function() {
    let amount = document.getElementById('amount').value;
    const currency1 = select[0].value;
    const currency2 = select[1].value;
    convert(currency1, currency2, amount);
})

function convert(currency1, currency2, amount) {
    fetch('https://api.exchangerate.host/latest?fbclid=IwAR37ezqZVImhicqIFpnxj-y-wP0owKSUoX18MGCkhn6F8vPJ1iB_jAcwY-w')
        .then(data => data.json())
        .then(data => {
            oputput.innerHTML = (((data.rates[currency2]).toFixed(2) * parseFloat(amount)) / data.rates[currency1]).toFixed(2);
        })
}