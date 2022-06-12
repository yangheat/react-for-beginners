import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [doller, setDoller] = useState("");
  const [coinCount, setCoinCount] = useState();

  const onDollerInputChange = (event) => {
    setDoller(event.target.value);
  };
  const onConvertBtnClick = () =>
    setCoinCount(doller / document.getElementById("coins").value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select id="coins">
            {coins.map((coin) => (
              <option
                key={coin.id}
                value={coin.quotes.USD.price}
                symbol={coin.symbol}
              >
                {coin.name}({coin.symbol}) ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <label htmlFor="doller"></label>
          <input
            id="doller"
            onChange={onDollerInputChange}
            value={doller}
            type="number"
          />
          <button onClick={onConvertBtnClick}>Convert</button>
          <span>{coinCount}</span>
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
