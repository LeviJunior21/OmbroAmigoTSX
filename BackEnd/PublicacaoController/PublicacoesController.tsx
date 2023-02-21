import PublicacoesSistema from "../PublicacoesSistema/PublicacoesSistema";

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
 * Controller de Publicações.  
 */
class PublicacaoController {
    private publicacaoSistema: PublicacoesSistema;

    /**
     * Inicializa o sistema de publicações.
     */
    constructor() {
        this.publicacaoSistema = new PublicacoesSistema();
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
        return this.publicacaoSistema.setPublicacao(userId, publicacao, idPublicacao, usuario, idCategoria, tempoDecorrido);
    }

    /**
     * Pega todas as publicações feitas pelos usuários.
     * 
     * @returns Retorna um array de dicionários contendo todas informações da publicação.
     */
    public getPublicacoes(): Array<PublicacaoInfo> {
        return this.publicacaoSistema.getPublicacoes();
    }
}

export default PublicacaoController;
