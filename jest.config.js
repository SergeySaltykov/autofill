module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/enzyme.setup.js'],
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    transform: {
        '\\.(css|less)$': '<rootDir>/__mocks__/jest.stylemock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/jest.filemock.js',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/.*\\.js$'],
    verbose: true,
};
