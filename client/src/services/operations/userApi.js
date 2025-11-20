import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { userEndpoints } from "../apis"

const {
    CREATE_USER_API,
    GET_ALL_USERS
} = userEndpoints

export async function createUser(data) {
    let result = null
    const toastId = toast.loading('Loading...')
    try {
        const response = await apiConnector('POST', CREATE_USER_API, data)

        console.log('Create User response :', response)

        if(!response?.data?.success) {
            throw new Error(response?.data?.message)
        }

        toast.success('User added successfully.')
        result = response?.data?.data

    } catch (err) {
        console.log("Add User API ERROR...", err)
        toast.error(err.message)
    }
    toast.dismiss(toastId)
    return result
}

export async function getAllUsers() {
    let result = []
    const toastId = toast.loading('Loading...')

    try {
        const response = await apiConnector('GET', GET_ALL_USERS)

        console.log('Get All users response:', response)
        if(!response?.data?.success) {
            throw new Error(response.data.message)
        }

        result = response?.data?.data
        toast.success('All users fetched successfully.')

    } catch (err) {
        console.error(err)
        toast.error('Could not fetch users.')
    }
    toast.dismiss(toastId)
    return result
}