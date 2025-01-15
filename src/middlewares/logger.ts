import {pinoLogger} from 'hono-pino';

export default function logger(){
    return pinoLogger({
        http: {
          reqId: () => crypto.randomUUID()
        }
      })
}
