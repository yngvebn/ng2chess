import { Piece } from './piece.enum';
import { BasePiece } from './base-piece.model';
export class Queen extends BasePiece {
        constructor() {
        super(Piece.queen);        
    }

}