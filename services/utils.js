//--------------------------------------------------------------------
//STORAGE
function checkIfStorage(key) {
  let storageItems = loadFromStorage(key);

  if (storageItems === null || storageItems.length === 0) return false;
  else return true;
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}


//GET RANDOM NUM
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//--------------------------------------------------------------------
//GET RANDOM COLOR
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



//SHUFFLE [GOES WITH GET RANDOM NUM]
function shuffle(arr) {
  var random = getRandomArbitrary(0, arr.length);
  var sortedArr = [];

  for (var i = 0; i <= arr.length; i++) {
    sortedArr.push(arr[random]);
    arr.splice(random, 1);
    random = getRandomArbitrary(0, arr.length);
    i = 0;
  }

  return sortedArr;
}

//--------------------------------------------------------------------
//RANDOM COLOR
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

