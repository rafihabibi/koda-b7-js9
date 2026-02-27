function callBackFunc(arr, callBackArr){
  let arrKosong = [];
  
  for(let i=0; i < arr.length;i++) {
    let ambilData = arr[i];
    
    let hasilCallback = callBackArr(ambilData);
      arrKosong.push(hasilCallback);
    }
    return arrKosong;
  }

//Untuk menjalankan Callback.
let dataArr = [1, 2, 3, 4, 5];
function jalankanCallback(angka) {
    return angka + 2;
}

let hasil = callBackFunc(dataArr, jalankanCallback);
console.log(hasil);
