const poundInput = document.getElementById('pound-input');
const kiloInput = document.getElementById('kilo-input');
const convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', () => {
  const pounds = poundInput.value;
  const kilos = pounds * 0.45359237;
  kiloInput.value = isNaN(kilos) ? 0 : kilos;
});