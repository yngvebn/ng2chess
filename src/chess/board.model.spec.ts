import { Board } from './board.model';

describe('Board', () => {
    it('should be possible to instansiate', () => {
        let board = new Board();
        expect(board).toBeDefined();
    });
})