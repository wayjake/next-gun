import Pusher from 'pusher'
import { NextResponse } from 'next/server'

const key = process.env.NEXT_PUBLIC_SOKETI_DEFAULT_APP_KEY as string
const appId = process.env.SOKETI_DEFAULT_APP_ID as string
const secret = process.env.SOKETI_DEFAULT_APP_SECRET as string

if (!key || !appId || !secret) {
    console.error(`missing .env values for pusher config`)
}

let client = new Pusher({
    host: 'nice.4d2.io',
    port: '6001',
    key,
    appId,
    secret,
    useTLS: false,
})

export type HealthRes = {
    success: boolean
    payload: any
}

export async function GET(req: Request) {
    const payload = {
        payload: 'do wanna dance',
        date: new Date().toISOString(),
    }
    const res = await client.trigger('chat', 'message', payload)
    return NextResponse.json({
        success: true,
        payload,
    })
}
