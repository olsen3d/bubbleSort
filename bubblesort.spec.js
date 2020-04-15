//test specs
const { expect } = require('chai')
const sinon = require('sinon')
const {bubbleSort, swap} = require('./bubblesort')

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([])).to.eql( [] );
  });

  it('sorts an array', function(){
    expect( bubbleSort([1, 3, 2, 4])).to.eql( [1, 2, 3, 4] );
  });

  const swapCount = sinon.spy()

  it('swaps 10 times', function(){
    expect(swapCount.callCount).to.equal(10)
  });

});

    // const spy = sinon.spy()
    // map([1,2,3], spy)
    // expect(spy.callCount).to.equal(4)