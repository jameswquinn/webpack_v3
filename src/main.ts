import trim from "lodash-es/trim";
import toUpper from "lodash-es/toUpper";
import lowerCase from "lodash-es/lowerCase";
import jion from "lodash-es/join";
import reverse from "lodash-es/reverse";
import find from "lodash-es/find";
import reduce from "lodash-es/reduce";
import cloneDeep from "lodash-es/cloneDeep";
import sortedUniq from "lodash-es/sortedUniq";
import assign from "lodash-es/assign";
import times from "lodash-es/times";
import map from "lodash-es/map";
import keyBy from "lodash-es/keyBy";
import debounce from "lodash-es/debounce";
import filter from "lodash-es/filter";
import includes from "lodash-es/includes";

import "./style.scss";
/*
function validateEmail() {
  // Validate email here and show error message if not valid
}

var emailInput = document.getElementById("email-field");
emailInput.addEventListener("keyup", debounce(validateEmail, 500));
*/
let x = `Hello     `;
alert(x + `James`);
alert(trim(x) + `James`);
alert(toUpper(trim(x)));
alert(jion(["Another", "module", "loaded!"], lowerCase("James")));

import { render, html } from "lit-html";
// ES6
import { format, cancel, register } from 'timeago.js';

class MyComponent extends HTMLElement {
  text: unknown;
  comment: unknown;

  static get observedAttributes() {
    return ["text", "comment"];
  }
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    const template = html`
      <style>
        h1 {
          color: var(--wc-color, green);
        }
      </style>
      <h1>A long time ago ${format(1556658809847)}</h1>
      <h1>${this.text} Hello world! from inside web component</h1>
      <h1>
        ${this.comment} Hello world! from inside web component..Hay James
      </h1>
    `;
    render(template, this.shadowRoot);
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }
}
window.customElements.define("my-component", MyComponent);
