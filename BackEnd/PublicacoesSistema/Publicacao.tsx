/**
 * Publicação do usuário.
 */
class Publicacao {
    private userId: string;
    private publicacao: string;
    private idPublicacao: string;
    private usuario: string;
    private idCategoria: number;
    private tempoDecorrido: number;
    private comentarios: number;

    /**
     * Constrói a publicação do usuário.
     * 
     * @param userId identificação unica do usuário.
     * @param publicacao texto da publicação escrita pelo usuário.
     * @param idPublicacao id único da publicação do usuário.
     */
    constructor(userId: string, publicacao: string, idPublicacao: string, usuario: string, idCategoria: number, tempoDecorido: number) {
        if (userId == "") {
            throw new Error("O id do usuário está vazio.");
        } else
        if (publicacao == "") {
            throw new Error("A publicação está vazia.");
        } else
        if (idPublicacao== "") {
            throw new Error("O id da publicação está vazio.");
        }
        this.userId = userId;
        this.publicacao= publicacao;
        this.idPublicacao = idPublicacao;
        this.usuario = usuario;
        this.idCategoria = idCategoria;
        this.tempoDecorrido = tempoDecorido;
        this.comentarios = 0;
    }

    /**
     * Devolve a publicação do usuário.
     * 
     * @returns Retorna o texto principal publicado pelo usuário.
     */
    public getPublicacao(): string {
        return this.publicacao;
    }

    /**
     * Devolve o id da publicação do usuário.
     * 
     * @returns Retorna o id da publicação do usuário.
     */
    public getIdPublicacao(): string {
        return this.idPublicacao;
    }

    /**
     * Devolve a identificação única do usuário.
     * 
     * @returns Retorna a identificação única do usuário.
     */
    public getUserId(): string {
        return this.userId;
    }

    public getIdCategoria(): number {
        return this.idCategoria;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public getTempoPublicacao(): number {
        return this.tempoDecorrido;
    }

    public getLenghtComentarios(): number {
        return this.comentarios;
    }

    /**
     * Verifica se o id da publicação é igual a outra possível publicação.
     * 
     * @param idPublicacao id da publicação.
     * @returns Retorna um valor booleano se o id da publicação é igual ou não.
     */
    public equals(idPublicacao: string): boolean {
        if (this.idPublicacao == idPublicacao) {
            return true;
        }
        return false;
    }
}

export default Publicacao;
