import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

const http = axios.create({
  baseURL: '',
  // 秒
  timeout: 30 * 1000,
  // 请求是否携带cookie
  withCredentials: true
})

// Request interceptors
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// Response interceptors
http.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: AxiosError) => {
    // do something
    return Promise.reject(error)
  }
)

export default http
