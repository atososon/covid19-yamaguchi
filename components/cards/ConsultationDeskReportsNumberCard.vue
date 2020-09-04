<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新型コロナ受診相談窓口相談件数（累計）')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-bar-chart-querents'"
      :chart-data="querentsGraph"
      :date="Querents.last_update"
      :show-button="false"
      :unit="$t('件.reports')"
      :url="'https://yamaguchi-opendata.jp/ckan/dataset/350001-covid19'"
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
//import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const Querents = this.$store.state.data.querents
    // 帰国者・接触者 電話相談センター 相談件数
    const querentsGraph = formatGraph(Querents.data)

    const data = {
      Querents,
      querentsGraph
    }
    return data
  }
}
</script>
