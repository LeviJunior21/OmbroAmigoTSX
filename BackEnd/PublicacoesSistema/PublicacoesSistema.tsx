import Publicacao from "./Publicacao";

type PublicacaoInfo = {
  userId: string,
  publicacao: string,
  idPublicacao: string,
  usuario: string,
  tempoPublicacao: number, 
  idCategoria: number,
  comentarios: number
}

/**
 * Sistema de publicações do Ombro Amigo.
 */
class PublicacoesSistema {
    private publicacoes: Array<Publicacao>;

    /**
     * Inicializa o array de publicações.
     */
    constructor() {
        this.publicacoes = new Array<Publicacao>();
    }

    private hasPublicacao(idPublicacao: string): boolean {
        for (const publicacao of this.publicacoes) {
            if (publicacao.equals(idPublicacao) == true) {
                return true;
            }
        }
        return false;
    }

    /**
     * Constrói uma publicação e adiciona no Array de publicação.
     * 
     * @param userId id do usuário. 
     * @param publicacao publicação do usuário.
     * @param idPublicacao id da publicação feita.
     * 
     * @returns Retorna o estado da publicação. 
     */
    public setPublicacao(userId: string, publicacao: string, idPublicacao: string, usuario: string, idCategoria: number, tempoDecorrido: number): string {
        try {
            const newPublicacao: Publicacao = new Publicacao(userId, publicacao, idPublicacao, usuario, idCategoria, tempoDecorrido);
            if (this.hasPublicacao(idPublicacao)) {
                throw new Error("A publicação já existe!");
            } 
            else {
                this.publicacoes.push(newPublicacao);
                return "Publicado!";
            }
        }
        catch(error) {
            if (error instanceof Error) {
                return error.message;
            }
            else {
                return "Ocorreu um erro desconhecido."
            }
        }
    }

    /**
     * Pega todas as publicações feitas pelos usuários.
     * 
     * @returns Retorna um array de dicionários contendo todas informações da publicação.
     */
    public getPublicacoes(): Array<PublicacaoInfo> {
        const publicacoes: Array<PublicacaoInfo> = new Array<PublicacaoInfo>();
        for (const publicacao of this.publicacoes) {
            publicacoes.push({
                userId: publicacao.getUserId(),
                publicacao: publicacao.getPublicacao(),
                idPublicacao: publicacao.getIdPublicacao(),
                usuario: publicacao.getUsuario(),
                tempoPublicacao: publicacao.getTempoPublicacao(),
                idCategoria: publicacao.getIdCategoria(),
                comentarios: publicacao.getLenghtComentarios()
            })
        }
        return publicacoes;
    }
}

export default PublicacoesSistema;
