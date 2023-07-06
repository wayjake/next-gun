import { NextResponse } from 'next/server'

export type GameResponse = {
    success: boolean
}

export function GET(req: Request) {
    return NextResponse.json<GameResponse>({ success: true })
}

export function POST(req: Request) {
    const { body } = req
    return NextResponse.json<GameResponse>({ success: true })
}
