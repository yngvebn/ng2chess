import { Pawn } from './pawn.model';

describe('pawn', () =>{
    it('should be possible to instansiate', () => {
        let piece = new Pawn();
        expect(piece).toBeDefined();
    })
});