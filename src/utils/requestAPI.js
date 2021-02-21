import axios from 'axios'

export const requestAPI = async (apiPath, params) => {
    let config = {
        method: 'post',
        url: `${process.env.VUE_APP_API_ENDPOINT}${apiPath}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(params)
    };

    let response = await axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            if (error.response) {
                return error.response.data
            } else {
                return { errors: { message: error.message } }
            }
        });

    return response
}