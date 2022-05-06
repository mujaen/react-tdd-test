module.exports = {
  collectCoverage: true,
  verbose: true,
  preset: 'ts-jest/presets/js-with-babel',
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
}