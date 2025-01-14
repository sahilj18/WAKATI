import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'
import logger from '@/middlewares/logger'

// Whenever creating a new route (used multiple times)
export function createRouter() {
    // Disabling Strict Mode
    return new OpenAPIHono({
        strict: false
    })
}

// For the base application (used once)
export default function createApp() {
    const app = createRouter()

    app.use(logger())

    app.notFound(notFound)
    app.onError(onError)

    return app;
}