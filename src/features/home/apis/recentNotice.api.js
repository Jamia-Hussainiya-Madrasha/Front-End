import axiosClient from "../../../configs/axios.config";

const recentNoticeApi = {
  getRecentNoticesApi: () => {
    return axiosClient.get("/notices/latest/");
  },
};

export default recentNoticeApi;