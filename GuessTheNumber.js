let lagi = true;
while (lagi) {
  let maximum = parseInt(prompt("Tentukan angka maksimal: "));

  while (!maximum || maximum < 3) {
    maximum = parseInt(prompt("Angka maksimal terlalu rendah, tolong tentukan lagi: "));
  }

  const numTarget = Math.floor(Math.random() * maximum) + 1;
  console.log(numTarget);

  let guess = parseInt(prompt("Silahkan tebak angkanya: "));
  let attempt = 1;

  while (guess !== numTarget) {
    attempt++;
    if (guess > numTarget) {
      guess = parseInt(prompt("Angka terlalu tinggi, silahkan coba lagi: "));
    } else {
      guess = parseInt(prompt("Angka terlalu rendah, silahkan coba lagi: "));
    }
  }

  if (attempt === 1) {
    alert(`Selamat! Anda berhasil menebak pada percobaan pertama`);
  } else {
    alert(`Selamat! Anda berhasil menebak setelah percobaan ke-${attempt}`);
  }

  lagi = confirm("Mau main lagi?");
}

alert("Terima kasih sudah bermain!");
