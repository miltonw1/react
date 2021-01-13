<template>
  <q-page padding class="bg-white">
    <div class="q-pa-md bg-white">
      <div class="row">
         <div class="offset-lg-2 offset-md-3 offset-sm-2 col-lg-8 col-md-6 col-sm-8 col-12 bg-white">
        <div class="row items-center">
            <div class="col">
                <q-img src="guerin-logo.png" />
            </div>
            <div class="col text-center">
                <q-img src="no-avatar.png" />
                Nombre Supervisor
            </div>
        </div>
            <q-input rounded class="q-pa-sm" v-model="search" filled type="search" label="Buscar objetivos">
                <template v-slot:append>
                <q-icon name="search" />
                </template>
            </q-input>
              <div class="row">
              <q-separator color="dark" inset class="full-width" />
              </div>
              <div class="row justify-around items-center">
                <div class="col-2">
                <q-img src="supervisor.png"/>
                <div style="font-size: 0.7rem" class="text-center">Jose Vigilador</div>
                </div>
                <div class="col-6">
                    <div style="font-size: 0.9rem">Nombre del puesto</div>
                    <div style="font-size: 0.8">Cliente </div>
                    <div style="font-size: 0.7rem">Calle, numero y ciudad</div>
                    <div class="lastcontrol" style="font-size: 0.7rem">Ultimo control: 10/10/2020</div>
                </div>
                <div class="col-0.5"><div class="schedule">10:00</div><div class="schedule">18:00</div></div>
                <div class="col-1 text-green">
                 <q-icon size="sm" name="call"/>
                </div>
                <div class="col-1 text-primary">
                 <q-icon size="sm" name="reorder" />
                </div>
            </div>
            <div class="row">
              <q-separator color="dark" inset class="full-width" />
            </div>
            <div class="row justify-around items-center">
                <div class="col-2">
                <q-img src="supervisor.png"/>
                <div style="font-size: 0.7rem" class="text-center">Jose Vigilador</div>
                </div>
                <div class="col-6">
                    <div style="font-size: 0.9rem">Nombre del puesto</div>
                    <div style="font-size: 0.8">Cliente </div>
                    <div style="font-size: 0.7rem">Calle, numero y ciudad</div>
                    <div class="lastcontrol" style="font-size: 0.7rem">Ultimo control: 10/10/2020</div>
                </div>
                <div class="col-0.5"><div class="schedule">10:00</div><div class="schedule">18:00</div></div>
                <div class="col-1 text-green">
                 <q-icon size="sm" name="call"/>
                </div>
                <div class="col-1 text-primary">
                 <q-icon size="sm" name="reorder" />
                </div>
            </div>
            <div class="row">
              <q-separator color="dark" inset class="full-width" />
            </div>
            <div class="row justify-around items-center">
                <div class="col-2">
                <q-img src="supervisor.png"/>
                <div style="font-size: 0.7rem" class="text-center">Jose Vigilador</div>
                </div>
                <div class="col-6">
                    <div style="font-size: 0.9rem">Nombre del puesto</div>
                    <div style="font-size: 0.8">Cliente </div>
                    <div style="font-size: 0.7rem">Calle, numero y ciudad</div>
                    <div class="lastcontrol" style="font-size: 0.7rem">Ultimo control: 10/10/2020</div>
                </div>
                <div class="col-0.5"><div class="schedule">10:00</div><div class="schedule">18:00</div></div>
                <div class="col-1 text-green">
                 <q-icon size="sm" name="call"/>
                </div>
                <div class="col-1 text-primary">
                 <q-icon size="sm" name="reorder" />
                </div>
            </div>
          </div>
        </div>
    </div>
  </q-page>
</template>
