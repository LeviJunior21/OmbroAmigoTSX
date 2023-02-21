export const tempoDecorrido = (tempoSegundos: number) => {
    if (tempoSegundos < 60) {  
      return                                      "agora há pouco"; 
    } else 
    if (tempoSegundos < 120) {
      return                                      "1 minuto atrás"; 
    } else 
    if (tempoSegundos < 3600) {
      return (tempoSegundos/60).toFixed() +       " minutos atrás"; 
    } else
    if (tempoSegundos < 7200) {
      return (tempoSegundos/3600).toFixed() +     " hora atrás"; 
    } else
    if (tempoSegundos < 86400) {
      return (tempoSegundos/3600).toFixed() +     " horas atrás"; 
    } else
    if (tempoSegundos < 172800) {
      return (tempoSegundos/86400).toFixed() +    " dia atrás"; 
    } else 
    if (tempoSegundos < 604800) {
      return (tempoSegundos/86400).toFixed() +    " dias atrás"; 
    } else
    if (tempoSegundos < 1209600) {
      return (tempoSegundos/604800).toFixed() +   " semana atrás"; 
    }
    else {
      return (tempoSegundos/60480099).toFixed() + " semanas atrás"; 
    }
}
