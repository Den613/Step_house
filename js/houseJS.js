function chessLetters(){ // функция генерирует буквы от A..H

  var letters = [];
  var charA = "A";
  var charH = "H";
  var i = charA.charCodeAt(0); // A
  var j = charH.charCodeAt(0);// H

  for(; i <= j; i++)
    letters.push(String.fromCharCode(i));

  return letters; // возвращаем массив букв
}

function chessTable(){ // функция которая делает доску

  var table = [];
  var rows = 12;
  var cols = 12;
  // размер доски 12 х 12
  for(var i = 0; i < rows; i++){
    table.push([]);
    table[i].push( new Array(cols));
    for(var j = 0; j < cols; j++){

      if((i > 1 && i < 10) && (j > 1 && j < 10))
        table[i][j] = chessLetters()[j-2]+(1+i-2);// заполняем доску в середине
      else
        table[i][j] = 0; // остальное заполняем нулями

    }
    //получаем доску с рамочкой из нулей
  }
  return table; // возвращаем массив доски
}

function stepHorse(step){ // функция возможных ходов конем

  var n = 10;
  var turn_options = ["нет такого хода!!! "];

  //производим операции с доской которая находится по середине (2..10)
  for(var i = 2; i < n; i++){
    for(var j = 2; j < n; j++){
      if(chessTable()[i][j] == step.toUpperCase()){ // проверяем ходы для начального положения коня
        //ходы коня
        var step1 = chessTable()[i-2][j-1];
        var step2 = chessTable()[i-2][j+1];
        var step3 = chessTable()[i-1][j+2];
        var step4 = chessTable()[i+1][j+2];
        var step5 = chessTable()[i+2][j+1];
        var step6 = chessTable()[i+2][j-1];
        var step7 = chessTable()[i-1][j-2];
        var step8 = chessTable()[i+1][j-2];

        var Sp = [step1, step2, step3, step4, step5, step6, step7, step8];

        for(var s = 0; s < Sp.length; s++){

          if(Sp[s] != 0){ // проверям чтобы ход не попадал в нулевую область и есть ли вообще такой ход
            turn_options.push(" "+Sp[s]+" ");
            delete turn_options[0];
          }

        }
      }
    }
  }
  alert(" Возможные варианты хода:\n\n  "+(turn_options).join(" ")); //выводим результаты
}

function valid(form){ //функция отвечающая за обработку данных из формы

  var horseBegin = form.horse.value; //начальное положение коня
  stepHorse(horseBegin); // функция возможных ходов

 }
