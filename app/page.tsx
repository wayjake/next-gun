'use client'
import { useEffect, useState } from 'react'
import Wrapper from './home/wrapper'
import { HealthRes } from '../pages/api/health'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {
    faBookBookmark,
    faPaperPlane,
    faComment,
    faHeart,
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const [status, setStatus] = useState<null | HealthRes>(null)

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

    return (
        <Wrapper>
            <div className="flex justify-between items-center p-3">
                <div className="flex flex-row items-center">
                    <img
                        src="https://i.ibb.co/zR64k61/napoleon.png"
                        className="rounded-full"
                        width="40"
                        alt="Profile"
                    />
                    <div className="flex flex-row items-center ml-2">
                        <span className="font-bold text-black mr-1">
                            Mosaic War
                        </span>
                        <small className="h-1 w-1 bg-gray-400 rounded-full mr-2 ml-1 mt-1"></small>
                        <a
                            href="#"
                            className="text-blue-600 text-sm hover:text-blue-800"
                        >
                            Follow
                        </a>
                    </div>
                </div>
                <div className="pr-2">
                    <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                </div>
            </div>
            <div>
                <Link href="/w/fds-fds">
                    <img
                        src="https://www.aljazeera.com/wp-content/uploads/2020/02/606f600d6bfc435fbf3af253eef459e7_18.jpeg?resize=770%2C513&quality=80"
                        className="w-full h-75"
                        alt="Content"
                    />
                </Link>
            </div>
            <div className="p-4 flex justify-between items-center">
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                        className=" mr-2 hover:text-gray-600"
                        icon={faHeart}
                    />
                    <FontAwesomeIcon
                        className=" mr-2 hover:text-gray-600"
                        icon={faComment}
                    />
                    <FontAwesomeIcon
                        className=" mr-2 hover:text-gray-600"
                        icon={faPaperPlane}
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        className=" mr-2 hover:text-gray-600"
                        icon={faBookBookmark}
                    />
                </div>
            </div>
        </Wrapper>
    )
}
