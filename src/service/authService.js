import axios from 'axios';
import config from '../config/config';

const baseAuthURL = config.baseURL +'/auth'
const baseRolePermissionsURL = config.baseURL + "/roles";
const quotationsURL = config.baseURL +'/quotationsDetails'
export class AuthService {

 
    async verifyCredentials(credentials) {
        
        return axios
          .post(`${baseAuthURL}/login/`, credentials).then((response) =>
          {
            return response
          }).catch((error) =>{
            return false
          });  
          
      }

      async getPermissions(token) {
        let config ={
            headers : {'Authorization': 'Bearer ' + token}
        }
         
        return axios.get(`${baseRolePermissionsURL}/permissions`,config).then((res) => res.data);
    }

    async sendRecovery(email){
      return axios.post(`${baseAuthURL}/recovery`,{
        email: email
      })
    }

    async changePassword(token, newPassword){
      return axios.post(`${baseAuthURL}/change-password`,{
        token: token,
        newPassword: newPassword
      })
    }
    async getUserInfo(token){
      return axios.post(`${baseAuthURL}/get-user`,{
        token: token,
        
      })
    }

    

}