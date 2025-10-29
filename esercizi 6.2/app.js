const { createApp } = Vue;

//Modale con evento chiudi
const ModalDialog = {
  template: `
    <div class="overlay">
      <div class="modal">
        <h3>Questa è una modale!</h3>
        <p>Puoi chiuderla cliccando il pulsante qui sotto.</p>
        <button @click="$emit('chiudi')">Chiudi</button>
      </div>
    </div>
  `
};

//Valutazione a stelle con evento imposta-valutazione
const StarRating = {
  data() {
    return {
      rating: 0
    };
  },
  methods: {
    impostaValutazione(val) {
      this.rating = val;
      this.$emit('imposta-valutazione', val);
    }
  },
  template: `
    <div class="stars">
      <span
        v-for="n in 5"
        :key="n"
        class="star"
        :class="{ active: n <= rating }"
        @click="impostaValutazione(n)"
      >
        ★
      </span>
    </div>
  `
};

//App principale
createApp({
  components: {
    'modal-dialog': ModalDialog,
    'star-rating': StarRating
  },
  data() {
    return {
      modaleAperta: false,
      valutazione: 0
    };
  },
  methods: {
    aggiornaValutazione(val) {
      this.valutazione = val;
    }
  }
}).mount('#app');
