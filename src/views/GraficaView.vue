<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card border border-dark">
        <div class="card-header bg-dark"></div>
        <div class="card-body">
          <Bar :chart-options="chartOptions" :chart-data="chartData"></Bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    }
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [{
          label: 'Productos',
          data: [],
          backgroundColor: ['#0dcaf0', '#6610f2', '#fd7e14', '#ffc107']
        }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost/api-products-main/');
      const productsByCategory = {}; // Objeto para almacenar la cantidad de productos por categoría

      // Iterar sobre los datos de la respuesta y agrupar los productos por categoría
      response.data.forEach(row => {
        if (!productsByCategory[row.category]) {
          productsByCategory[row.category] = 0;
        }
        productsByCategory[row.category] += 1;
      });

      // Llenar los datos de la gráfica con las categorías y la cantidad de productos por categoría
      for (const category in productsByCategory) {
        if (Object.hasOwnProperty.call(productsByCategory, category)) {
          this.chartData.labels.push(category);
          this.chartData.datasets[0].data.push(productsByCategory[category]);
        }
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
}
</script>
