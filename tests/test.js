const fb = require('../index.js')

// this is a test test to test that our tests are ready for testing
test('Sanity check', () => {

})

test('firstCharToUpper', () => {
    let result;
    result = "hello".firstCharToUpper()
    expect(result).toBe("Hello")
    result = 'abc'.firstCharToUpper()
    expect(result).toBe('Abc')
    result = 'Hello world'.firstCharToUpper()
    expect(result).toBe('Hello world')
})

