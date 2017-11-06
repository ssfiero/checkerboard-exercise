function makeBoard() {

  // 9 column x 7 rows = 63 total divs
  for (let i = 0; i < 63; i++) {
    let body = document.querySelector('body');
    let checkDiv = document.createElement('div')
    let checker = body.appendChild(checkDiv);

    if (i % 2 === 0) {
      checker.setAttribute("style", "width: 11.1%; float: left; paddingBottom: 11.1%; height: 100px; background-color: red");
    } else {
      checker.setAttribute("style", "width: 11.1%; float: left; paddingBottom: 11.1%; height: 100px; background-color: black");
    }
  }

};

makeBoard();
