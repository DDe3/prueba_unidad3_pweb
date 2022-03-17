<template>
  <h1>Consulta Paciente</h1>
  <h2>Ingrese la cedula: </h2>
  <input
      type="text"
      placeholder="Cedula..."
      v-model="cedula"
    />
  <button @click="consultarPaciente">Consultar</button>
  <h3 v-if="cedula">{{paciente}}</h3>
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
      // http://localhost:8081/ApiPacientes/V1/pacientes/cedula/{this.cedula}
      
      const response = await fetch(`http://localhost:8081/ApiPacientes/V1/pacientes/cedula/${this.cedula}`).then(r=>r.json())
      this.paciente = response
      console.log(this.paciente)
    }
  }

}
</script>

<style>

</style>