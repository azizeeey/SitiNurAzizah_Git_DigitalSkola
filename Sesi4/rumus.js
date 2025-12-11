export function kalkulator(angka1, angka2, operator) {
  operator = operator.trim();
  switch (operator) {
    case "+":
      return angka1 + angka2;
    case "-":
      return angka1 - angka2;
    case "*":
      return angka1 * angka2;
    case "/":
      if (angka2 === 0) {
        return "Pembagian dengan 0 tidak diperbolehkan!";
      }
      return angka1 / angka2;
    default:
      return "Operator tidak valid!";
  }
}