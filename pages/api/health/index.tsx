import type { NextApiRequest, NextApiResponse } from 'next'

export type HealthRes = {
    success: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<HealthRes>
) {
    res.status(200).json({ success: true })
}
