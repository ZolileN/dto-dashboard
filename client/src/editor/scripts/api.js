import deepMerge from 'deepmerge';
import config from './config';


const rootUrl = config.API_BASE_URL;

/**
 * @param route - API endpoint
 * @param token - API session token
 * @param options - options to pass to Fetch
 * @return {Function<Promise>}
 */
export default function api(route, token, options={}) {

  if (!token) {
    window.location = '/sign-out';
  }

  return fetch(`${rootUrl}${route}`, deepMerge({
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  }, options))
    .then(response => {
      if (response.status === 401) {
        // rather than kick out, pass them a message
        let error = new Error(response.statusText);
        error.response = `Unauthorised. If you think you should be authorised try logging out and then logging in again.`
        throw error
      }

      if (response.status === 201) {
        return response;
      }

      throw {message: response.statusText, ...response}

    })
    .then(response => response.json());

}
