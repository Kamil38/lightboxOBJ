const modaalObj = {
    //eigenschappen
    alleGroot  : document.querySelectorAll('.groot'),
    alleKlein  : document.querySelectorAll('.klein'),
    alleInhoud : [],



    //methods
    verwijderModaal: function() {
        document.getElementById('modaal').remove();
    },

    maakModaal: function(num) {
        console.log(this.alleInhoud[num]);
        let modaal = document.createElement('div');
        modaal.className = 'modaal';
        modaal.id = 'modaal';
        modaal.addEventListener('click', this.verwijderModaal);
        let sltknp = document.createElement('i');
        sltknp.className = 'fas fa-times-circle sluit-knop';
        sltknp.addEventListener('click', this.verwijderModaal);
        let modaalContainer = document.createElement('div');
        modaalContainer.className = 'modaal-container';
        modaalContainer.innerHTML = this.alleInhoud[num].innerHTML;
        modaalContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        modaalContainer.prepend(sltknp);
        modaal.append(modaalContainer);
        document.body.append(modaal);
    },

    initialiseren : function() {
        for(let i=0; i<this.alleGroot.length; i++) {
            this.alleInhoud.push(this.alleGroot[i]);
            this.alleGroot[i].remove();
        }
        for(let i=0; i<this.alleKlein.length; i++) {
            this.alleKlein[i].addEventListener('click', function() {
                modaalObj.maakModaal(i)
            })
        }
    }

}



