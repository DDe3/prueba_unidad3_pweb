<template>
  <h1>Citas Pendientes</h1>
  <h2>Ingrese la cedula del doctor: </h2>
  <input
      type="text"
      placeholder="Cedula del doctor..."
      v-bind="this.cedula"
    />

    <ul>
      <li v-for="cita in citas" :key="cita.id"> {{cita}} </li>
    </ul>
  <button @click="consultarCitasPendientes">Consultar Citas Pendientes</button>
</template>

<script>
export default {

  data() {
    return {
      cedula : null,
      citas : null,
    }
  },
  methods: {
    async consultarCitasPendientes() {
      http://localhost:8080/#/ConsultaPaciente
      response = await fetch(`http://localhost:8081/ApiCitas/V1/citas/${this.cedula}`).then(r=>r.json())
      this.citas = response
    }
  }

}
</script>

<style>

</style>