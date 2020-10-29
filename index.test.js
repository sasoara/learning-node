const { greeting, sayingGoodbye } = require('./index');

// suite of tests
describe('say hello', () => {
    test('should be defined', () => {
        expect(greeting).toBeDefined();
    });
    test('should match Grüezi', () => {
        expect(greeting).toMatch('Grüezi');
    });
});

describe('say bye', () => {
    test('should be defined', () => {
        expect(sayingGoodbye).toBeDefined();
    });
    test('should match Tschüssli', () => {
        expect(sayingGoodbye).toMatch('Tschüssli');
    });
});
