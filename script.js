fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
  .then(res => res.json())
  .then(data => {
    document.getElementById("prices").innerHTML = `
      <p>Bitcoin: $${data.bitcoin.usd}</p>
      <p>Ethereum: $${data.ethereum.usd}</p>
    `;
  });
