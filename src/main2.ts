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
// dayjs
const dayjs = require("dayjs");

// dayjs ⚠️ requires utc plugin
const utc = require("dayjs/plugin/utc");

// dayjs ⚠️ requires LocalizedFormat plugin
const LocalizedFormat = require("dayjs/plugin/localizedFormat");

// dayjs ⚠️ requires isSameOrBefore plugin
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");

// dayjs ⚠️ requires isSameOrAfter plugin
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");

// dayjs ⚠️ requires relativeTime plugin
const relativeTime = require("dayjs/plugin/relativeTime");

// dayjs ⚠️ requires customParseFormat plugin
const customParseFormat = require("dayjs/plugin/customParseFormat");

// dayjs ⚠️ requires dayOfYear plugin
const dayOfYear = require("dayjs/plugin/dayOfYear");

// dayjs ⚠️ requires weekOfYear plugin
const weekOfYear = require("dayjs/plugin/weekOfYear");

// dayjs ⚠️ requires isoWeeksInYear plugin
const isoWeeksInYear = require("dayjs/plugin/isoWeeksInYear");

// dayjs ⚠️ requires minMax plugin
const minMax = require("dayjs/plugin/minMax");

// dayjs ⚠️ requires advancedFormat plugin to support more format tokens
const advancedFormat = require("dayjs/plugin/customParseFormat");

// dayjs ⚠️ requires isBetween plugin
const isBetween = require("dayjs/plugin/isBetween");

// dayjs ⚠️ requires isLeapYear plugin
const isLeapYear = require("dayjs/plugin/isLeapYear");

// dayjs ⚠️ requires weekDay plugin
const weekDay = require("dayjs/plugin/weekDay");

// dayjs ⚠️ requires quarterOfYear plugin
const quarterOfYear = require("dayjs/plugin/quarterOfYear");

// dayjs ⚠️ requires toArray plugin
const toArray = require("dayjs/plugin/toArray");

// dayjs ⚠️ requires toObject plugin
const toObject = require("dayjs/plugin/toObject");

// dayjs ⚠️ requires calendar plugin
const calendar = require("dayjs/plugin/calendar");
*/

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs('2018-08-08') // parse
/*

/*
// dayjs
dayjs.extend(relativeTime);
dayjs("2007-01-27").to(dayjs("2007-01-29"));
// => "in 2 days"


// dayjs
dayjs("12-25-1995");
// => "1995-12-24T13:00:00.000Z"


// dayjs
dayjs.extend(customParseFormat);
dayjs("2010-10-20 4:30", "YYYY-MM-DD HH:mm");
// => "2010-10-19T17:30:00.000Z"


// dayjs
dayjs.extend(customParseFormat);
dayjs("2012 mars", "YYYY MMM", "fr");
// => "2012-02-29T13:00:00.000Z"


// dayjs
dayjs().second();
// => 49
dayjs().hour();
// => 19


// dayjs
dayjs().set("second", 30);
// => "2018-09-09T09:12:30.695Z"
dayjs().set("hour", 13);
// => "2018-09-09T03:12:49.695Z"


// dayjs
dayjs().date();
// => 9
dayjs().set("date", 4);
// => "2018-09-04T09:12:49.695Z"


// dayjs
dayjs().day();
// => 0 (Sunday)
dayjs().set("day", -14);
// => "2018-08-26T09:12:49.695Z"


// dayjs
dayjs.extend(dayOfYear);
dayjs().dayOfYear();
// => 252
dayjs().dayOfYear(256);
// => "2018-09-13T09:12:49.695Z"


// dayjs
dayjs.extend(weekOfYear);
dayjs().week();
// => 37
dayjs().week(24);
// => "2018-06-10T09:12:49.695Z"


// dayjs
dayjs("2012-02").daysInMonth();
// => 29


// dayjs
dayjs.extend(isoWeeksInYear);
dayjs().isoWeeksInYear();
// => 52


// dayjs
dayjs().add(7, "day");
// => "2018-09-16T09:12:49.695Z"


// dayjs
dayjs().subtract(7, "day");
// => "2018-09-02T09:12:49.695Z"


// dayjs
dayjs().startOf("month");
// => "2018-08-31T14:00:00.000Z


// dayjs
dayjs().endOf("day");
// => "2018-09-09T13:59:59.999Z"


// dayjs
dayjs().format("dddd, MMMM D YYYY, h:mm:ss A");
// => "Sunday, September 9 2018, 7:12:49 PM"
dayjs().format("ddd, hA");
// => "Sun, 7PM"


// dayjs
dayjs.extend(advancedFormat);
dayjs().format("dddd, MMMM Do YYYY, h:mm:ss A");
// => "Sunday, September 9th 2018, 7:12:49 PM"


// dayjs
dayjs.extend(relativeTime);
dayjs("2007-01-27").to(dayjs("2007-01-29"));
// => "in 2 days"


// dayjs
dayjs("2007-01-27").diff(dayjs("2007-01-29"), "milliseconds");
// => -172800000
dayjs("2007-01-27").diff(dayjs("2007-01-29"), "days");
// => -2


// dayjs
dayjs("2010-10-20").isBefore("2010-10-21");
// => true


// dayjs
dayjs("2010-10-20").isSame("2010-10-21");
// => false
dayjs("2010-10-20").isSame("2010-10-20");
// => true
dayjs("2010-10-20").isSame("2010-10-21", "month");
// => true


// dayjs
dayjs("2010-10-20").isAfter("2010-10-19");
// => true


// dayjs
dayjs.extend(isBetween);
dayjs("2010-10-20").isBetween("2010-10-19", "2010-10-25");
// => true


// dayjs
dayjs.extend(isLeapYear);
dayjs("2000-01-01").isLeapYear();
// => true
*/

// dayjs
dayjs(new Date()).isValid();


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
import { format, cancel, register } from "timeago.js";

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
      <h1>A long time ago ${format(1556660352739)}</h1>
      <h3>I am not a number</h3>
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
