import axios from 'axios';
import config from '../config/config';

const quotationsURL = config.baseURL +'/quotationsDetails'
const baseAdminURL = config.adminURL+ '/#/validation-token'
const baseUserURL = config.userURL+ '/validation-token'
const baseRolePermissionsURL = config.baseURL + "/roles";
export class QuotationsService {


      async addProduct(idUser, idProduct) {               
        return axios.get(`${baseRolePermissionsURL}/permissions`,config).then((res) => res.data);
    }

}