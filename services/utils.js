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

//--------------------------------------------------------------------
//COPY A MAT
function copyMat(mat) {
  var newMat = [];
  for (var i = 0; i < mat.length; i++) {
    newMat.push([]);
    for (var j = 0; j < mat.length; j++) {
      newMat[i][j] = mat[i][j];
    }
  }
  console.log(newMat);
}
//--------------------------------------------------------------------
//CREATE A MAT
function createMat(rows, cols) {
  //not usable just for copy
  var mat = [];
  for (var i = 0; i < rows; i++) {
    mat.push([]);
    for (var j = 0; j < cols; j++) {
      mat[i][j] = i + j;
    }
  }
  console.log(mat);
}
//--------------------------------------------------------------------
//CHECKS MAT'S NEIGHBORS
function checkNeighbors(mat, colsIdx, rowsIdx) {
  var count = 0;
  for (var i = rowsIdx - 1; i <= rowsIdx + 1; i++) {
    if (i < 0 || i >= mat.length) continue;
    for (var j = colsIdx - 1; j <= colsIdx + 1; j++) {
      if (j < 0 || j >= mat.length) continue;
      if (j === colsIdx && i === rowsIdx) continue;
      if (mat[i][j] === 3) count++;
    }
  }
  console.log(count);
}
//--------------------------------------------------------------------
//COUNTS A MAT'S NEIGHBORS
function countNeighbors(mat) {
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat.length; j++) {
      checkNeighbors(mat, i, j);
    }
  }
}
