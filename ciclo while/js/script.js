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
let u=0;

do{
    art.innerHTML += `<div>${list[u]}</div>`;
    u++;
}while(u<list.length);
