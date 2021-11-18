
var check;
let searchInput = document.querySelector('#searchBar');
searchInput.addEventListener('keyup', search);
const vegetablesContainer = document.getElementById("vegetables");
function search(event) {
  let searchTerm = event.target.value.toLowerCase();
  vegetablesContainer.innerHTML = ''
  let newItems = listOfVegetables.filter((title) => {
    if (title.name.toLowerCase().trim().includes(searchTerm.trim())) 
    {
      check=1;
      return 1;
    }
    else
    {
      document.getElementById("warning").innerHTML="No vegetables found";
    }
    
  });
  console.log('new', newItems)
  writeDate(newItems);
}

const listOfVegetables = [
  {
    id:1,
    name: "Drumstick",
    price: "25",
    url: "image/drumstick.jpg"
  },
  {
    id:2,
    name: "Carrot",
    price: "15",
    url: "image/carrot.jpg"
  },
  {
    id:3,
    name: "Beans",
    price: "20",
    url: "image/beans.jpg"
  },
  {
    id:4,
    name: "Beetroot",
    price: "12",
    url: "image/beetroot.jpg"

  },
  {
    id:5,
    name: "Cabbage",
    price: "30",
    url: "image/cabbage.jpg"

  },
  {
    id:6,
    name: "Onion",
    price: "28",
    url: "image/onion.jpg"
  },
  {
    id:7,
    name: "Tomato",
    price: "7",
    url: "image/tomato.jpg"
  },
  {
    id:8,
    name: "Brinjal",
    price: "16",
    url: "image/brinjal.jpg"
  },
  {
    id:9,
    name: "Capcicum",
    price: "40",
    url: "image/capcicum.jpg"
  },
  {
    id:10,
    name: "Potato",
    price: "18",
    url: "image/potato.jpg"
  },
  {
    id:11,
    name: "Pumpkin",
    price: "45",
    url: "image/pumpkin.jpg"
  },
  {
    id:12,
    name: "BitterGuard",
    price: "14",
    url: "image/bitterguard.jpg"
  },
  {
    id:13,
    name: "Califlower",
    price: "15",
    url: "image/califlower.jpg"
  }
];


function initStore() {
  const items = listOfVegetables;
  writeDate(items);

}

function writeDate(items) {

  items.forEach(item => {
    if(check==1)
    {
      document.getElementById("warning").innerText='';
    }
    const li = document.createElement('div');
    li.className = "temp"
    li.innerHTML = `<div id="veges" class="vege" }>
    <h2 class="veg">${item.name}</h2>
    <p>Price Rs. ${item.price}</p>
    <img src=${item.url} alt="Lamp" width="70%" style="border-radius:10" height="100" />
    </div>`
    vegetablesContainer.appendChild(li);
  })
}
initStore();
