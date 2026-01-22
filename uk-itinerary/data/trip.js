import { SHEETS } from "./sheets.js";

import { london1 } from "./blocks/london1.js";
import { york } from "./blocks/york.js";
import { edinburgh } from "./blocks/edinburgh.js";
import { london2 } from "./blocks/london2.js";

export const TRIP_DATA = {
  sheets: SHEETS,
  blocks: [london1, york, edinburgh, london2],
};
