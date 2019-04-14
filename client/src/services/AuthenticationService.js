/* on a un objet api qui est importer du fichier api qui est l'objet axios */

import Api from '@/services/Api'
/* On créé un objet qui va nous permettre de faire appel à une méthode de connexion */
/* On exporte un objet qui contient une méthode de connexion  (email & password) et on pourra donc
faire appel à cette méthode */
export default {
  register (credentials) {
    return Api().post('register', credentials) /* on fait une requête de type POST sur le point register
     et on envoir des credential */
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
