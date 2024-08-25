String.prototype.toAlternatingCase = function () {
  return this.split("").map((a) => a = a.toLowerCase() == a ? a.toUpperCase() : a.toLowerCase()).join("")
}