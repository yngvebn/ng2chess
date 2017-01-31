import { BasePiece } from './base-piece.model';
describe('piece', () =>{
    it('should be possible to instansiate', () => {
        let piece = new BasePiece();
        expect(piece).toBeDefined();
    })
});