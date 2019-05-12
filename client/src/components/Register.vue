<!-- dans la balise input on utilise v-model qui va faire en sorte que le contenu de cet input
sera par défaut le contenu spécifier dans le script -->

<template>
  <div>
     <h1> Register </h1>

     <input
     type="email"
     v-model="email"
     name="email"
     placeholder="email" />
     <br>
     <input
     type="password"
     v-model="password "
     name="password"
     placeholder="password" />
     <br>
     <button @click="register"> S'enregistrer </button> <!-- lorsqu'on cliquera sur le bouton on fera
      appel à une méthode register -->
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'dipitajc@gmail.com',
      password: 'test123'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
