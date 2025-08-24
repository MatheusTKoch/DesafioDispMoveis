export function maskTelefone(value: string): string {
  value = value.replace(/\D/g, '').slice(0, 11);
  if (value.length > 10) {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (value.length > 6) {
    return value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else if (value.length > 2) {
    return value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  }
  return value;
}
