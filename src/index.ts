import "./style.scss";
import {render, html} from "lit-html";
import trim from "lodash-es/trim";

const dayjs = require("dayjs");
// dayjs ⚠️ requires relativeTime plugin
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);


let x = `Hello     `;
alert(x + `James`);
alert(trim(x) + `James`);

class MyComponent extends HTMLElement {
    text: string;
    comment: string;
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
      <h1>A long time ago ${dayjs(1556292184820).fromNow()}</h1>
      <h1>${this.text} Hello world! from inside web component</h1>
      <h1>${this.comment} Hello world! from inside web component</h1>
    `;
    render(template, this.shadowRoot);
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }
}
window.customElements.define("my-component", MyComponent);
