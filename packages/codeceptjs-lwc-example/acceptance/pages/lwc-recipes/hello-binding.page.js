const { I } = inject();
const LightingComponent = require('./lighting-component.page');

class HelloBinding extends LightingComponent {

  constructor() {
    
    super();

    // common elements for shadow locators
    const parent =  [...this.host, 'recipe-hello-binding'];

    // locators uses "shadowDom", and elements are sequentially defined
    this.locators = {
      
      // input field on helloBinding component
      inputField: {
        shadowDom: {
          elements: [...parent,'ui-input', 'input.input' ]
        }
      },
      
      // card title on helloBinding component
      cardTitle: {
        shadowDom: {
          elements: [...parent, 'div p']
        }
      }
    }
  }

  enterName(name) {
    return I.fillField(this.locators.inputField, name);
  }

  async grabTitle() {
    return await I.grabTextFrom(this.locators.cardTitle);
  }
}

module.exports = new HelloBinding();