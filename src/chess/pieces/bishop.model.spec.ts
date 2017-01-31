import { Bishop } from './bishop.model';

describe('bishop', () =>{
    it('should be possible to instansiate', () => {
        let piece = new Bishop();
        expect(piece).toBeDefined();
    })
});