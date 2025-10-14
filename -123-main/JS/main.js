a = document.querySelector("#poligone_left")
b = document.querySelector("#poligone_right")
obvodka = document.querySelector('.p')

a.addEventListener('click', (event) => {
    a.style.fill = "black";
    b.style.fill = "white";
});

b.addEventListener('click', (event) => {
    a.style.fill = "white";
    b.style.fill = "black";
});
