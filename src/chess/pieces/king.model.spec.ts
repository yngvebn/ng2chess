import { King } from './king.model';

describe('king', () =>{
    it('should be possible to instansiate', () => {
        let piece = new King();
        expect(piece).toBeDefined();
    })
});