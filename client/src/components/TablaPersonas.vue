<template>
  <div id="tabla-personas">
    <!-- Contenedor para la tabla -->
    <div class="tabla-header">
      <h1>Listado de Personas</h1>
      <button @click="obtenerPersonas" class="refresh-btn">🔄 Refrescar Datos</button>
    </div>

    <!-- Mostrar la tabla solo si hay datos disponibles -->
    <div v-if="personas && personas.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- Iterar sobre las personas y mostrarlas -->
          <tr v-for="persona in personas" :key="persona.id">
            <!-- Campo de Nombre (editable cuando se está editando) -->
            <td v-if="editando === persona.id">
              <input type="text" class="form-control" v-model="persona.nombre" />
            </td>
            <td v-else>
              {{ persona.nombre }}
            </td>

            <!-- Campo de Apellido (editable cuando se está editando) -->
            <td v-if="editando === persona.id">
              <input type="text" class="form-control" v-model="persona.apellido" />
            </td>
            <td v-else>
              {{ persona.apellido }}
            </td>

            <!-- Campo de Email (editable cuando se está editando) -->
            <td v-if="editando === persona.id">
              <input type="email" class="form-control" v-model="persona.email" />
            </td>
            <td v-else>
              {{ persona.email }}
            </td>

            <!-- Botones de acción (editar, guardar, eliminar) -->
            <td>
              <!-- Botón de guardar si estamos editando -->
              <button v-if="editando === persona.id" class="btn btn-success" @click="guardarCambios(persona)">💾 Guardar</button>
              <!-- Botón de editar si no estamos editando -->
              <button v-else class="btn btn-info" @click="editarPersona(persona.id)">✏️ Editar</button>
              <!-- Botón de eliminar -->
              <button class="btn btn-danger ml-2" @click="eliminarPersona(persona.id)">🗑️ Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No hay personas disponibles.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaPersonas",
  data() {
    return {
      personas: [], // Asegurarse de que personas sea un arreglo
      editando: null, // Guardará el ID de la persona que se está editando
    };
  },
  methods: {
    // Método para obtener personas
    async obtenerPersonas() {
      try {
        const response = await fetch("http://localhost:8000/personas/personas");
        const data = await response.json();
        this.personas = data; // Actualizar la lista de personas
      } catch (error) {
        console.error("Error al obtener personas:", error);
      }
    },

    // Método para eliminar persona
    async eliminarPersona(id) {
      try {
        await fetch(`http://localhost:8000/personas/personas/${id}`, {
          method: "DELETE",
        });
        // Volver a obtener los datos después de eliminar
        this.obtenerPersonas();
      } catch (error) {
        console.error("Error al eliminar persona:", error);
      }
    },

    // Método para editar persona (establece el ID de la persona en edición)
    editarPersona(id) {
      this.editando = id; // Establecer el ID de la persona en edición
    },

    // Método para guardar los cambios de una persona
    async guardarCambios(persona) {
      try {
        await fetch(`http://localhost:8000/personas/personas/${persona.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(persona), // Enviar los cambios
        });
        // Volver a obtener los datos después de guardar los cambios
        this.obtenerPersonas();
        this.editando = null; // Dejar de editar
      } catch (error) {
        console.error("Error al guardar cambios:", error);
      }
    },
  },
  mounted() {
    this.obtenerPersonas(); // Obtener personas cuando el componente esté montado
  },
};
</script>

<style scoped>
/* Estilos para la tabla */
.tabla-container {
  padding: 20px;
}

.tabla-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  color: #333;
}

.refresh-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.refresh-btn:hover {
  background-color: #45a049;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

td {
  font-size: 14px;
}

button {
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
}

button:hover {
  opacity: 0.8;
}
</style>
