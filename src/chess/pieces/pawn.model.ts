import { Piece } from './piece.enum';
import { BasePiece } from './base-piece.model';
export class Pawn extends BasePiece {
    constructor() {
        super(Piece.pawn);        
    }

}