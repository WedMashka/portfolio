"use strict"

/****Расчет таблицы**** */
function multiplicationData(x, n) {
   if (x && n) {
      if (x == (n + 1)) {
         let show = document.getElementById('pageSectionValue');
         show.style.visibility = 'visible';
         show.style.opacity = '1';
      } else {
         let div = document.createElement('div');
         for (let i = 1; i < 11; i++) {
            let t;
            t = x * i;
            let p = document.createElement('p');
            p.innerHTML = `${x}  *  ${i}  =  ${t}`;
            div.append(p);
         }
         document.getElementById('pageSectionValue').append(div);
         return multiplicationData(x = x + 1, n);
      }
   }
};

function multiplicationData1() {
   document.getElementById('pageSectionValue').innerHTML = '';
   let inputValueX = Number(document.getElementById('inputValueX').value);
   let inputValueN = Number(document.getElementById('inputValueN').value);
   let x = inputValueX;
   let n = inputValueN;
   multiplicationData(x, n);
}



/**********Функция скрытия ранее созданного резулт=ьтата.*** */



function hiddenEtim() {
   let show = document.getElementById('pageSectionValue');
   show.style.opacity = '';
   show.style.visibility = 'hidden';
}; 

let inputValueX = document.getElementById('inputValueX');
let inputValueN = document.getElementById('inputValueN');

inputValueX.oninput = hiddenEtim;
inputValueN.oninput = hiddenEtim;
