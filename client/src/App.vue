<template>
<div id="app" class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Personas</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <formulario-persona @add-persona="agregarPersona" />
            <tabla-personas :personas="personas" />
        </div>
    </div>
</div>
</template>

<script>
import TablaPersonas from '@/components/TablaPersonas.vue'
import FormularioPersona from '@/components/FormularioPersona.vue'

export default {
    name: 'app',
    components: {
        TablaPersonas,
        FormularioPersona,
    },
    data() {
        return {
            personas: [
                {
                    id: 1,
                    nombre: 'Jon',
                    apellido: 'Nieve',
                    email: 'jon@email.com',
                },
                {
                    id: 2,
                    nombre: 'Tyrion',
                    apellido: 'Lannister',
                    email: 'tyrion@email.com',
                },
                {
                    id: 3,
                    nombre: 'Daenerys',
                    apellido: 'Targaryen',
                    email: 'daenerys@email.com',
                },
            ],
        }
    },
    methods: {
        agregarPersona(persona) {
            let id= 0;
            
            if (this.personas.length > 0) {
                id = this.personas[this.personas.length - 1].id + 1;
            }
            
            this.personas= [...this.personas, { ...persona, id}];
        }
    }
}
</script>

<style>
body {
    background: #f9f9f9;
}
</style>