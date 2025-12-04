// src/utils/translateCountry.js
export function translateCountry(countryCode) {
  const map = {
    CZECHIA: "Česká republika",
    SLOVAKIA: "Slovensko",
  };
  return map[countryCode] || countryCode;
}
