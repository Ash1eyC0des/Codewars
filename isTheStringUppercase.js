String.prototype.isUpperCase = function(str) {
  return String(this) === this.toUpperCase()
}