export type LogMessage = string[] | Error | Record<string, any> | string | boolean

export const noop = () => {}

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
    .call(typeof process !== 'undefined' ? process : 0) === '[object process]' || process.env.APPLICATION_ENV === 'production'

export const mountLog = (name: string, style: string) => {
    if (detectNode)
        return [ `${name}: ` ]

    return [
        `%c${name}%c:`,
        style,
        'background: transparent;',
    ]
}
