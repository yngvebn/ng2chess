import { Queen } from './queen.model';

describe('queen', () =>{
    it('should be possible to instansiate', () => {
        let piece = new Queen();
        expect(piece).toBeDefined();
    })
});