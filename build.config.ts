import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    name: 'logger',
    entries: [
        './lib/index',
    ],
    declaration: true,
    rollup: {
        emitCJS: true,
    },
})
