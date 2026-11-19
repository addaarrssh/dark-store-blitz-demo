(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Rounds = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var LAYOUT_MINUTES = 30;
  var SOLD = { 1: 120, 2: 110, 3: 95, 4: 85, 5: 80, 6: 75, 7: 60, 8: 55, 9: 45, 10: 40, 11: 38, 12: 35, 13: 25, 14: 20, 15: 18, 16: 15, 17: 12, 18: 10, 19: 8, 20: 5, 21: 4, 22: 3, 23: 2, 24: 2 };

  var ROUNDS = [
    { id: 'o1', stage: 2, label: 'Order 1', title: 'Breakfast Rush', items: [1, 3, 6], secs: 150 },
    { id: 'o2', stage: 2, label: 'Order 2', title: 'Midnight Munchies', items: [2, 4, 8, 11], secs: 150 },
    { id: 'o3', stage: 2, label: 'Order 3', title: 'Monthly Grocery', items: [9, 7, 14, 5], secs: 135 },
    { id: 'o4', stage: 2, label: 'Order 4', title: 'Cleaning Day', items: [13, 16, 10, 14], secs: 135 },
    { id: 'o5', stage: 2, label: 'Order 5', title: 'Cold Chain', items: [15, 17, 24, 1], secs: 120 },
    { id: 'o6', stage: 2, label: 'Order 6', title: 'Office Snack', items: [12, 18, 23, 19], secs: 120 },
    { id: 'o7', stage: 2, label: 'Order 7', title: 'Emergency', items: [21, 22, 10, 1], secs: 105 },
    { id: 'o8', stage: 2, label: 'Order 8', title: 'Party Rush', items: [4, 8, 1, 12, 15], secs: 105 },
    { id: 'o9', stage: 2, label: 'Order 9', title: 'Heavy & Fragile', items: [9, 20, 6, 3, 7], secs: 90 },
    { id: 'o10', stage: 2, label: 'Order 10', title: 'Gourmet', items: [20, 24, 2, 18, 23], secs: 90 },

    { id: 'c1a', stage: 3, label: 'Oil spill 1', title: 'Monthly Grocery, again', items: [9, 7, 14, 5], oneWay: true, secs: 150,
      crisis: 'Oil spill! Aisle 6 is one-way: enter at B6, walk down to I6. Nobody walks back up it.' },
    { id: 'c1b', stage: 3, label: 'Oil spill 2', title: 'Office Snack, again', items: [12, 18, 23, 19], oneWay: true, secs: 150,
      crisis: 'Oil spill! Aisle 6 is one-way: enter at B6, walk down to I6. Nobody walks back up it.' },
    { id: 'c2a', stage: 3, label: 'Pallet crash 1', title: 'Breakfast Rush, again', items: [1, 3, 6, 2], blocked: ['B4', 'B5'], secs: 150,
      crisis: 'A pallet fell over! Squares B4 and B5 are blocked. Walk around.' },
    { id: 'c2b', stage: 3, label: 'Pallet crash 2', title: 'Party Rush, again', items: [4, 8, 1, 12, 15], blocked: ['B4', 'B5', 'B7', 'B8'], secs: 150,
      crisis: 'More pallets down! B4, B5, B7 and B8 are all blocked.' },
    { id: 'c3', stage: 3, label: 'Double drop', title: 'Two orders at once', double: true, a: [1, 9, 7, 12], b: [2, 4, 8, 6], secs: 240,
      crisis: 'Two orders dropped together. Two separate trips, or one trip with a heavy cart (meters x 1.25)?' },
    { id: 'fin', stage: 3, label: 'Final boss', title: 'Festival Rush', items: [1, 2, 6, 9, 15, 13], oneWay: true, blocked: ['B4', 'B5'], mult: 2, secs: 240,
      crisis: 'Everything at once: oil spill in aisle 6 AND pallets on B4 and B5. This order is worth DOUBLE points.' }
  ];

  return { LAYOUT_MINUTES: LAYOUT_MINUTES, SOLD: SOLD, ROUNDS: ROUNDS };
});
