<template>
  <h1>Proxima Cita</h1>
  <h2>Ingrese la cedula del Paciente: </h2>
  <input
      type="text"
      placeholder="Cedula..."
      v-model="this.cedula"
    />
  <button @click="consultarProximaCita">Consultar</button>
  <h3 v-if="cita">{{cita}}</h3>
</template>

<script>
export default {

  data() {
    return {
      cedula : null,
      cita : null,
    }
  },
  methods: {
    async consultarProximaCita() {
      const response = await fetch (`http://localhost:8081/ApiCitas/V1/citas/${this.cedula}/proxima-cita`).then(r=>r.json())
      this.cita = response
    }
  }

}
</script>

<style>

</style>