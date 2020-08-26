export const utilsService = {
  checkIfStorage,
  saveToStorage,
  loadFromStorage,
  getRandomArbitrary,
  getRandomColor,
  getFormattedDate,
  getRandId,
  getTimeStamp
}


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

//---------------------------------------------------------------------
// GET CURRENT DATE FORAMTED [ISRAEL]
function getFormattedDate(timestamp) {



  var a = new Date(timestamp);
  var year = a.getFullYear();
  var month = a.getMonth() + 1;
  var date = a.getDate();

  var time = date + '/' + month + '/' + year

  return time;

}
//---------------------------------------------------------------------
// GET SPECIFIC DATE TO TIMESTAMP
function getTimeStamp(date = '15/1/1995') {
  var myDate = date;
  myDate = date.split("/");
  
  var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
  
  return newDate.getTime()
}
//---------------------------------------------------------------------
// GET RANDOM ID
function getRandId(length = 8) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
