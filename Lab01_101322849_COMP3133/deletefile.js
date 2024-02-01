fs.unlink('canada.txt', (err) => {
    if (err) throw err;
    console.log('canada.txt was deleted');
})

fs.unlink('us.txt', (err) => {
    if (err) throw err;
    console.log('us.txt was deleted');
})