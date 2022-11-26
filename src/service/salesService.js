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

  async buyConfirmation(personalInfo) {
    return axios.post(`${salesURL}/buy-confirmation`, {
      email: personalInfo.email,
    });
  }
}
