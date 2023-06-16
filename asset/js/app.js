



//un comentaite ajouté


function creationCalendier(mois, annee, cpt) {

    let table = document.createElement('table');
    let label = document.createElement('caption');
    const moisListe = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
        ];
    label.textContent = moisListe[mois - 1]+' '+ annee;
    table.appendChild(label);
    
    let semaine = document.createElement('thead');
    let semaine_element = document.createElement('th');
    let joursSemaine = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    for (let i = 0; i < joursSemaine.length; i++) {
        let th = document.createElement('th');
        th.textContent = joursSemaine[i]
        semaine.appendChild(th);
    }
    
    table.appendChild(semaine);

    let coprs = document.createElement('tbody');
    let nbJours = new Date(annee, mois, 0).getDate();
    let premierJ = new Date(annee, mois - 1, 1).getDay();
    let jours = document.createElement('tr');


    for (let i = 0; i < premierJ; i++) {
        let jourvide = document.createElement('td');
        jours.appendChild(jourvide);
    }

    


    for (let jour = 1; jour <= nbJours; jour++) {
        let date = document.createElement('td');
        date.textContent = jour;
        
        date.addEventListener('click',function(){
            /////style css faut placer ici
        });

        jours.appendChild(date);

        if((jour + premierJ) % 7 === 0){
            coprs.appendChild(jours);
            jours = document.createElement('tr');
            
        }
    }


    let lastDay = (nbJours + premierJ) % 7;
    if (lastDay !== 0) {

        for (let i = lastDay; i < 7; i++) {
            let aLaLigne = document.createElement('td');
            jours.appendChild(aLaLigne)
            
        }
        coprs.appendChild(jours);
    }

    table.appendChild(coprs);


    let calendrier = document.getElementById('calendrier');
    calendrier.appendChild(table);

    //console.log(cpt + 1);
    return cpt + 1;
    
}


let cpt = 0


for (let mois = 1; mois <= 12; mois++) {
    cpt = creationCalendier(mois, 2023, cpt);
    
}
for (let mois = 1; mois <= 12; mois++) {
    cpt = creationCalendier(mois, 2024, cpt);
    
}
for (let mois = 1; mois <= 12; mois++) {
    cpt = creationCalendier(mois, 2025, cpt);
    
}
for (let mois = 1; mois <= 12; mois++) {
    cpt = creationCalendier(mois, 2026, cpt);
    
}
for (let mois = 1; mois <= 12; mois++) {
    cpt = creationCalendier(mois, 2027, cpt);
    
}

//console.log(cpt);

let compteur = 0;




function getLargeur(compt) {
    let moisTab = document.getElementsByTagName('table');
    let firstMois = moisTab[compt];

    return firstMois.offsetWidth;

}







let suivantB = document.getElementById('suivantB');
suivantB.addEventListener('click', function(){
    
    if (compteur <cpt) {
        let root = document.querySelector(':root');

        let rootValeur = getComputedStyle(root);

        let leftVal =   rootValeur.getPropertyValue('--left')

        let leftValTab = []

        for (let i = 0; i < leftVal.length; i++) {
            let caractere = leftVal[i];

            if (caractere !== 'p' && caractere !== 'x') {
                leftValTab.push(caractere);
            }
            
        }
        let left = leftValTab.join('');

        let leftInt = parseInt(left);

        leftInt = leftInt - getLargeur(compteur);

        
        root.style.setProperty('--left', `${leftInt}px`)
        compteur += 1;
    }
});

let precedentB = document.getElementById('precedentB');
precedentB.addEventListener('click', function(){
    if (compteur > 0) {
        let root = document.querySelector(':root');

        let rootValeur = getComputedStyle(root);

        let leftVal =   rootValeur.getPropertyValue('--left')

        let leftValTab = []

        for (let i = 0; i < leftVal.length; i++) {
            let caractere = leftVal[i];

            if (caractere !== 'p' && caractere !== 'x') {
                leftValTab.push(caractere);
            }
            
        }
        let left = leftValTab.join('');

        let leftInt = parseInt(left);

        leftInt = leftInt + getLargeur(compteur);

        
        root.style.setProperty('--left', `${leftInt}px`)
        compteur -= 1;
    }
});



