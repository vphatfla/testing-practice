import analyze from '../modules/arrayAnalyze';
test('[1,2,3] -> ', () => {
    expect(analyze([1,2,3])).toStrictEqual(
        {
            average: 2,
            min: 1,
            max: 3,
            length: 3
        }
    )
});

