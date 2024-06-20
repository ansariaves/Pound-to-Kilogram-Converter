document.getElementById('kg').addEventListener('input', function() {
    let kg = this.value;
    let lb = (kg * 2.20462).toFixed(2);
    document.getElementById('lb').value = lb;
});

document.getElementById('lb').addEventListener('input', function() {
    let lb = this.value;
    let kg = (lb / 2.20462).toFixed(2);
    document.getElementById('kg').value = kg;
});
