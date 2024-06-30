module.exports = {
    process(src, filename, _config, _options) {
        if (filename.endsWith('.mp3')) {
            return { code: 'module.exports = "test-file-stub";' };
        }
        return { code: `module.exports = ${JSON.stringify(src)};` };
    },
};
