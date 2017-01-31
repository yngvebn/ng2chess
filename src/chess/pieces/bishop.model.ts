import { Piece } from './piece.enum';
import { BasePiece } from './base-piece.model';
export class Bishop extends BasePiece {
    constructor() {
        super(Piece.bishop);        
    }
}