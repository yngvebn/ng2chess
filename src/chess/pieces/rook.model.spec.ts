import { Rook } from './rook.model';

describe('rook', () =>{
    it('should be possible to instansiate', () => {
        let piece = new Rook();
        expect(piece).toBeDefined();
    })
});