import { NextResponse } from 'next/server'

export type HealthRes = {
    success: boolean
}

export function GET(req: Request) {
    return NextResponse.json<HealthRes>({ success: true })
}
