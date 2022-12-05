import axios from "axios";
import config from "../config/config";

const salesURL = config.baseURL + "/sales";

export class SalesService {
  async createSale(personalInfo, shippingInfo, cart) {
    return axios.post(`${salesURL}/create-sale`, {
      personalInfo,
      shippingInfo,
      cart,
    });
  }
  async createSaleWithToken(personalInfo, shippingInfo, cart, token) {
    let config = {
      headers: { Authorization: "Bearer " + token },
    };
    return axios.post(
      `${salesURL}/create-sale-token`,
      {
        personalInfo,
        shippingInfo,
        cart,
      },
      config
    );
  }
  async getPreviousSales(token) {
    let config = {
      headers: { Authorization: "Bearer " + token },
    };
    return axios.get(`${salesURL}/get-previous-sales`, config);
  }
  async getTopThree() {
    return axios.get(`${salesURL}/get-top-three`);
  }
  async getPreviousSaleById(token, idSale) {
    let config = {
      headers: { Authorization: "Bearer " + token },
    };
    return axios.get(`${salesURL}/get-previous-sales-by-id/${idSale}`, config);
  }

  async buyConfirmation(personalInfo) {
    return axios.post(`${salesURL}/buy-confirmation`, {
      email: personalInfo.email,
    });
  }
}
