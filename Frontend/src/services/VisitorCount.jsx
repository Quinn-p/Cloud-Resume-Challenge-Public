import axios from 'axios'

export async function getCount() {
    const favoritesUrl = `https://jlhuygami8.execute-api.us-east-1.amazonaws.com/Prod/view_count`
    const response = await axios.get(favoritesUrl)
    const result = response.data
    return result
}