const precio = 1599990

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function sumar() {parrafo = document.querySelector(".cantidad");
cuenta = Number(parrafo.innerHTML);
cuenta = cuenta + 1;
parrafo.innerHTML = cuenta;
}

function restar() {
  parrafo = document.querySelector(".cantidad");
  cuenta = Number(parrafo.innerHTML);
  cuenta = cuenta - 1;
  parrafo.innerHTML = cuenta;
}

cuenta = document.querySelector(".cantidad");

totalSpan = document.querySelector(".valor-total");
totalSpan.innerHTML = precio * cuenta;

