function checkExam(array1, array2) {
  let grade = 0
  array2.forEach((ans, i) => {
   !ans ? grade 
   : ans == array1[i] ? grade += 4 
   : ans != array1[i] ? grade -= 1 
   : grade
  })
  return grade < 0 ? 0 : grade
}