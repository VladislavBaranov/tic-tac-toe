class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        /*   0 1 2
        *  0|. . .
        *  1|. . .
        *  2|. . .
        * */
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'x' ? 'o' : 'x');
        }
    }

    isFinished() {
    }

    getWinner() {
        let winner = null;
        //rows
        for (let i = 0; i < 3; i++) {
            if ((this.matrix[i][0] === this.matrix[i][1]) && ( this.matrix[i][1] === this.matrix[i][2])) {
                winner = this.matrix[i][0];
            }
        }
        //columns
        for (let i = 0; i < 3; i++) {
            if ((this.matrix[0][i] === this.matrix[1][i]) && (this.matrix[1][i] === this.matrix[2][i])) {
                winner = this.matrix[0][i];
            }
        }
        //diagonals
        if ((this.matrix[0][0] === this.matrix[1][1]) && (this.matrix[1][1] === this.matrix[2][2])) {
            winner = this.matrix[0][0];
        }
        if ((this.matrix[0][2] === this.matrix[1][1]) && (this.matrix[1][1] === this.matrix[2][0])) {
            winner = this.matrix[0][2];
        }

        return winner;
    }

    noMoreTurns() {
        let result = 0;
        this.matrix.forEach(function(row) { 
            result += row.filter(function(item){return item === null}).length; 
            });
        return !result;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
