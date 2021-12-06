const jsOut = document.getElementById('jsOut');
// creation de pion 
let pion = document.createElement('img');
pion.src = 'pion.png';
// style du pion
pion.style.cssText = 'display: flex; margin: 0 auto';
function constructionCage() {

    // creation de la Cage
    let table = document.createElement('table');
    table.style.cssText = 'height: 520px;border: 2px solid yellow; border-collapse: collapse; width: 520px; margin: 0 auto';
    // Boucle pour les case de la cage
    for (let x = 0; x < 5; x++) {
        let tr = table.insertRow();
        for (let x = 0; x < 5; x++) {
            let td = tr.insertCell();
            td.addEventListener('mouseup', (e) =>{
                td.appendChild(pion);
            },false)
            // style des td
            td.style.cssText = 'width: 104px; border: 2px solid'
        }
        // style des tr
        tr.style.cssText = 'height: 104px'
    }
    let x = y = 2;
    // insertion du pion au milieu
    // insertion dans la div #jsOut
    table.rows[x].cells[y].appendChild(pion);
    jsOut.appendChild(table);
    return table;
}
// Position XY du pion
let Posx = Posy = 2;
// appelle de la fonction construction de cage avec pion au milieu
const table = constructionCage();
// Listener sur les touches flèches
addEventListener('keydown', (e) => {
    // affichage de la touche appuyées
    console.log(e.key)
    switch (e.key) {
        case 'ArrowUp':
            // console.log('Up pressed');
            Up();
            break;
        case 'ArrowLeft':
            // console.log('Left pressed');
            Left();
            break;
        case 'ArrowDown':
            // console.log('Down pressed');
            Down();
            break;
        case 'ArrowRight':
            // console.log('Right pressed');
            Right();
            break;
        default:
            return;
    }
}, false)
// Remove(Pas besoin de remove, JS prendra le seul pion qui existe et le déplacera) && append du pion
function Up() {
    if (Posx > 0) {
        Posx--;
        table.rows[Posx].cells[Posy].appendChild(pion)
    }
}
function Left() {
    if (Posy > 0) {
        Posy--;
        table.rows[Posx].cells[Posy].appendChild(pion)
    }
}
function Down() {
    if (Posx < 4) {
        Posx++;
        table.rows[Posx].cells[Posy].appendChild(pion)
    }
}
function Right() {
    if (Posy < 4) {
        Posy++;
        table.rows[Posx].cells[Posy].appendChild(pion)
    }
}
// BONUS //
// déplacement aléatoire du pion
// setInterval(() => {
//     let rnd = Math.floor(Math.random() * 3)
//     switch (rnd) {
//         case 0:
//             Up();
//             break;
//         case 1:
//             Left();
//             break;
//         case 2:
//             Down()
//             break;
//         case 3:
//             Right();
//             break;
//         default:
//             break;
//     }
// }, 2000)