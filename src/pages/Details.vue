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
            <div class="row justify-around items-center">
                <div class="col-2">
                <q-img src="supervisor.png"/>
                <div style="font-size: 0.7rem" class="text-center">Jose Vigilador</div>
                </div>
                <div class="col-5">
                    <div style="font-size: 0.9rem">Nombre del puesto</div>
                    <div style="font-size: 0.8">Cliente </div>
                    <div style="font-size: 0.7rem">Calle, numero y ciudad</div>
                </div>
                <div class="col-0.5"><div class="schedule">10:00</div><div class="schedule">18:00</div></div>
                <div class="col-1 text-green">
                 <q-icon size="sm" name="call"/>
                </div>
                <div class="col-1.2 text-secondary">
                   <q-btn
                    color="positive"
                    size="xs"
                    label="Check in"
                    />
                </div>
            </div>
      <div class="row q-pa-md">
        <q-btn-dropdown @click="setDiagramacion" no-caps color="primary" label="Diagramacion" class="full-width q-ma-sm">
        </q-btn-dropdown>
        <div v-if="renderOption.diagramacion">
          <div class="row">
                <div class="col-3 column self-end">
                <div class="grid-range-container">
                  <div class="grid-item">08:00-16:00</div>
                  <div class="grid-item">08:00-16:00</div>
                  <div class="grid-item">08:00-16:00</div>
                </div>
                </div>
                <div class="col-8 q-pa-xs self-center">
                <div class="grid-date-container">
                  <div class="grid-item">Hoy</div>
                  <div class="grid-item">2-12</div>
                  <div class="grid-item">3-12</div>
                  <div class="grid-item">4-12</div>
                </div>
                <div class="grid-container">
                  <div class="grid-item">JV</div>
                  <div class="grid-item">JV</div>
                  <div class="grid-item">PP</div>
                  <div class="grid-item">JV</div>
                  <div class="grid-item">CC</div>
                  <div class="grid-item">PP</div>
                  <div class="grid-item">CC</div>
                  <div class="grid-item">CC</div>
                  <div class="grid-item">PP</div>
                  <div class="grid-item">DD</div>
                  <div class="grid-item">DD</div>
                  <div class="grid-item">EE</div>
                </div>
                </div>
                <div class="col-1 text-green self-center">
                 <q-icon size="sm" name="date_range"/>
                </div>
            </div>
            <div class="row justify-around items-center q-pa-sm">
            <div class="col-4 bg-orange">
            <div class="row justify-around items-center">
            <div class="col-6"><q-img src="supervisor.png"/></div>
            <div class="col-6">
            <q-icon size="sm" name="call" class="text-green"/>
            <div style="font-size: 0.7rem">PP-Pedro Pedro</div>
            </div>
            </div>
            </div>
            <div class="col-4">
               <div class="row justify-around items-center">
            <div class="col-6"><q-img src="supervisor.png"/></div>
            <div class="col-6">
            <q-icon size="sm" name="call" class="text-green"/>
            <div style="font-size: 0.7rem">JV-Jose Vigilador</div>
            </div>
            </div>
            </div>
            <div class="col-4">
               <div class="row justify-around items-center">
            <div class="col-6"><q-img src="supervisor.png"/></div>
            <div class="col-6">
            <q-icon size="sm" name="call" class="text-green"/>
            <div style="font-size: 0.7rem">CC-Carlos Carlos</div>
            </div>
            </div>
            </div>
            </div>
            </div>
        <q-btn-dropdown @click="setAlertas" no-caps color="primary" label="Alertas" class="full-width q-ma-sm">
        </q-btn-dropdown>
        <div v-if="renderOption.alertas">
          <div class="row">
            <div class="col">
                  <div class="grid-alerts-container">
                  <div class="grid-item">JV</div>
                  <div class="grid-item">JV</div>
                  <div class="grid-item">PP</div>
                  <div class="grid-item">JV</div>
                  <div class="grid-item">CC</div>
                  <div class="grid-item">PP</div>
                  <div class="grid-item">CC</div>
                  <div class="grid-item">CC</div>
                  <div class="grid-item">PP</div>
                  <div class="grid-item">DD</div>
                  <div class="grid-item">DD</div>
                  <div class="grid-item">EE</div>
                  </div>
            </div>
          </div>
        </div>
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
        diagramacion: true,
        alertas: false,
        hombre: false,
        supervision: false
      }
    }
  },

  methods: {
    setDiagramacion () {
      this.renderOption.diagramacion = !this.renderOption.diagramacion
      this.renderOption.alertas = false
      this.renderOption.hombre = false
      this.renderOption.supervision = false
    },
    setAlertas () {
      this.renderOption.diagramacion = false
      this.renderOption.alertas = !this.renderOption.alertas
      this.renderOption.hombre = false
      this.renderOption.supervision = false
    },
    setHombre () {
      this.renderOption.diagramacion = false
      this.renderOption.alertas = false
      this.renderOption.hombre = !this.renderOption.hombre
      this.renderOption.supervision = false
    },
    setSupervision () {
      this.renderOption.diagramacion = false
      this.renderOption.alertas = false
      this.renderOption.hombre = false
      this.renderOption.supervision = false
    }
  }

}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    background-color: #d1b24b;
    padding:0px;
  }
  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 0px solid rgba(0, 0, 0, 0.8);
    padding: 5px;
    font-size: 9px;
    text-align: center;
  }
  .grid-date-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    background-color: #ffffff;
    padding:0px;
  }
  .grid-date-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 0px solid rgba(0, 0, 0, 0.8);
    padding: 5px;
    font-size: 9px;
    text-align: center;
  }

  .grid-range-container {
    display: grid;
    grid-template-columns: 1fr;
    background-color: #575757;
    padding:0px;
  }
  .grid-range-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 0px solid rgba(0, 0, 0, 0.8);
    padding: 5px;
    font-size: 9px;
    text-align: center;
  }

  .grid-alerts-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #e49662;
    padding:0px;
  }
  .grid-alerts-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 0px solid rgba(0, 0, 0, 0.8);
    padding: 5px;
    font-size: 9px;
    text-align: center;
  }
</style>