//Formulaire

var box = document.querySelector(".box");
box.style.display = "none";

function closeBox() {
    var box = document.querySelector(".box");
    box.style.display = "none";
}

let plus = document.getElementById('plus');
plus.addEventListener('click',function(){
    var box = document.querySelector(".box");
    box.style.display = "block";
});





// liste


function creerListeComplete(debut, fin) {
    let liste = document.getElementById('liste');

    // Années
    for (let annee = debut; annee <= fin; annee++) {
        let divAnnee = document.createElement('div');
        let h4Annee = document.createElement('h4');
        h4Annee.textContent = annee;
        divAnnee.appendChild(h4Annee);

        // Mois
        let mois = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
        ];
        for (let i = 0; i < mois.length; i++) {
        let asideMois = document.createElement('aside');
        let h5Mois = document.createElement('h5');
        h5Mois.textContent = mois[i];
        asideMois.appendChild(h5Mois);

        // Jours
        for (let jour = 1; jour <= 31; jour++) {
            let sectionJour = document.createElement('section');
            let h6Jour = document.createElement('h6');
            h6Jour.textContent = jour;
            sectionJour.appendChild(h6Jour);

            let ulTaches = document.createElement('ul');

            sectionJour.appendChild(ulTaches);
            asideMois.appendChild(sectionJour);
        }

        divAnnee.appendChild(asideMois);
        }

        liste.appendChild(divAnnee);
    }
}

// Appel de la fonction pour créer la liste complète
creerListeComplete(2023, 2025);







function determiner(tabHeure, heureRef) {
    let max = null;
    for (let i = 0; i < tabHeure.length; i++) {
        let heureCourante = tabHeure[i];
        if (
            heureCourante > heureRef && // Heure courante est plus récente que l'heure de référence
            (max === null || heureCourante < max) // Heure courante est plus ancienne que max
        ) {
            max = heureCourante;
        }
    }
    return tabHeure.indexOf(max);
}




function ajouter(anneeF, moisF, jourF, heureF, tacheF, descriptionF){



    let listes = document.getElementById('liste');
    let liste_annees = listes.getElementsByTagName('div');
    // console.log(liste_annees);

    for (let i = 0; i < liste_annees.length; i++) {
        let annee = liste_annees[i].getElementsByTagName('h4');
        let anneeTxt = annee[0];
        // console.log(anneeTxt.textContent);
        // console.log(anneeF);


        if (anneeTxt.textContent === anneeF) {
            // console.log(anneeTxt.textContent + " annee trouvé " + i);
            let liste_moi = liste_annees[i].getElementsByTagName('aside');
            for (let j = 0; j < liste_moi.length; j++) {
                let mois = liste_moi[j].getElementsByTagName('h5');
                let moiTxt= mois[0];
                
                if (moiTxt.textContent === moisF) {
                    // console.log(moiTxt.textContent + " mois trouvé " + j);
                    let list_jours = liste_moi[j].getElementsByTagName('section');
                    for (let k = 0; k < list_jours.length; k++) {
                        let jour = list_jours[k].getElementsByTagName('h6');
                        let jourTxt = jour[0];
                        if (parseInt(jourTxt.textContent) === parseInt(jourF)) {
                            // console.log(jourTxt.textContent + " jours trouvé " + k);
                            let liste_tache = list_jours[k].getElementsByTagName('ul');
                            // console.log(liste_tache);
                            let tache = liste_tache[0].getElementsByTagName('li');
                            // console.log(tache);
                            let tabHeure = []

                            for (let l = 0; l < tache.length; l++) {
                                // console.log(tache[l]);
                                let heure = tache[l].getElementsByTagName('p');
                                // console.log(heure[1].textContent);
                                tabHeure.push(heure[1].textContent);
                                
                            }

                            
                            


                            
                            
                            let ajoutTache = document.createElement('li');
                            let titre = document.createElement('p');
                            titre.textContent = tacheF;
                            ajoutTache.appendChild(titre);

                            let heureParagraphe = document.createElement('p');
                            heureParagraphe.textContent = heureF;
                            ajoutTache.appendChild(heureParagraphe);

                            let descriptionParagraphe = document.createElement('p');
                            descriptionParagraphe.textContent = descriptionF;
                            ajoutTache.appendChild(descriptionParagraphe);

                            let boutonFait = document.createElement('button');
                            boutonFait.textContent = 'Fait';
                            
                            ajoutTache.appendChild(boutonFait);

                            let boutonSupprimer = document.createElement('button');
                            boutonSupprimer.textContent = 'Supprimer';
                            
                            ajoutTache.appendChild(boutonSupprimer);

                            liste_tache[0].insertBefore(ajoutTache, tache[determiner(tabHeure, heureF)]);
                            
                            // console.log('ajouté');
                            

                            
                            

                        }
                        
                    }
                }
            }
        }

    }


}



