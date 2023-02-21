/**
 * Comentário do usuário.
 */
class Comentario {
    private comentario: string;
    private userId: string;
    private idComentario: string;

    /**
     * Constrói o comentário do usuário.
     * 
     * @param comentario omentário do usuário.
     * @param userId id único do usuário.
     * @param idComentario id único do comentário.
     * @throws O comentário possui menos de 20 caracteres.
     * @throws O comentário está vazio.
     * @throws O id do usuário esta vazio.
     * @throws O id do comentário está vazio.
     */
    constructor(comentario: string, userId: string, idComentario: string) {
        if (comentario.split.length < 20) {
            throw new Error("O comentário possui menos de 20 caracteres.");
        } else
        if (comentario == "") {
            throw new Error("O comentário está vazio.");
        } else
        if (userId == "") {
            throw new Error("O id do usuário está vazio.");
        } else 
        if (comentario.split.length < 20) {
            throw new Error("O id do comentário está vazio.");
        }
        this.comentario = comentario;
        this.userId = userId;
        this.idComentario = idComentario;                
    }

    /**
     * Devolve o comentário feito pelo usuário.
     * 
     * @returns Retorna o comentário do usuário.
     */
    public getComentario(): string {
        return this.comentario;
    }

    /**
     * Devolve o id único do usuário.
     * 
     * @returns Retorna o id único do usuário.
     */
    public getUserId(): string {
        return this.userId;
    }

    /**
     * Devolve o id do comentário.
     * 
     * @returns retorna o id do comentário.
     */
    public getIdComentario(): string {
        return this.idComentario;
    }

    /**
     * Verifica se o id do comentário é igual a outro possível comentário.
     * 
     * @param idComentario id do comentário. 
     * @returns Retorna um valor booleano se o id do comentário é igual ou não.
     */
    public equals(idComentario: string): boolean {
        if (this.idComentario == this.idComentario) {
            return true;
        }
        return false;
    }
}
