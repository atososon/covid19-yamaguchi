<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('PCR検査実施人数（累計）')"
      :title-id="'number-of-tested'"
      :chart-id="'time-stacked-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="Inspections.last_update"
      :show-button="false"
      :unit="$t('人')"
      :url="
        'https://yamaguchi-opendata.jp/ckan/dataset/350001-covid19'
      "
    >
      <template v-slot:description>
        <ul>
          <!--
          <li>
            {{ $t('（注）同一の対象者について複数の検体を調査する場合あり') }}
          </li>
          <li>
            {{ $t('（注）3月9日以前は検査実施件数か検査人数か不明') }}
          </li>
          -->
        </ul>
      </template>
    </time-bar-chart>

    <!-- 件.tested = 検査数 -->
  </v-col>
</template>

<script>
//import Inspections from '@/data/inspections.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
	const Inspections = this.$store.state.data.inspections
    // 検査数グラフ
    const inspectionsGraph = formatGraph(Inspections.data)

    const data = {
      Inspections,
      inspectionsGraph
    }
    return data
  }
}
</script>
