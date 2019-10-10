const Helper = codeceptjs.helper;

class WebDriver_commands extends Helper {

	scrollAndClick(element) {
		const I = this.helpers.WebDriver;
		this.scrollToElement(element);
		return I.click(element);
	}

	async _forEachAsync(array, callback) {
		const inputArray = Array.isArray(array) ? array : [array];
		const values = [];
		for (let index = 0; index < inputArray.length; index++) {
			let res = await callback(inputArray[index], index, inputArray);
			if (Array.isArray(res) && expandArrayResults) {
				res.forEach(val => values.push(val));
			} else if (res) {
				values.push(res);
			}
		}
		return values;
	}

	async seeVisible(locator) {
		const el = await this.helpers.WebDriver._locate(locator, false);
		let isDisplayed = await this._forEachAsync(el, async el => el.isDisplayed());
		return Array.isArray(isDisplayed) && (isDisplayed[0] === true);
	}

	scrollDownToPixel(elementId, pixel) {
		const I = this.helpers.WebDriver;
		I.wait(2);
		I.waitForElement('#' + elementId);
		I.wait(1);
		return I.executeScript('document.getElementById("' + elementId + '").scrollTop = ' + pixel);
	}

	scrollToElement(locator) {
		const I = this.helpers.WebDriver;
		return I.scrollTo(locator, 0, -100);
	}
}

module.exports = WebDriver_commands;
