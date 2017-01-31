import { Piece } from './piece.enum';
import { BasePiece } from './base-piece.model';
export class King extends BasePiece {
        constructor() {
        super(Piece.king);        
    }

}