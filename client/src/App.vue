<template>
  <div id="app">
    <!-- Incluir el componente TablaPersonas -->
    <TablaPersonas />
    
    <!-- Incluir el componente FormularioPersona -->
    <FormularioPersona />
  </div>
</template>

<script>
// Importar los componentes
import TablaPersonas from './components/TablaPersonas.vue';
import FormularioPersona from './components/FormularioPersona.vue';

export default {
  name: 'App',
  components: {
    TablaPersonas,    // Registrar TablaPersonas
    FormularioPersona // Registrar FormularioPersona
  }
};
</script>

<style>
/* Estilos globales si es necesario */
#app {
  font-family: 'Arial', sans-serif;
  padding: 20px;
}
</style>
