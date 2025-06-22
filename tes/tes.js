let intervalId;
let isIncrementing = false;
let divA = document.getElementById('divA');
let divB = document.getElementById('divB');
let kotakSatu = document.getElementById('kotak-satu');
let valueA = 1; // Nilai awal div A

// let rumus;

divA.textContent = valueA; // Tampilkan nilai awal

kotakSatu.addEventListener('click', function () {
    // divA.textContent = "0";
    // rumus = valueA + 2;

    valueA += 2;

    divA.textContent = valueA;
});

divB.addEventListener('click', function () {
    if (isIncrementing) {
        // Jika sedang incrementing, hentikan
        clearInterval(intervalId);
        isIncrementing = false;
        divB.textContent = "Play";
    } else {
        // Jika tidak sedang incrementing, mulai
        intervalId = setInterval(function () {
            valueA++;
            divA.textContent = valueA;
        }, 300);
        isIncrementing = true;
        divB.textContent = "Stop";
    }
});