/* mettre en place des connecteurs */

import axios from 'axios'

export default () => {
  /* on créé un objet axios qui va pointer vers notre url de backend */
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
