const path = require('path');

const nodeModulesDirPath = path.resolve(__dirname, './node_modules/');
const srcDirPath = path.resolve(__dirname, './src/');
const configDirPath = path.resolve(__dirname, './configs/');

const moduleDirNames = [
  'mocks',
  'hocs',
  'pages',
  'containers',
  'components',
  'reducers',
  'actions',
  'selectors',
  'services'
];

const createModuleNameMapperObject = moduleDirNames =>
  moduleDirNames.reduce((acc, dirName) => {
    const dirNameKey = `^${dirName}(.*)$`;
    const dirNamePathValue = `${srcDirPath}/${dirName}/$1`;
    return Object.assign(acc, { [dirNameKey]: dirNamePathValue });
  }, {});

module.exports = {
  verbose: true,
  roots: [srcDirPath],
  collectCoverageFrom: ['./src/**/*.{js,jsx}', '!**/index.js'],
  setupFiles: [`${configDirPath}/enzyme-setup.js`],
  transform: {
    '^.+\\.(js|jsx)$': `${nodeModulesDirPath}/babel-jest`,
    '^.+\\.css$': `${configDirPath}/cssTransform.js`,
    '^(?!.*\\.(js|jsx|css|json)$)': `${configDirPath}/fileTransform.js`
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleNameMapper: createModuleNameMapperObject(moduleDirNames),
  snapshotSerializers: ['enzyme-to-json/serializer'],
  reporters: [
    'default',
    'jest-junit',
    [
      '@reportportal/reportportal-agent-jest',
      {
        endpoint: 'https://rp.epam.com/api/v1',
        project: 'dzmitry_astraukh_personal',
        launch: 'react_redux_video_app',
        tags: ['tag1', 'tag2']
      }
    ]
  ]
};
