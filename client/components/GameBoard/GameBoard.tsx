import { useEffect, useMemo, useState } from "react"
import GridManager from "./GridManager"
import type { Board } from "./GameBoard.types"

export type Grid = Board["grid"]
export type Row = Board["row"]
export type Column = Board["column"]

function generateBoardData(): Grid {
  const gameBoard: Grid = []
  const generateTiles: number = 7

  for (let i = 0; i <= generateTiles; i++) {
    const gridRow: Row = []
    let countColumn: Column = generateTiles + 1

    while (countColumn > 0) {
      gridRow.push(0)
      countColumn--
    }
    gameBoard.push(gridRow)
  }
  return gameBoard
}

export default function GameBoard() {
  const initialBoard = useMemo(() => generateBoardData(), [])
  const [sendWave, setSendWave] = useState<boolean>(false)

  return (
    <>
      <div className="game-board">
        <GridManager 
        grid={initialBoard}
        sendWave={sendWave}
        />
      </div>
    </>
  )
}
