import axios from 'axios';
import config from '../config/config';

const baseAuthURL = config.baseURL +'/auth'

export class AuthService {

 
    verifyCredentials(credentials) {
        
        return axios
          .post(`${baseAuthURL}/login/`, credentials).then((response) =>
          {
            console.log(response)
            return response
          });  
          
      } 

}