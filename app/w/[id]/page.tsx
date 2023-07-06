import { NextRequest } from 'next/server'

async function getData() {
    const res = await fetch('http://localhost:3000/api/node')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

interface Props extends NextRequest {
    params: { id: string }
}

export default async function Page(request: Props) {
    const data = await getData()
    return (
        <>
            {/* Page's Path: {JSON.stringify(request.params)} */}
            <pre>{JSON.stringify(data, undefined, 4)}</pre>
        </>
    )
}
