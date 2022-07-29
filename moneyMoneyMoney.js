function calculateYears(principal, interest, tax, desired) {
  let years = 0
 
  while (principal < desired) {
    const i = principal * interest
    const t = i * tax
    principal = principal + i - t
    years++
  }
return years
}