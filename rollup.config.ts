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
        //     dir: 'dist/amd',
        //     format: 'amd',
        // },
        // {
        //     dir: 'dist/es',
        //     format: 'es',
        // },
        // {
        //     dir: 'dist',
        //     format: 'umd',
        //     name: 'mylibrarytut',
        // },
        // {
        //     dir: 'dist/iife',
        //     format: 'iife',
        // },
    ],
    plugins: [typescript()],
} as RollupOptions;
