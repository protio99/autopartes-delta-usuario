import axios from 'axios';
import config from '../config/config';

const baseAuthURL = config.baseURL +'/auth'
const baseAdminURL = config.adminURL+ '/#/validation-token'

export class AuthService {

 
    async verifyCredentials(credentials) {
        
        return axios
          .post(`${baseAuthURL}/login/`, credentials).then((response) =>
          {
            console.log(response)
            const token = response.data.token
            console.log(token)
            localStorage.setItem('token',token)
            const idUserRol = response.data.user.idRol
            if (idUserRol !== 2) {
              console.log("Hago redireccion al admin")
              window.location.replace(`${baseAdminURL}/${token}`)
              
            }else{
              console.log("No hago redireccion ")
            }
            console.log(response)
            return response
          }).catch((error) =>{
            console.log("error al realizar la autenticacion", error)
          });  
          
      } 

}