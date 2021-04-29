import { LitElement, html, css } from 'lit-element';

import { icons } from './icons';

/**
 * # <lit-social-icon>
 * 
 * Web Component for create social icons, based on LitElement
 * 
 * The 'icon' property is used to set the social networks or another teamwork icons to deploy in your project
 */


export class LitSocialIcon extends LitElement {

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            icon:{ type: String}
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
        this.icon = 'user';
    }

    static get styles() {
        return css`
            :host[hidden] {
                display: none;
            }
            :host { 
                display: inline-block;
            }
            path {
                fill: var(--lit-social-icon-color, #888);
            }
            path[fill="none"] {
                fill: transparent;
            }
            svg {
                width: var(--lit-social-icon-size, 24px);
                height: var(--lit-social-icon-size, 24px);
            }
            div {
                display: flex;
            }
            
        `;
        }

        render() {
            return html`
            <div>
            ${this._getIcon(this.icon)}
            </div>
            `;
        }
    

        _getIcon(icon){
            return icons[icon]; 
    }
}
customElements.define('lit-social-icon', LitSocialIcon);