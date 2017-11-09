

let myApp = {

    createship: function (shipLength, letter){
        return {
            row: 0,
            col: 0,
            length: shipLength,
            name: letter,
            toString: function (){
                return "(" + this.row + "," + this.col + ") " + "Length: "
                + this.length + " Name: " +
                this.name;
            }
        };
    },




    create2d: function (rows, cols) {
        let ray = [];
        let counter = 0
        for (let row = 0; row < rows; row += 1) {
            let nextRow = [];
            for (let col = 0; col < cols; col += 1) {
                nextRow.push(counter);
                counter += 1;
            }
            ray.push(nextRow);
        } return ray;
    },

    //return int range min..max
    //max-min+1 --> number of values
    rndInt: function (min, max) {
        let count = max - min + 1; // 10, 20 >---- 11
        let x = Math.random() * count; // 0..10.9999
        x = Math.floor(x); //0.10
        x = x + min; // 10..20
        return x;
    },

    /* return math.floor(
            math.random() * (mx - min +1)
                + min;
            
    */

    main: function () {
        myApp.clrTxt();
        //grid = myApp.create2d(2, 2);
        //myApp.print2d(grid);
        let ship1 = myApp.createship(3, 'T')
        ship1.row = 1
        ship1.col = 4
        myApp.println(ship1.toString());
        let ship2 = myApp.createship(5, 'A')
        myApp.println(ship2.toString());
    },

    print: function (str) {
        let out = document.getElementById("out");
        out.value = out.value + str;
    },

    println: function (str) {
        myApp.print(str + '\n');

    },

    print2d: function (grid) {
        // print all rows
        for (let row = 0; row < grid.length; row += 1) {
            //print 1 row
            for (let col = 0; col < grid[row].length; col += 1) {
                myApp.print(grid[row][col] + " ")
            }
            //prints values and a return after each row
            myApp.println('');
        }
    },

    clrTxt: function () {
        document.getElementById('out').value = '';
    }
}
window.onload = myApp.main;