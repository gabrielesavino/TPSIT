const { createApp } = Vue;

//Product Card
const ProductCard = {
  props: {
    nomeProdotto: String,
    prezzo: Number
  },
  template: `
    <div class="card">
      <h3>{{ nomeProdotto }}</h3>
      <p>Prezzo: €{{ prezzo.toFixed(2) }}</p>
    </div>
  `
};

//Alert Box
const AlertBox = {
  props: {
    messaggio: String,
    tipo: {
      type: String,
      validator: (val) => ['success', 'error'].includes(val)
    }
  },
  template: `
    <div class="alert" :class="tipo">
      {{ messaggio }}
    </div>
  `
};

//App principale
createApp({
  components: {
    'product-card': ProductCard,
    'alert-box': AlertBox
  },
  data() {
    return {
      prodotti: [
        { nome: 'Laptop MSI', prezzo: 1299.99 },
        { nome: 'iPhone', prezzo: 999.50 },
        { nome: 'AirPods', prezzo: 89.90 },
        { nome: 'Monitor Samsung 4K', prezzo: 399.00 }
      ]
    };
  }
}).mount('#app');