import { RouteHandler } from "@hono/zod-openapi"
import { Context } from "hono"
import { AnalyzeRoute } from "./analyze.routes"
import { evaluate } from "@/lib/evaluate"

export const analyze: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()

    const result = evaluate(body.text)

    return c.json(result)
}