const BASE_URL = import.meta.env.VITE_BASE_URL

export const userEndpoints = {
    CREATE_USER_API: BASE_URL + '/user/profile',
    GET_ALL_USERS: BASE_URL + '/user/all-users'
}