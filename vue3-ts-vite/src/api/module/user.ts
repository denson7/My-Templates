import http from '@/utils/http'

export const login = (username: string, password: string) => {
  return http({
    url: '/api/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
