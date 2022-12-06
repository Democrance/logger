import type { LogName } from './types'

import { makeMessageStyle } from './makeMessageStyle'

export function makeMethod(logEnum: LogName, fn: Function) {
    return () => {
        return Function.prototype.bind.apply(fn, [
            console,
            ...makeMessageStyle(logEnum),
        ])
    }
}
