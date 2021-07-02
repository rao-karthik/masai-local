const sudokuTest = (sudoku)=>{

    let len = sudoku.length;
    let flag = true;
    let count = 0;

    for( let i = 0; i < len; i++){
        for( let j = 0; j < sudoku[i].length; j++){
            let matCount = 0;
            for( let k = 0; k < sudoku[i][j].length; k++){
                for ( let l = 0; l < sudoku[i][j][k].length; l++){
                    matCount++;
                }
            }
            if(matCount !== 9 || matCount > 9){
                throw new Error("there should only be 9 cells in one 3*3 block")
            }
        }
    }

    for( let i = 0; i < len; i++){
        for( let j = 0; j < sudoku[i].length; j++){
            for( let k = 0; k < sudoku[i][j].length; k++){
                for ( let l = 0; l < sudoku[i][j][k].length; l++){
                    count++;
                    if(sudoku[i][j][k][l] > 9){
                        throw new Error("number should not be greater than 9")
                    }
                }
            }
        }
    }
    if(count !== 81){
        throw new Error("there sholud be a total of 81 cells")
    }

    for( let i = 0; i < len; i++){
        for( let j = 0; j < sudoku[i].length; j++){
            flag = Unique(sudoku[i][j]);
            if(flag === false){
                throw new Error("Each number in the 3*3 block should be different")
            }
        }
    }

    return ("This is a sudoku");
}

module.exports = sudokuTest;

function Unique(matrix){
    let obj = {};
    let flag = true;
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(obj[matrix[i][j]]){
                obj[matrix[i][j]]++;
            }
            else {
                obj[matrix[i][j]] = 1
            }
        }
    }

    for(let key in obj){
        if(obj[key] > 1){
           flag = false;
        }
    }

    return flag;
}