import {RollupOptions} from "rollup";

export default {
    input: 'index.js',
    output: [{
        dir: 'dist/cjs',
        format: 'cjs'
    },{
        dir: 'dist/amd',
        format: 'amd'
    },{
        dir: 'dist/es',
        format: 'es'
    },{
        dir: 'dist/umd',
        format: 'umd',
        name: 'mylibrarytut'
    }]
} as RollupOptions
