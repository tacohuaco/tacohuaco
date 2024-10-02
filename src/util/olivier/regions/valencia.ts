// Data from https://www.visitvalencia.com/en/what-to-do-valencia/gastronomy/seasonal-products

import { Month } from '../types';

const Jan = Month.January;
const Feb = Month.February;
const Mar = Month.March;
const Apr = Month.April;
const May = Month.May;
const Jun = Month.June;
const Jul = Month.July;
const Aug = Month.August;
const Sep = Month.September;
const Oct = Month.October;
const Nov = Month.November;
const Dec = Month.December;

// prettier-ignore
export const SEASONS: Record<string, Month[]> = {
	[`apple`]:        [                                        Sep                 ],
	[`apricot`]:      [                     May, Jun, Jul                          ],
	[`artichoke`]:    [           Mar, Apr, May                                    ],
	[`asparagus`]:    [           Mar, Apr, May                                    ],
	[`avocado`]:      [ Jan, Feb, Mar, Apr,                               Nov, Dec ],
	[`beetroot`]:     [                               Jul, Aug, Sep, Oct, Nov      ],
	[`bell pepper`]:  [                          Jun, Jul, Aug, Sep                ],
	[`blackberry`]:   [                                    Aug                     ],
	[`broccoli`]:     [                                             Oct, Nov, Dec  ],
	[`cabbage`]:      [ Jan, Feb, Mar,                               Oct, Nov      ],
	[`carrot`]:       [                Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec ],
	[`cauliflower`]:  [ Jan, Feb, Mar,                                    Nov, Dec ],
	[`celery`]:       [ Jan, Feb, Mar, Apr,                                    Dec ],
	[`cherry`]:       [                     May, Jun                               ],
	[`cucumber`]:     [                          Jun, Jul, Aug, Sep                ],
	[`eggplant`]:     [                               Jul, Aug, Sep                ],
	[`garrofó bean`]: [                               Jul                          ],
	[`grape`]:        [                                        Sep                 ],
	[`grapefruit`]:   [                                                        Dec ],
	[`kiwi`]:         [ Jan, Feb, Mar,                               Oct, Nov, Dec ],
	[`leek`]:         [      Feb,                               Sep, Oct, Nov, Dec ],
	[`lemon`]:        [ Jan, Feb, Mar,                                    Nov, Dec ],
	[`lime`]:         [                                                   Nov      ],
	[`mandarin`]:     [                                                   Nov      ],
	[`melon`]:        [                               Jul, Aug, Sep                ],
	[`nectarine`]:    [                               Jul, Aug                     ],
	[`orange`]:       [ Jan, Feb, Mar, Apr,                               Nov, Dec ],
	[`peach`]:        [                               Jul, Aug, Sep                ],
	[`pear`]:         [                               Jul, Aug, Sep                ],
	[`persimmon`]:    [                                                        Dec ],
	[`pomegranate`]:  [                                        Sep                 ],
	[`potato`]:       [                          Jun, Jul, Aug                     ],
	[`pumpkin`]:      [                                        Sep, Oct            ],
	[`radish`]:       [                                             Oct, Nov       ],
	[`raspberry`]:    [                          Jun, Jul, Aug                     ],
	[`spinach`]:      [ Jan, Feb, Mar, Apr,                     Sep, Oct, Nov      ],
	[`strawberry`]:   [                     May, Jun, Jul                          ],
	[`sweet potato`]: [                                             Oct, Nov       ],
	[`tomato`]:       [                          Jun, Jul, Aug, Sep                ],
	[`turnip`]:       [                                                  Nov, Dec  ],
	[`watermelon`]:   [                          Jun, Jul, Aug                     ],
	[`zucchini`]:     [                          Jun, Jul, Aug                     ],
};
