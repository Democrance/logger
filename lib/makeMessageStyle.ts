import { LogLevelStyle, LogName } from './types'
import { mountLog } from './utils'

export function makeMessageStyle(logEnum: LogName) {
    switch (logEnum) {
        case LogName.Error:
            return mountLog(
                '[DMC][error]',
                LogLevelStyle.Error,
            )
        case LogName.Info:
            return mountLog(
                '[DMC][info]',
                LogLevelStyle.Info,
            )
        case LogName.Warn:
            return mountLog(
                '[DMC][warn]',
                LogLevelStyle.Warn,
            )
        case LogName.Debug:
            return mountLog(
                '[DMC][debug]',
                LogLevelStyle.Log,
            )
        case LogName.None:
        default:
            return mountLog(
                '[DMC]',
                LogLevelStyle.Log,
            )
    }
}
