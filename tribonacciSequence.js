function tribonacci(signature,n){
  let sequence = []
  for( let i = 0; i <= n-1; i++) {
    if (i <= 2) {
      sequence.push(signature[i])
    } else {
      sequence.push(sequence[i -1] + sequence[i - 2] + sequence[i - 3])
    }
  }
  return sequence
}