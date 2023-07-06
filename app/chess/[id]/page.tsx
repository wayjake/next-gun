import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
// import { useEffect, useState } from 'react'
import { NextRequest } from 'next/server'

interface Props extends NextRequest {
    params: { id: string }
}

async function getData() {
    const res = await fetch('http://localhost:3000/api/game')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home(request: Props) {
    const data = await getData()
    return (
        <>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </>
    )
    // const [game, setGame] = useState(new Chess())
    // const [moves, setMoves] = useState<string>()
    // const [isGameOver, setIsGameOver] = useState(false)
    // const [currentTurn, setCurrentTurn] = useState('White')
    /*
    useEffect(() => {
        const getHealthStatus = async () => {
            const response = await fetch('/api/health')
            if (!response.ok) {
                console.error('Failed to fetch health status')
                return
            }
            const data: HealthRes = await response.json()
            setStatus(data)
        }
        getHealthStatus()
    }, [])
    */
    /** 
    function gameOver() {
        const possibleMoves = game.moves()
        if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) {
            return true
        }
    }

    function makeAMove(
        move: { from: any; to: any; promotion: string } | string
    ) {
        try {
            game.move(move)
            setMoves(game.fen())
            if (gameOver()) {
                setIsGameOver(true)
            }
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }

    function makeRandomMove() {
        const possibleMoves = game.moves()
        const randomIndex = Math.floor(Math.random() * possibleMoves.length)
        makeAMove(possibleMoves[randomIndex])
    }

    function onDrop(sourceSquare: any, targetSquare: any) {
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q', // always promote to a queen for example simplicity
        })

        // illegal move
        if (!move) return false
        setCurrentTurn(game.turn() == 'w' ? 'White' : 'Black')
        // setTimeout(makeRandomMove, 200)
        return true
    }
    return (
        <div className="md:container md:mx-auto flex justify-center items-center">
            <div className="max-w-xl pt-10 w-full">
                {!isGameOver && `Current Turn: ${currentTurn}`}
                {isGameOver && 'Game over!'}
                <div className="pt-10">
                    <Chessboard position={moves} onPieceDrop={onDrop} />
                </div>
            </div>
        </div>
    )
    */
}
