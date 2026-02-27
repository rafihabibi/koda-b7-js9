function proccesorArray(arr, proccesor){
  let arrKosong = [];
  
  for(let i=0; i < arr.length;i++) {
    let ambilData = arr[i];
    
    let hasilCallback = proccesor(ambilData);
      arrKosong.push(hasilCallback);
    }
    return arrKosong;
  }

const showNumber = num => `Number: ${num}`;
const dollar = num => `$${num}`;
const addFive = num => `Hasil :${num + 5}`;

const number = [1,2,3,4,5];
console.log(proccesorArray(number, showNumber));
console.log(proccesorArray(number, dollar));
console.log(proccesorArray(number, addFive));
