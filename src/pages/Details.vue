<template>
  <q-page padding class="bg-white">
    <div class="q-pa-md bg">
      <div class="row">
         <div class="offset-lg-2 offset-md-3 offset-sm-2 col-lg-8 col-md-6 col-sm-8 col-12 bg-white">
            <div class="row">
            <div class="col-5 q-pa-sm">
                <q-img src="guerin-logo.png" />
            </div>
            </div>
            <div class="text-center title q-pa-sm">Detalle del puesto principal</div>
            <div class="row q-pd">
              <q-separator color="red" inset class="full-width" />
            </div>
          </div>
        </div>
      <div class="row q-pa-md">
        <q-btn-dropdown @click="setDiagramacion" no-caps color="primary" label="Diagramacion" class="full-width q-ma-sm">
        </q-btn-dropdown>
        <div v-if="renderOption.diagramacion">Diagramacion</div>
        <q-btn-dropdown @click="setAlertas" no-caps color="primary" label="Alertas" class="full-width q-ma-sm">
        </q-btn-dropdown>
        <div v-if="renderOption.alertas">Alertas</div>
         <q-btn-dropdown @click="setHombre" no-caps color="primary" label="Hombre Vivo" class="full-width q-ma-sm">
        </q-btn-dropdown>
        <div v-if="renderOption.hombre">Hombre Vivo</div>
        <q-btn-dropdown @click="setHombre" no-caps color="grey" label="Control de supervisión" class="full-width q-ma-sm">
        </q-btn-dropdown>
        <div v-if="renderOption.supervision">Control</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {

  data () {
    return {
      renderOption: {
        diagramacion: false,
        alertas: false,
        hombre: false,
        supervision: false
      }
    }
  },

  methods: {
    setDiagramacion () {
      this.renderOption.diagramacion = true
      this.renderOption.alertas = false
      this.renderOption.hombre = false
      this.renderOption.supervision = false
    },
    setAlertas () {
      this.renderOption.diagramacion = false
      this.renderOption.alertas = true
      this.renderOption.hombre = false
      this.renderOption.supervision = false
    },
    setHombre () {
      this.renderOption.diagramacion = false
      this.renderOption.alertas = false
      this.renderOption.hombre = true
      this.renderOption.supervision = false
    },
    setSupervision () {
      this.renderOption.diagramacion = false
      this.renderOption.alertas = false
      this.renderOption.hombre = false
      this.renderOption.supervision = true
    }
  }

}
</script>
