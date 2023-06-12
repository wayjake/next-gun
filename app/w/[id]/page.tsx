import { useSearchParams } from 'next/navigation'

async function getData() {
    const res = await fetch('http://localhost:3000/health')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const searchParams = useSearchParams()
    return <>Repo Stars: {JSON.stringify({ params: searchParams })}</>
}