function scrolle(anneeF, moisF, jourF){



    let listes = document.getElementById('liste');
    let liste_annees = listes.getElementsByTagName('div');
    // console.log(liste_annees);

    for (let i = 0; i < liste_annees.length; i++) {
        let annee = liste_annees[i].getElementsByTagName('h4');
        let anneeTxt = annee[0];
        // console.log(anneeTxt.textContent);
        // console.log(anneeF);


        if (anneeTxt.textContent === anneeF) {
            // console.log(anneeTxt.textContent + " annee trouvé " + i);
            let liste_moi = liste_annees[i].getElementsByTagName('aside');
            for (let j = 0; j < liste_moi.length; j++) {
                let mois = liste_moi[j].getElementsByTagName('h5');
                let moiTxt= mois[0];
                
                if (moiTxt.textContent === moisF) {
                    // console.log(moiTxt.textContent + " mois trouvé " + j);
                    let list_jours = liste_moi[j].getElementsByTagName('section');
                    for (let k = 0; k < list_jours.length; k++) {
                        let jour = list_jours[k].getElementsByTagName('h6');
                        let jourTxt = jour[0];
                        if (parseInt(jourTxt.textContent) === parseInt(jourF)) {
                            

                            list_jours[k].scrollIntoView({ behavior: 'smooth' });

                            
                            

                        }
                        
                    }
                }
            }
        }

    }


}





ajouter("2023", "janvier", "01", "13:23", "Sortir le chien","Le colier est dans la cave");
ajouter("2023", "janvier", "20", "11:23", "Ranger le salon","Acheter du PK");
ajouter("2023", "janvier", "23", "10:23", "Veterinaire du chien","Rex a des douleurs à la pâte");
ajouter("2024", "mars", "12", "17:23", "Surprise JS", "Commander les cadeaux du prof de js");


