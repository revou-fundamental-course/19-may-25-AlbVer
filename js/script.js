// Ambil elemen dari DOM
const inputSuhu = document.getElementById('input-suhu');
const hasilSuhu = document.getElementById('hasil-suhu');
const detailSuhu = document.getElementById('detail-suhu');

const btnKonversi = document.querySelector('.bg-konversi');
const btnReset = document.querySelector('.bg-reset');
const btnReverse = document.querySelector('.bg-reverse');

const fromScale = document.getElementById('from-scale');
const toScale = document.getElementById('to-scale');

// Fungsi konversi suhu 2 arah (C ⇄ F)
function konversiSuhu() {
  const suhu = parseFloat(inputSuhu.value);
  const dari = fromScale.value;
  const ke = toScale.value;

  if (isNaN(suhu)) {
    hasilSuhu.value = 'Masukkan angka yang valid.';
    detailSuhu.value = '';
    return;
  }

  let hasil = 0;
  let detail = '';

  if (dari === ke) {
    hasil = suhu;
    detail = `Skala sama: ${suhu.toFixed(2)} °${dari}`;
  } else if (dari === 'C' && ke === 'F') {
    hasil = (suhu * 9/5) + 32;
    detail = `${suhu} °C = (${suhu} × 9/5) + 32 = ${hasil.toFixed(2)} °F`;
  } else if (dari === 'F' && ke === 'C') {
    hasil = (suhu - 32) * 5/9;
    detail = `${suhu} °F = (${suhu} - 32) × 5/9 = ${hasil.toFixed(2)} °C`;
  }

  hasilSuhu.value = hasil.toFixed(2);
  detailSuhu.value = detail;
}

// Fungsi reset
function resetForm() {
  inputSuhu.value = '';
  hasilSuhu.value = '';
  detailSuhu.value = '';
  fromScale.selectedIndex = 0;
  toScale.selectedIndex = 1;
}

// Fungsi reverse (tukar skala)
function reverseSuhu() {
  const sementara = fromScale.value;
  fromScale.value = toScale.value;
  toScale.value = sementara;

  if (inputSuhu.value.trim() !== '') {
    konversiSuhu();
  } else {
    hasilSuhu.value = '';
    detailSuhu.value = '';
  }
}

// Event listener
btnKonversi.addEventListener('click', (e) => {
  e.preventDefault();
  konversiSuhu();
});

btnReset.addEventListener('click', (e) => {
  e.preventDefault();
  resetForm();
});

btnReverse.addEventListener('click', (e) => {
  e.preventDefault();
  reverseSuhu();
});
