import { graphql, useStaticQuery } from 'gatsby'

const useChatbot = () => {
    
    const resultado = useStaticQuery(
        graphql`
            query {                
                strapiChatbots {
                    name
                    steps {
                      steps {
                        id
                        end
                        message                        
                        trigger
                        user
                        options {
                          label
                          trigger
                          value
                        }
                      }
                    }
                  }
          }
        `
    );

    // return resultado.strapiChatbots.steps.map( inicio => ({
    //     nombre: inicio.nombre,
    //     contenido: inicio.contenido,
    //     imagen: inicio.imagen
    // }))
     return resultado.strapiChatbots.steps.steps;

}
 
export default useChatbot;