function refraiche() {
    var box = document.querySelector(".box");
    box.style.display = "none";
    var box = document.querySelector(".box");
    box.style.display = "none";


    let listes = document.getElementById('liste');
    let liste_annees = listes.getElementsByTagName('div');
        // console.log(liste_annees);

    for (let i = 0; i < liste_annees.length; i++) {
        let li = liste_annees[i].querySelectorAll('li');
        if (li.length === 0) {
            liste_annees[i].classList.add('vide')
        }else{
            liste_annees[i].classList.remove('vide')
        }

    }
    let liste_mois = listes.getElementsByTagName('aside');
        // console.log(liste_annees);

    for (let i = 0; i < liste_mois.length; i++) {
        let li = liste_mois[i].querySelectorAll('li');
        if (li.length === 0) {
            liste_mois[i].classList.add('vide');
        }else{
            liste_mois[i].classList.remove('vide');
        }
        
    }

    let liste_jour = listes.getElementsByTagName('section');
        // console.log(liste_annees);

    for (let i = 0; i < liste_jour.length; i++) {
        let li = liste_jour[i].querySelectorAll('li');
        // console.log(li.length);
        if (li.length === 0) {
            liste_jour[i].classList.add('vide');
        }else{
            liste_jour[i].classList.remove('vide');
        }
        
    }

    // Sélectionne tous les boutons de la page
    var boutons = document.querySelectorAll('button');

    // Parcourt tous les boutons
    boutons.forEach(function(bouton) {
    // Vérifie si le textContent est égal à "Fait"
    if (bouton.textContent === "Fait") {
        // Ajoute un gestionnaire d'événement 'click' sur le bouton
        bouton.addEventListener('click', function() {
        // Change la couleur du parent en gris
        this.parentNode.style.color = 'gray';
        refraiche();
        });
    }
    
    // Vérifie si le textContent est égal à "Supprimer"
    if (bouton.textContent === "Supprimer") {
        // Ajoute un gestionnaire d'événement 'click' sur le bouton
        bouton.addEventListener('click', function() {
        // Supprime le parent de l'élément (le bouton lui-même)
        this.parentNode.remove();
        refraiche();
        });
    }
    });


    calendrierRefraicheA();
    calendrierRefraicheB();

    

    
}


document.addEventListener('DOMContentLoaded', function() {
    // Ton code à exécuter après le chargement de la page
    refraiche();
    // console.log('La page est complètement chargée.');
});



let button = document.getElementById('envoyer');
button.addEventListener('click', function(){
    let titre = document.getElementById('titre');
    let date = document.getElementById('date');
    let heure = document.getElementById('heure');
    let description = document.getElementById('description');
    let titreTxt = titre.value;
    let tabDate = date.value.split('-') ;
    let jour = tabDate[2];
    let heureTxt = heure.value;
    let moiVal = tabDate[1];
    let annee = tabDate[0];
    let deskTxt = description.value;
    let mois = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
        ];

    let moiTxt = mois[parseInt(moiVal) - 1]
    
    // console.log(annee);
    // console.log(moiTxt);
    // console.log(heureTxt);
    // console.log(jour);
    // console.log(titreTxt);
    // console.log(deskTxt);
    
    ajouter(annee, moiTxt, jour, heureTxt, titreTxt, deskTxt);

    refraiche();

    
    

});




// Sélectionne tous les boutons de la page
var boutons = document.querySelectorAll('button');

// Parcourt tous les boutons
boutons.forEach(function(bouton) {
  // Vérifie si le textContent est égal à "Fait"
  if (bouton.textContent === "Fait") {
    // Ajoute un gestionnaire d'événement 'click' sur le bouton
    bouton.addEventListener('click', function() {
      // Change la couleur du parent en gris
      this.parentNode.style.color = 'gray';
      refraiche();
    });
  }
  
  // Vérifie si le textContent est égal à "Supprimer"
  if (bouton.textContent === "Supprimer") {
    // Ajoute un gestionnaire d'événement 'click' sur le bouton
    bouton.addEventListener('click', function() {
      // Supprime le parent de l'élément (le bouton lui-même)
      this.parentNode.remove();
      refraiche();
    });
  }
});




