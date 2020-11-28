'use strict';
/**
 * @class Button extends HTMLElement native class to make a dom component
 * @method constructor expects the type and content props
 */
class Button extends HTMLElement{
    constructor(type = 'submit', content = 'submit') {
        super();
        this.type = type;
        this.content = content
    }
    connectedCallback() {
        this.innerHTML = `<button type='${this.type}'>${this.content}</button>`;
    }
}

customElements.define('signup-button', Button);