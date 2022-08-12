function findOdd(A) {
  matches = Array.from(A
    .reduce((m, v) => m.set(v, [...(m.get(v) || []), v]), new Map)
    .values()
  );
  const result = matches.filter(match => match.length % 2 != 0)
  return result[0][0]
}