async function fetchExchangeRate() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=chf');
    const data = await response.json();
    return data.monero.chf;
}

async function calculateMoneroAmount() {
    try {
        const rate = await fetchExchangeRate();
        const amountInChf = 5;
        const amountInXmr = amountInChf / rate;
        document.getElementById('donateAmount').textContent = amountInXmr.toFixed(5);
        generateMoneroUrl(amountInXmr.toFixed(12));
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        document.getElementById('donateAmount').textContent = 'Error';
    }
}

function generateMoneroUrl(amount) {
    const moneroAddress = '42gTuUvVzHt7jbTxs9dos3NsPv2dwB3tdHxGDgjutURJCKncdqUSNVwPMtASAEPQKigKY6odcf14UgiP4Yek4zrVTRGjLf5';
    const recipientName = 'Mr. Cat';
    const txDescription = 'Donation';
    const url = `monero:${moneroAddress}?tx_amount=${amount}&recipient_name=${encodeURIComponent(recipientName)}&tx_description=${encodeURIComponent(txDescription)}`;
    document.getElementById('donateLink').href = url;
}

function changeButtonText() {
    document.getElementById('donateButton').textContent = "Thank you! :D";
    console.log('you legend')
}

calculateMoneroAmount();