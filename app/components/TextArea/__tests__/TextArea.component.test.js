import TextArea from '../TextArea.component';

/*
  Start of a utility file
*/

function getAverage (a, b) {
  return (a + b) / 2;
}
/*
  End of a utility file
*/

describe('TestArea component', () => {
  it('renders correctly', () => {
    expect(1).toEqual(2) // To be replaced with the snapshot test
  });
  it('getSum: should return sum of two passed numbers', () => {
    expect(getAverage(1, 2)).toEqual(1.5);
  })
});
