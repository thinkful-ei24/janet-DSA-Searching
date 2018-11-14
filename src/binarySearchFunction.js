export default function binarySearch(num, array, start, end,counter) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length - 1 : end;
  counter= counter===undefined? 0: counter;

  if (start > end) {
    counter++;
    return {
      counter:counter,
      found:false
    };
  }
  const midindex = Math.floor((start + end) / 2);
  const item = array[midindex];

  //base case
  if(item === num){
    counter++;
    return {
    counter:counter,
    found:true
  };
  }
  else if (item < num) {
    counter++;
    return binarySearch(num, array, midindex + 1, end, counter);
  }
  else if (item > num) {
    counter++;
    return binarySearch(num, array, start, midindex - 1,counter);
  }
}