// dayjs
const dayjs = require("dayjs");
//import dayjs from "dayjs"

// dayjs ⚠️ requires utc plugin
const utc = require("dayjs/plugin/utc");
//import utc from "dayjs/plugin/utc"

// dayjs ⚠️ requires LocalizedFormat plugin
const LocalizedFormat = require("dayjs/plugin/localizedFormat");
//import LocalizedFormat from "dayjs/plugin/localizedFormat"

// dayjs ⚠️ requires isSameOrBefore plugin
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
//import isSameOrBefore from "dayjs/plugin/isSameOrBefore"

// dayjs ⚠️ requires isSameOrAfter plugin
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
//import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

// dayjs ⚠️ requires relativeTime plugin
const relativeTime = require("dayjs/plugin/relativeTime");
//import relativeTime from "dayjs/plugin/relativeTime"

// dayjs ⚠️ requires customParseFormat plugin
const customParseFormat = require("dayjs/plugin/customParseFormat");
//import customParseFormat from "dayjs/plugin/customParseFormat"

// dayjs ⚠️ requires dayOfYear plugin
const dayOfYear = require("dayjs/plugin/dayOfYear");
//import dayOfYear from "dayjs/plugin/dayOfYear"

// dayjs ⚠️ requires weekOfYear plugin
const weekOfYear = require("dayjs/plugin/weekOfYear");
//import weekOfYear from "dayjs/plugin/weekOfYear"

// dayjs ⚠️ requires isoWeeksInYear plugin
const isoWeeksInYear = require("dayjs/plugin/isoWeeksInYear");
//import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear"

// dayjs ⚠️ requires minMax plugin
const minMax = require("dayjs/plugin/minMax");
//import minMax from "dayjs/plugin/minMax"

// dayjs ⚠️ requires advancedFormat plugin to support more format tokens
const advancedFormat = require("dayjs/plugin/customParseFormat");
//import advancedFormat from "dayjs/plugin/customParseFormat"

// dayjs ⚠️ requires isBetween plugin
const isBetween = require("dayjs/plugin/isBetween");
//import isBetween from "dayjs/plugin/isBetween"

// dayjs ⚠️ requires isLeapYear plugin
const isLeapYear = require("dayjs/plugin/isLeapYear");
//import isLeapYear from "dayjs/plugin/isLeapYear"

// dayjs ⚠️ requires weekDay plugin
const weekDay = require("dayjs/plugin/weekDay");
//import weekDay from "dayjs/plugin/weekDay"

// dayjs ⚠️ requires quarterOfYear plugin
const quarterOfYear = require("dayjs/plugin/quarterOfYear");
//import quarterOfYear from "dayjs/plugin/quarterOfYear"

// dayjs ⚠️ requires toArray plugin
const toArray = require("dayjs/plugin/toArray");
//import toArray from "dayjs/plugin/toArray"

// dayjs ⚠️ requires toObject plugin
const toObject = require("dayjs/plugin/toObject");
//import toObject from "dayjs/plugin/toObject"

// dayjs ⚠️ requires calendar plugin
const calendar = require("dayjs/plugin/calendar");
//import calendar from "dayjs/plugin/calendar"



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


// dayjs
dayjs(new Date()).isValid();