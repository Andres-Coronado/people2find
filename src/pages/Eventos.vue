<template>
  <q-page>
    |
    <h5
      class="p-font q-mt-none q-mb-lg"
      style="font-family: Texturina;
 font-size: 42px; color: white; text-align: center;"
    >
      Eventos Sociales
    </h5>
    <div
      class="q-pl-lg q-ml-md  row  items-start q-gutter-md "
      style="font-family:;
"
    >
      <q-card class="my-card" flat bordered>
        <q-img src="fake/image (4).jpeg" />
        <q-card-section>
          <div class="text-overline text-gray-9">Oscar Vargas</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Mesero</div>
          <div class="text-caption text-gray-9">
He trabajado durante mucho tiempo en eventos y tengo la experecia y personal para cualquir tipo de eventos.
            <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-gray-9 q-ml-sm">4</span>
            </div>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="Share" />
          <q-btn flat color="primary" label="Book" />

          <q-space />

        </q-card-actions>
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-img src="fake/image.jpeg" />
        <q-card-section>
          <div class="text-overline text-gray-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-gray-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-gray-9 q-ml-sm">4.2 </span>
            </div>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="email" />
          <q-btn flat color="primary" label="Book" />

        </q-card-actions>
      </q-card>


            <q-card class="my-card" flat bordered>
        <q-img src="fake/image (3).jpeg" />
        <q-card-section>
          <div class="text-overline text-gray-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-gray-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-gray-9 q-ml-sm">4.2 </span>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <span class=" text-gray-9 ">Contacta me:</span>
          <br>
          <label for="">Email: </label>
          <span class=" text-gray-9 q-ml-sm">Arturo@gmail.com </span>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      number: "",

      stars: 4,
      expanded: false,

      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  },
  mounted: {
    randomnumber() {
      this.number = Math.floor(Math.random() * 550);
    },
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Texturina:wght@200&display=swap");

body{
  background: #1d3557
}
.p-font {
  font-family: "Rubik Mono One", sans-serif;
  color: rgb(10, 12, 10);
}
.myBg2 {
  background: dimgray;
}
.mySeccion {
  overflow: hidden;
}

.img {
  width: 17.49rem;
  height: 16rem;
}

.bar {
  font-size: 1rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.945);
  width: 92%;
  height: 2rem;
  border-radius: 2rem;
  background: rgb(29, 36, 30);
  background: linear-gradient(
    90deg,
    rgb(212, 212, 212) 11%,
    rgba(55, 167, 66, 0.6082808123249299) 50%,
    rgb(212, 212, 212) 100%
  );
}

.myCennter {
  text-align: center;
}
</style>

<style>
.my-card {
  background: rgb(29, 36, 30);
  background: linear-gradient(
    10deg,
    rgb(212, 212, 212) 11%,
    rgba(55, 167, 66, 0.6082808123249299) 50%,
    rgb(212, 212, 212) 100%
  );
  width: 100%;
  max-width: 280px;
}
</style>
