import { firebase } from '../DataBase/FirebaseCredentials';
import { firebaseFirestorePublicacoes } from '../DataBase/Firestore';

interface GetPublicacao {
    usuario: string,
    mensagem: string,
    segundos: number,
    categoria: number,
    idPublicacao: string,
    email: string,
    pub: any
}

const getPublicacoes = () => {
  let publicacoesFirebase: GetPublicacao[] = [];
  firebaseFirestorePublicacoes.orderBy("tempo", "desc").onSnapshot((dados: any) => {
    dados.forEach((pub: any) => {
      const { mensagem, usuario, segundos, categoria, email } = pub.data()
      publicacoesFirebase.push({
        usuario,
        mensagem,
        segundos,
        categoria,
        idPublicacao: pub.id,
        email,
        pub
      })
    })
  })
  return publicacoesFirebase;
}



const addPublicacao = (mensagem:string, categoria:number, email:string) => {
  const dados = {
    tempo: firebase.firestore.Timestamp.now(),
    categoria: categoria,
    mensagem: mensagem,
    segundos: new Date().getTime(),
    email: email
  }

  firebaseFirestorePublicacoes.add(dados)
  .then(() => {})
  .catch(() => {});
}

const delPublicacao = (publicacao: any) => {
  firebaseFirestorePublicacoes.doc(publicacao.id).delete()
  .then(() => {})
  .catch(() => {});
}

const getComentarios = async(idPublicacao: string) => {
  let comentarios: any = [];
  await firebaseFirestorePublicacoes.doc(idPublicacao).get().then((dados: any) => {
    let resultado = dados.data().comentarios;
    resultado.forEach((coment: any) => {
      comentarios.push(coment);
    })
  })
  return comentarios;
}

const sendComentario = async(idPublicacao: string, email: string, texto: string) => {
  await firebaseFirestorePublicacoes.doc(idPublicacao).update({
    comentarios: firebase.firestore.FieldValue.arrayUnion({
      mensagem: texto, 
      tempo: firebase.firestore.Timestamp.now(),
      segundos: new Date().getTime(),
      email: email
    })
  })
}

const getDiferencaTempo = (tempoAnterior: number) => {
  const tempoAtual = new Date().getTime();
  return (tempoAtual - tempoAnterior)/1000;
}

export { getPublicacoes, addPublicacao, delPublicacao, getComentarios, sendComentario, getDiferencaTempo };