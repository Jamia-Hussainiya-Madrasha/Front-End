import axiosClient from "../../../configs/axios.config";

const sliderImageApi = {
  getSliderImageApi: () => {
    return axiosClient.get("/images/");
  },
};

export default sliderImageApi;