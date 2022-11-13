import axios from 'axios';
import config from '../config/config';

const baseAuthURL = config.baseURL +'/auth'
const baseAdminURL = config.adminURL+ '/#/validation-token'
const baseUserURL = config.userURL+ '/validation-token'
const baseRolePermissionsURL = config.baseURL + "/roles";
export class AuthService {

 
    async verifyCredentials(credentials) {
        
        return axios
          .post(`${baseAuthURL}/login/`, credentials).then((response) =>
          {
            console.log(response)
            const token = response.data.token
            console.log(token)
            const idUserRol = response.data.user.idRol
            if (idUserRol !== 2) {
              // localStorage.setItem('tokenAdmin',token)
              console.log("Hago redireccion al admin")
              window.location.replace(`${baseAdminURL}/${token}`)
              
            }else{
              console.log("No hago redireccion ")
              localStorage.setItem('tokenUser',token)
              window.location.replace(`${baseUserURL}/${token}`)
            }
            console.log(response)
            return response
          }).catch((error) =>{
            return false
            console.log("error al realizar la autenticacion", error)
          });  
          
      } 
      getPermissions(token) {
        let config ={
            headers : {'Authorization': 'Bearer ' + token}
        }
         
        return axios.get(`${baseRolePermissionsURL}/permissions`,config).then((res) => res.data);
    }

}