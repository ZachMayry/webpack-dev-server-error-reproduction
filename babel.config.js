const presets = [['@babel/env', { targets: 'last 10 Chrome versions' }], '@babel/react']

const env = {
  test: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  },
}

module.exports = { presets, plugins: [], env }
