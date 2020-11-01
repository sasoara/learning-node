const { port, host } = require('../server');

// suite of tests
describe('server property host', () => {
    test('should be defined', () => {
        expect(host).toBeDefined();
    });
    test('should be localhost', () => {
        expect(host).toEqual('localhost');
    });
});

// suite of tests
describe('server property port', () => {
    test('should be defined', () => {
        expect(port).toBeDefined();
    });
    test('should be 8000', () => {
        expect(port).toEqual(8000);
    });
});