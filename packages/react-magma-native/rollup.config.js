import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/bundle.js',
                format: 'cjs'
            },
            {
                file: 'dist/esBundle.js',
                format: 'esm'
            }
        ],
        external: ['react', 'react-native'],
        plugins: [
            resolve(),
            typescript(),
            babel({
                exclude: 'node_modules/**'
            })
        ]
    }
]
