function compileAndriodCode () {
    throw new Error('you are using the wrong JDK');
};

test('compiling android goes as expected', () => {
    expect(() => compileAndriodCode()).toThrow();
    expect(() => compileAndriodCode()).toThrow(Error);

    //you can also use the exact error message or regxp
    expect(() => compileAndriodCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndriodCode()).toThrow(/JDK/);
});