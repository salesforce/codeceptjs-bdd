module.exports = function () {
    if (process.env.profile && process.env.profile.match('sauce:appium:[a-zA-Z]')) {
        process.env.DRIVER = 'Appium';
    }
};
