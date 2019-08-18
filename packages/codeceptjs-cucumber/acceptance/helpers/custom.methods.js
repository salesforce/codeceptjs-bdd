module.exports = function () {
    function takeNap(seconds) {
        return seconds ? this.wait(seconds) : this.wait(1);
    }

    function grabCss(css) {
        return {css: css};
    }

    return actor({
        takeNap: takeNap,
        grabCss: grabCss
    });
};
