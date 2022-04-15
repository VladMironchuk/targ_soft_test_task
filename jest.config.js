/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  // moduleNameMapper: {
  //   '^.+\\.(css|less|scss)$': 'babel-jest',
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     require.resolve('./test/file-mock.js'),
  // },
  transformIgnorePatterns: ['/node_modules/(?!my-package)(.*)'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
