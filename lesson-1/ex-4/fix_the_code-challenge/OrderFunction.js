// adapted from: https://gist.github.com/mpj/c53f72984830b86fd92f4778a594efbf

// This function intentionally has two bugs in it!
// TODO: fix them!
const orderTotal = (order) => {
    let totalNormalItems =
        order.items
        .filter(x => !x.shipping)
        .reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
    let shippingItem = order.items.find(x => x.shipping);
    let shipping = totalNormalItems < 1000 ? shippingItem.price : 0;
    return totalNormalItems + shipping
};

module.exports = {
    orderTotal: orderTotal
};

// Some documentation that you might want to read:
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce