import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import replace from "rollup-plugin-replace";

import packageJson from "./package.json";

export default {
    input: "src/index.ts",
    // external: [
    //     'react',
    //     'react-dom'
    // ],
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        },
        {
            file: packageJson.basic,
            format: "iife",
            name: 'TestComp',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM'
            }
        }
    ],
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        peerDepsExternal({ includeDependencies: true, }),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss()
    ]
}