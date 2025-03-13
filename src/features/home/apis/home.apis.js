const homeApi = {
  findLatestNotice: () => {
    return axiosClient.get("/notices/latest");
  },
  findSliderImage: () => {
    return axiosClient.get("/images");
  },
};
