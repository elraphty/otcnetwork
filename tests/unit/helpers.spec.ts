import {expect} from 'chai';
import {randomNumber} from '../../src/helpers';

describe('Test helpers', function () {
  it('randomNumber function generates a 4 digit number', function (done) {
    const result = randomNumber();

    expect(result).to.be.a('number');
    expect(result.toString().length).to.equal(4);
    
    done();
  });
});