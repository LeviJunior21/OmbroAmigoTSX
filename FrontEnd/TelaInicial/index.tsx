import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PublicacaoController from '../../BackEnd/PublicacaoController/PublicacoesController';
import Publicacao from './Publicacao';

type PublicacaoInfo = {
  userId: string,
  publicacao: string,
  idPublicacao: string,
  usuario: string,
  tempoPublicacao: number, 
  idCategoria: number, 
  comentarios: number
}

interface Publicacao {
  publicacoes: PublicacaoInfo[]
}

export default class Home extends Component<{}, Publicacao> {
  private publicacoesController: PublicacaoController = new PublicacaoController();

  constructor(props: any) {
    super(props);
    this.state = {
      publicacoes: []
    }
  }

  componentDidMount() {
    const publicacao = [
      {userId: "LeviJunior", usuario: "Levi Júnior", publicacao: "Olá!", idPublicacao: "1922342210", tempo: 21432141, categoria: 1}
    ];

    for (const pub of publicacao) {
      this.publicacoesController.setPublicacao(
        pub.userId, 
        pub.publicacao, 
        pub.idPublicacao, 
        pub.usuario, 
        pub.categoria, 
        pub.tempo
      );
    }

    this.setState({publicacoes: this.publicacoesController.getPublicacoes()})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.publicacoes.map((item: PublicacaoInfo) => 
          <Publicacao idUsuario={item.userId} usuario={item.usuario} tempo={item.tempoPublicacao} categoria={item.idCategoria} publicacao={item.publicacao} comentarios={0}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});
