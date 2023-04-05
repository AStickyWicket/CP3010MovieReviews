import {expect} from 'chai';
import request from 'request';

const url = 'http://localhost:8000/api/movies';
describe('API route test', () => {
  describe('test /api/movies', () => {
      it('should return 200', (done) => {
        request(url, (err, res, body) =>{
            expect(res.statusCode).to.equal(200);
            done();
        })
      })
  })
})