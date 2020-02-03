const orderFunction = require('./OrderFunction');

// Don't try to fix these tests - fix the code that they are testing!
describe('Test the orderTotal of OrderFunction', () => {
    it ('calculcate the correct total of an order', () => {
        const someOrder = {
            items: [
                { name: 'Dragon food'        , price: 8,   quantity: 8 },
                { name: 'Dragon cage (small)', price: 800, quantity: 2 },
                { name: 'Shipping', price: 40, shipping: true }
            ]
        };
        expect(orderFunction.orderTotal(someOrder)).toBe(1664);
    });

    it ('adds shipping price of 40 for small orders', () => {
        const someOrder = {
            items: [
                { name: 'Dragon food'        , price: 8,   quantity: 8 },
                { name: 'Shipping', price: 40, shipping: true }
            ]
        };
        expect(orderFunction.orderTotal(someOrder)).toBe(104);
    });
});