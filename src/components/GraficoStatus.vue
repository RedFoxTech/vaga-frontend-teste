<script>
import { Doughnut } from 'vue-chartjs'
export default {
  name: 'grafico-status',
  extends: Doughnut,
  props: {
    data: Object
  },
  mounted () {
    this.graficoStatus()
  },
  methods: {
    async graficoStatus () {
      this.renderChart({
        labels: Object.keys(this.data),
        datasets: [
          {
            backgroundColor: ['#FFFDCC', '#B2EBC5', '#C2DEFF', '#DBB2EB', '#FFCEC2'],
            data: Object.values(this.data)
          }
        ],
        responsive: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#doughnut-chart {
  width: 300px !important;
  height: 300px !important;
}
</style>
