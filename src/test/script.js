const city = ['jakarta', 'samrinda', 'semarang', 'sumedang', 'bogor'];

for(let c of city) {
  if(/xo/i.test(c)) {
    console.log('ada');
  }
}