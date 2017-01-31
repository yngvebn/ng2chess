import { Knight } from './knight.model';

describe('knight', () =>{
    it('should be possible to instansiate', () => {
        let piece = new Knight();
        expect(piece).toBeDefined();
    })
});