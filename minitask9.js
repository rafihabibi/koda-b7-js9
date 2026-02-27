function callBackFunc(arr, callBackArr){
  let arrKosong = [];
  
  for(let i=0; i < arr.length;i++) {
    let ambilData = arr[i];
    
    let hasilCallback = callBackArr(ambilData);
      arrKosong.push(hasilCallback);
    }
    return arrKosong;
  }
let angkaArr = [1, 2, 3, 4, 5];

function runCallback(angka) {
  return angka * 2;
}

let hasil = callBackFunc(angkaArr,runCallback);
console.log(hasil);