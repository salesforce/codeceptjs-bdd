module.exports = function () {
    function takeNap(seconds) {
        return seconds ? this.wait(seconds) : this.wait(1);
    }

    function grabCss(css) {
        return {css};
    }

    return actor({
        takeNap,
        grabCss
    });
};
