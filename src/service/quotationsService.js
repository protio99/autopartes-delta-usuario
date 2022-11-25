import axios from "axios";
import config from "../config/config";

const quotationsURL = config.baseURL + "/quotationsDetails";
const baseAdminURL = config.adminURL + "/#/validation-token";
const baseUserURL = config.userURL + "/validation-token";
const baseRolePermissionsURL = config.baseURL + "/roles";
export class QuotationsService {
  async addProduct(idUser, idProduct) {
    return axios
      .get(`${baseRolePermissionsURL}/permissions`, config)
      .then((res) => res.data);
  }
  async updateQuotation(idUser, quotation) {
    return axios.post(`${quotationsURL}/update-quotation`, {
      idUser: idUser,
      quotationData: quotation,
    });
  }

  async getQuotations() {
    const token = localStorage.getItem("tokenUser");
    let config = {
      headers: { Authorization: "Bearer " + token },
    };
    return axios.get(`${quotationsURL}/quotations-detail`, config);
  }
}
