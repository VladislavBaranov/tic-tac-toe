class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
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
        
    }

    noMoreTurns() {
        let result = 0;
        this.matrix.forEach(row => {
            result += row.filter(item => item === null).length;
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
