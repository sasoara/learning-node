// const that should be tested
const greeting = 'Grüezi';
// suite of tests
describe('say hello', () => {
    test('should be defined', () => {
        expect(greeting).toBeDefined();
    });
    test('should match Grüezi', () => {
        expect(greeting).toMatch('Grüezi');
    });
});