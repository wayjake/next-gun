'use client'

import Pusher from 'pusher-js'
import { useEffect, useState } from 'react'

// let client: Pusher = new Pusher(
//     process.env.NEXT_PUBLIC_SOKETI_DEFAULT_APP_KEY as string,
//     {
//         wsHost: 'nice.4d2.io',
//         wsPort: 6001,
//         forceTLS: false,
//         enabledTransports: ['ws', 'wss'],
//         disableStats: true,
//         cluster: '',
//     }
// )

const Updates = ({ data }: any) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        console.log(data)
        // client.subscribe('chat').bind('message', (message: never) => {
        //     console.log(message)
        //     setMessages((messages) => [...messages, message])
        // })
    }, [])

    return (
        <>
            <h2>Messages:</h2>
            {messages.map((msg, index) => (
                <pre key={index}>{JSON.stringify(msg)}</pre>
            ))}
        </>
    )
}

export default Updates
