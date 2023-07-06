'use client'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import './chess.css'
import { useEffect, useState } from 'react'
import { randomUUID } from 'crypto'
import { useRouter } from 'next/navigation'
import makeid from './makeId'

export default function Home() {
    const [game, setGame] = useState(new Chess())
    const [moves, setMoves] = useState<string>()
    const [isGameOver, setIsGameOver] = useState(false)
    const [currentTurn, setCurrentTurn] = useState('White')
    const router = useRouter()

    useEffect(() => {
        console.log(game.fen())
    }, [moves])

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
        setTimeout(makeRandomMove, 200)
        return true
    }

    function generateGame() {
        const userInput = prompt('Please enter a unique room code', makeid())
        if (userInput) {
            router.push(`/chess/${userInput}`)
        }
    }

    return (
        <div className="pl-5 pr-5 container mx-auto flex justify-center items-center">
            <div className="max-w-2xl pt-10 w-full">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    This is a demo game
                </h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    It only makes random moves (it's honestly somewhat fun to
                    play). To get started with a new multiplayers game, click
                    below.
                </p>
                <button
                    onClick={generateGame}
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    Start New
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
                <div className="pt-10">
                    <Chessboard position={moves} onPieceDrop={onDrop} />
                    <div>
                        {!isGameOver && `Current Turn: ${currentTurn}`}
                        {isGameOver && 'Game over!'}
                    </div>
                </div>
            </div>
        </div>
    )
}