function calendrierRefraicheA() {
    let listes = document.getElementById('liste');
    let liste_annees = listes.getElementsByTagName('div');
    // console.log(liste_annees);

    for (let i = 0; i < liste_annees.length; i++) {
        let annee = liste_annees[i].getElementsByTagName('h4');
        let anneeTxt = annee[0];


        let liste_moi = liste_annees[i].getElementsByTagName('aside');

        for (let j = 0; j < liste_moi.length; j++) {
            let mois = liste_moi[j].getElementsByTagName('h5');
            let moiTxt= mois[0];
                
            
            let list_jours = liste_moi[j].getElementsByTagName('section');
            
            for (let k = 0; k < list_jours.length; k++) {
                let liListe = list_jours[k].getElementsByTagName('li');

                if (liListe.length !== 0) {
                    let jour = list_jours[k].getElementsByTagName('h6');
                    let jourTxt = jour[0];

                    let moiAnnee = moiTxt.textContent + " " + anneeTxt.textContent;

                    // console.log(moiAnnee);
                    
                    // console.log(jourTxt.textContent);


                    let calendrier = document.getElementById('calendrier');
                    let listtd = document.getElementsByTagName('td');
                    


                    let listeCalendrier = calendrier.getElementsByTagName('table');


                    for (let l = 0; l < listeCalendrier.length; l++) {
                        let anneeMoi = listeCalendrier[l].getElementsByTagName('caption');
                        //console.log(anneeMoi[0]);
                        if (anneeMoi[0].textContent === moiAnnee) {
                            let joursCalendrier = listeCalendrier[l].getElementsByTagName('td');
                            for (let m = 0; m < joursCalendrier.length; m++) {
                                
                                if (joursCalendrier[m].textContent === jourTxt.textContent) {
                                    joursCalendrier[m].classList.add('jourPris');
                                    //console.log("Cest fait!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                                    
                                }
                                
                            }
                        }
                        
                    }









                    
                }
                

            }
            
        }
        
    }

}




function calendrierRefraicheB() {
    let listes = document.getElementById('liste');
    let liste_annees = listes.getElementsByTagName('div');
    // console.log(liste_annees);

    for (let i = 0; i < liste_annees.length; i++) {
        let annee = liste_annees[i].getElementsByTagName('h4');
        let anneeTxt = annee[0];


        let liste_moi = liste_annees[i].getElementsByTagName('aside');

        for (let j = 0; j < liste_moi.length; j++) {
            let mois = liste_moi[j].getElementsByTagName('h5');
            let moiTxt= mois[0];
                
            
            let list_jours = liste_moi[j].getElementsByTagName('section');
            
            for (let k = 0; k < list_jours.length; k++) {
                let liListe = list_jours[k].getElementsByTagName('li');

                if (liListe.length === 0) {
                    let jour = list_jours[k].getElementsByTagName('h6');
                    let jourTxt = jour[0];

                    let moiAnnee = moiTxt.textContent + " " + anneeTxt.textContent;

                    // console.log(moiAnnee);
                    
                    // console.log(jourTxt.textContent);


                    let calendrier = document.getElementById('calendrier');
                    
                    


                    let listeCalendrier = calendrier.getElementsByTagName('table');


                    for (let l = 0; l < listeCalendrier.length; l++) {
                        let anneeMoi = listeCalendrier[l].getElementsByTagName('caption');
                        //console.log(anneeMoi[0]);
                        if (anneeMoi[0].textContent === moiAnnee) {
                            let joursCalendrier = listeCalendrier[l].getElementsByTagName('td');
                            for (let m = 0; m < joursCalendrier.length; m++) {
                                
                                if (joursCalendrier[m].textContent === jourTxt.textContent) {
                                    joursCalendrier[m].classList.remove('jourPris');
                                    //console.log("Cest fait!!");
                                    
                                }
                                
                            }
                        }
                        
                    }









                    
                }
                

            }
            
        }
        
    }

}



let calendrier = document.getElementById('calendrier');

let lisTd = calendrier.getElementsByTagName('td')


for (let i = 0; i < lisTd.length; i++) {
    lisTd[i].addEventListener('click', function(){
        let jour = this.textContent;
        let tr = this.closest('tr');
        let tbody = tr.closest('tbody');
        
        let tab =  tbody.closest('table');
        let caption = tab.getElementsByTagName('caption');
        let moiAnne = caption[0].textContent;
        let tabMoisAnnee = moiAnne.split(" ");
        let moi = tabMoisAnnee[0];
        let annee = tabMoisAnnee[1];

        scrolle(annee, moi, jour);



    })
    
}






















  