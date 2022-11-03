import {RollupOptions} from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
        },
        // {
        //     dir: 'dist',
        //     format: 'amd',
        // },
        // {
        //     dir: 'dist',
        //     format: 'es',
        // },
        // {
        //     dir: 'dist',
        //     format: 'umd',
        //     name: 'mylibrarytut',
        // },
        // {
        //     dir: 'dist',
        //     format: 'iife',
        //     name: 'mylibrarytut',
        // },
    ],
    plugins: [typescript()],
} as RollupOptions;
