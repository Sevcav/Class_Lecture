window.onload = init;

var fName = function (params) {
    //Function Body
}

//Function for handleng on click event for td elements
// td ID is in the format rowcol, "00", "01"......
function getCell (eventObj){
   let tdId = eventObj.target.id;
   const ALPHA = 'ABCDEFG';
   let row = tdId = tdId[0];
   // convert row number to letter
   let rowletter = ALPHA[row];
   // get column number from the tdID
   let colNumber = tdId[1];
   let cellAddr = rowLetter + colNumber;
   // good address, call the guess handler as related to BB Game
}

// get all the td elements (cells) into an array
function init (){
    let tdList = document.getElementsByTagName('td');

    // add onclick event to each td element in the list
    for(tdIndex = 0; tdIndex < eventObj; tdIndex ++)
    let tdElement = tdList[tdIndex];
    tdElement.onclick = getCell;

}