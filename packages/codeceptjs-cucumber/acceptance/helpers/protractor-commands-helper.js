const Helper = codeceptjs.helper;
class Protractor_commands extends Helper {
  clickTheClickable(element) {
    let I = this.helpers['Protractor'];
    I.waitForClickable(element);
    return I.click(element);
  }
  seeElementIsPresent(locator) {
    let I = this.helpers['Protractor'];
    try {
      I.seeElement(locator);
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = Protractor_commands;
