const alleGroot = document.querySelectorAll('.groot');
const alleKlein = document.querySelectorAll('.klein');

let alleInhoud = [];

for(let i=0; i<alleGroot.length; i++) {
    alleInhoud.push(alleGroot[i]);
    alleGroot[i].remove();
}

function verwijderModaal() {
    document.getElementById('modaal').remove();
}

function maakModaal(num) {
    console.log(alleInhoud[num]);
    let modaal = document.createElement('div');
    modaal.className = 'modaal';
    modaal.id = 'modaal';
    modaal.addEventListener('click', verwijderModaal);
    let sltknp = document.createElement('i');
    sltknp.className = 'fas fa-times-circle sluit-knop';
    sltknp.addEventListener('click', verwijderModaal);
    let modaalContainer = document.createElement('div');
    modaalContainer.className = 'modaal-container';
    modaalContainer.innerHTML = alleInhoud[num].innerHTML;
    modaalContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    modaalContainer.prepend(sltknp);
    modaal.append(modaalContainer);
    document.body.append(modaal);
}

for(let i=0; i<alleKlein.length; i++) {
    alleKlein[i].addEventListener('click', function() {
        maakModaal(i)
    })
}