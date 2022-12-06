import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    name: 'logger',
    entries: [
        './lib/',
    ],
    declaration: true,
    rollup: {
        emitCJS: true,
    },
})
