import type { DMCLogger, LoggerImplementation } from './types'

import defaultLogger from './defaultLogger'
import { detectBundler, noop } from './utils'

const defaultModes = {
    // Test
    test: 'none',

    // Development
    dev: 'info',
    development: 'info',

    // Production
    prod: 'error',
    production: 'error',

    // Fallback
    default: 'warn',
} as const

const registerLogger = (loggerImplementation: LoggerImplementation, verbosity: string) => {
    let Logger: DMCLogger

    if (typeof loggerImplementation === 'function')
        return loggerImplementation(verbosity)

    switch (verbosity) {
        case 'info':
            Logger = {
                ...defaultLogger,
                ...loggerImplementation,
                debug: noop,
            }
            break
        case 'warn':
            Logger = {
                ...defaultLogger,
                ...loggerImplementation,
                info: noop,
                debug: noop,
            }
            break
        case 'error':
            Logger = {
                ...defaultLogger,
                ...loggerImplementation,
                info: noop,
                warn: noop,
                debug: noop,
            }
            break
        case 'none':
            Logger = {
                debug: noop,
                info: noop,
                warn: noop,
                error: noop,
            }
            break
        default:
            Logger = {
                ...defaultLogger,
                ...loggerImplementation,
            }
    }

    return Logger
}

const Logger = registerLogger(
    defaultLogger,
    defaultModes[detectBundler()] || defaultModes.default,
)

export {
    Logger,
    registerLogger,
}
