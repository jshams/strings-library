const fb = require('../index.js')

// this is a test test to test that our tests are ready for testing
test('Sanity check', () => {

})

// test('mehr', () => {
//     let result;
//     result = 'mehr'.mehr()
//     expect(result).toBe('')
// })

test('isLetter', () => {
    let result;
    result = 'm'.isLetter()
    expect(result).toBe(true)
    result = 'W'.isLetter()
    expect(result).toBe(true)
    result = '!'.isLetter()
    expect(result).toBe(false)
    result = 'me'.isLetter()
    expect(result).toBe(false)
})

test('firstCharToUpper', () => {
    let result;
    result = 'hello'.firstCharToUpper()
    expect(result).toBe('Hello')
    result = 'abc'.firstCharToUpper()
    expect(result).toBe('Abc')
    result = 'Hello world'.firstCharToUpper()
    expect(result).toBe('Hello world')
})

test('allCaps', () => {
    let result;
    result = 'hello'.allCaps()
    expect(result).toBe('HELLO')
    result = 'ToDay'.allCaps()
    expect(result).toBe('TODAY')
    result = 'Hello World!'.allCaps()
    expect(result).toBe('HELLO WORLD!')
})

test('allfirstCharsToUpper', () => {
    let result;
    result = 'hi my name is jake'.allfirstCharsToUpper()
    expect(result).toBe('Hi My Name Is Jake')
    result = 'united states of america'.allfirstCharsToUpper()
    expect(result).toBe('United States Of America')
    result = 'hello world!'.allfirstCharsToUpper()
    expect(result).toBe('Hello World!')
})

test('upperEveryOtherLetter', () => {
    let result;
    result = 'hello'.upperEveryOtherLetter()
    expect(result).toBe('HeLlO')
    result = 'hi my name is jake'.upperEveryOtherLetter()
    expect(result).toBe('Hi My NaMe Is JaKe')
    result = 'this!is!!awesome'.upperEveryOtherLetter()
    expect(result).toBe('ThIs!Is!!AwEsOmE')
})
