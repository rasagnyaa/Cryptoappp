
const API_KEY = "3de0ccdc45msh340c91f6d451d52p163c20jsnd3898e229393";
const API_URL = "https://api.coinranking.com/v2/coins";

// Fetch the coin data from the API
fetch(API_URL, {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const coins = data.data.coins;
    displayCoins(coins);

    //eventlistner to searchinput
   document
      .getElementById("coinSearch")
      .addEventListener("input", (event) => {
       
        const search = event.target.value.toLowerCase();
        const serachedCoins = coins.filter((coin) =>
          coin.name.toLowerCase().includes(search)
         
        );
        displayCoins(serachedCoins);
      });
  });

// Function to display the coin
function displayCoins(coins) {
  const coinBody = document.getElementById("coinBody");
  coinBody.innerHTML = "";
  coins.forEach((coin) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerHTML = `${coin.name}`;
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.innerHTML = `${coin.symbol}`;
    tr.appendChild(td2);
    const td3 = document.createElement("td");
    const img = document.createElement("img");
    img.setAttribute("src", `${coin.iconUrl}`);
    img.style.height = "80px";
    td3.appendChild(img);
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.innerHTML = `${coin.price}`;
    tr.appendChild(td4);

    const td5 = document.createElement("td");
    td5.innerHTML = `${coin["24hVolume"]}`;
    tr.appendChild(td5);

    const td6 = document.createElement("td");
    td6.innerHTML = `${coin.marketCap}`;
    tr.appendChild(td6);
   
     const td7=document.createElement("td")
     const tradeButton=document.createElement("button")
         td7.appendChild(tradeButton)
         tr.appendChild(td7)
    
     tradeButton.setAttribute("class","btn")
     tradeButton.innerHTML="Trade"
     tradeButton.style.height="30px"
     tradeButton.style.width="80px"
     tradeButton.style.borderRadius="3rem"
     tradeButton.style.backgroundColor="blue"
     tradeButton.style.color="white"
     tradeButton.style.fontSize="15px"
     tradeButton.style.boder="1px solid blue"
     tradeButton.addEventListener("click",()=>{
      // tradeButton.style.backgroundColor="blue"
      if(tradeButton.style.backgroundColor==="blue"){
         tradeButton.style.backgroundColor="gray"
         tradeButton.style.color="white"
      }else{
          tradeButton.style.backgroundColor="blue"
           tradeButton.style.color="white"
      }
     
     
       
      
     })
  

    coinBody.appendChild(tr);
  });
  let getimg2=document.getElementById("img2")
  getimg2.addEventListener("click",()=>{
    window.open("../cryptocurrency/homepage.html")
  })
}

