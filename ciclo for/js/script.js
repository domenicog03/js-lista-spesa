//Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
//Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
//ciclo for

const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

const art = document.querySelector('#articolo');

for(let i=0; i<list.length; i++){
    art.innerHTML += `<div>${list[i]}</div>`;

}