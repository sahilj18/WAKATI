import { createRoute, z } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'

export const analyse = createRoute({
    method: "post",
    path: '/analyze',
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.object({
                        text: z.string()
                    })
                }
            }
        }
    },
    responses: {
        [HttpStatusCodes.OK]:{
            content: {
                'application/json': {
                    schema: z.object({}),
                },
            },
            description: 'Hello from Wakati! 👋',
        },
    },
})

export type AnalyzeRoute = typeof analyse