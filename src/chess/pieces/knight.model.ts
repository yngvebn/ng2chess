import { Piece } from './piece.enum';
import { BasePiece } from './base-piece.model';
export class Knight extends BasePiece {
        constructor() {
        super(Piece.knight);        
    }

}