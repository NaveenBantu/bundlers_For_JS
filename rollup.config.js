// import fs from 'fs';
// import atImport from 'postcss-import';
// import autoprefixer from 'autoprefixer'
// import postcss from 'postcss';
// import sass from 'rollup-plugin-sass';
// import cssbundle from 'rollup-plugin-css-bundle';

import babel from '@rollup/plugin-babel';
// import url from '@rollup/plugin-url';
// import postcss from 'rollup-plugin-postcss';
// import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser';
import commonjs from "@rollup/plugin-commonjs";


export default {
    external: ['resize-observer', '@babel/runtime', 'core-js'],

    input: './src/js/onViewGraphNG.js',                 // input source file
    output: {
        file: './dist/onview.min.js',
        format: 'iife',                                 //global which can be used in a browser
        name: 'OnView',
        globals: {
            'resize-observer': 'ResizeObserver',
        },
    },
    plugins: [
        babel({ exclude: ['node-modules/**', 'node_modules/@babel/runtime/**', 'node_modules/core-js/**'], babelHelpers: 'runtime' }),
        // postcss({
        //     plugins: [
        //         url({
        //             url: "inline",
        //             maxSize: 10,
        //             fallback: "copy",
        //         }),
        //     ],
        // }),
        // image(),
        resolve({ browser: true }),
        commonjs(),
        terser()
    ]
}
