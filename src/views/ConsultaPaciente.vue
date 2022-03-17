<template>
  <h1>Consulta Paciente</h1>
  <h2>Ingrese la cedula: </h2>
  <input
      type="text"
      placeholder="Cedula..."
      v-bind="this.paciente"
    />
  <button @click="consultarPaciente">Consultar</button>
  <h3 v-if="this.paciente">{{this.paciente}}</h3>
</template>

<script>
export default {

  data() {
    return {
      cedula : null,
      paciente : null,
    }
  },
  methods: {
    async consultarPaciente() {
      http://localhost:8080/#/ConsultaPaciente
      response = await fetch(`http://localhost:8080/ApiPacientes/pacientes/${this.cedula}`).then(r=>r.json())
      this.paciente = response
    }
  }

}
</script>

<style>

</style>