import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    env: { mocha: true },
  }),
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
)
