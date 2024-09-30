import axios from "axios";
import { useCookies } from "./cookie";
import fileDownload from "js-file-download";

export function useAxios(url: string) {
  const cookies = useCookies();

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30 * 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = cookies.get("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  function get(params: Object, detailUrl = "") {
    const getUrl = detailUrl !== "" ? detailUrl : url;

    return axiosInstance.get(getUrl, { params });
  }

  function post(data: Object, detailUrl = "") {
    const postUrl = detailUrl !== "" ? detailUrl : url;
    return axiosInstance.post(postUrl, data);
  }

  function uploadFile(data: Object, detailUrl = "") {
    const postUrl = detailUrl !== "" ? detailUrl : url;

    return axiosInstance.post(postUrl, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  function put(data: Object, detailUrl = "") {
    const putUrl = detailUrl !== "" ? detailUrl : url;

    return axiosInstance.put(putUrl, data);
  }

  function patch(data: Object, detailUrl = "") {
    const patchUrl = detailUrl !== "" ? detailUrl : url;

    return axiosInstance.patch(patchUrl, data);
  }

  function remove(data: Object, detailUrl = "") {
    const deleteUrl = detailUrl !== "" ? detailUrl : url;

    return axiosInstance.delete(deleteUrl, { data });
  }

  function download(params: Object, filename: string) {
    return axiosInstance
      .get(url, {
        params,
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  }

  return {
    get,
    post,
    uploadFile,
    put,
    patch,
    remove,
    download,
  };
}
