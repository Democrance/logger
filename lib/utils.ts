import type { LogMessage } from './types'

export const noop = () => {}

export const detectBundler = () => {
    try {
        return import.meta.env?.MODE
    }
    catch {
        return process.env?.NODE_ENV
    }
}

export const getMessage = (message: LogMessage): string | undefined => {
    if (Array.isArray(message))
        return message.join(' | ')
    if (message instanceof Error)
        return message.message
    if (typeof message === 'object')
        return JSON.stringify(message, null, 1)

    return message as string ?? ''
}

export const detectNode: boolean = Object.prototype
    .toString
    .call(typeof process !== 'undefined' ? process : 0) === '[object process]' || detectBundler() === 'production'

export const mountLog = (name: string, style: string) => {
    if (detectNode)
        return [ `${name}: ` ]

    return [
        `%c${name}%c:`,
        style,
        'background: transparent;',
    ]
}
