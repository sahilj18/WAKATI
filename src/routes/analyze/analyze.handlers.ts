import { RouteHandler } from "@hono/zod-openapi"
import { Context } from "hono"
import { AnalyzeRoute } from "./analyze.routes"

export const analyze: RouteHandler<AnalyzeRoute> = (c: Context) => {
    return c.json({ message: 'hey' })
}