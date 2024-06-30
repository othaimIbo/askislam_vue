module.exports = {
    testEnvironment:'jsdom',
    testEnvironmentOptions:{
      customExportConditions:["node", "node-addons"]
    },
    testMatch: [
        "**/tests/**/*.spec.js",
        "**/__tests__/**/*.js"
    ],
    verbose: true,
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "/img/(.*)$": "<rootDir>/public/img/$1",
        "/images/(.*)$": "<rootDir>/public/images/$1",
        "/avatars/(.*)$": "<rootDir>/public/avatars/$1",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["js", "vue"],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\.(jpg|jpeg|png|gif|svg|mp3|mp4|mpeg)$": "<rootDir>/jest-media-transformer.cjs"
    },
    transformIgnorePatterns: [
        "node_modules/(?!(@vue/test-utils|vue|vue-router|@babel/preset-env)/)"
    ],
};