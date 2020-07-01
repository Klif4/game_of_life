import {GameOfLife} from "../src/GameOfLife";

describe('rename me', () => {
    it('unique cell should be dead when all cells are dead', () => {
        const gameOfLife = GameOfLife.of(5, 5, [])
        gameOfLife.nextStep()
        expect(gameOfLife.cell(2, 2)).toBe(false)
    })
    it('all cells should stay dead when all cells are dead', () => {
        const columns = 5
        const rows = 5
        const gameOfLife = GameOfLife.of(columns, rows, [])
        gameOfLife.nextStep()
        for(let i=0; i<columns; i++){
            for (let j = 0; j<rows; j++) {
                expect(gameOfLife.cell(i,j)).toBe(false)
            }
        }
    })
    it('in 3x3 gameOfLife, the middle cell must die when it have no alive neighbor cell', () => {
        const gameOfLife = GameOfLife.of(3, 3, [{x:1, y:1}])
        gameOfLife.nextStep()
        expect(gameOfLife.cell(1, 1)).toBe(false)
    })
})