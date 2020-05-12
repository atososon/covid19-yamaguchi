<template>
  <v-col cols="12" md="6" class="DataCard">
    <svg-card
		:title="$t('市区町村別陽性患者の累計')"
		:title-id="'map-in-yamaguchi'"
		:date=MapUpdate
		:url="'https://yamaguchi-opendata.jp/ckan/dataset/350001-covid19'"
	>
		<p class="Graph-Desc">
			{{ $t('以下のデータは、「国土交通省　国土数値情報（行政区域）」をもとに本サイトが作成') }}
		</p>
		<div class="mapImage">
			<img
				:src="$t('https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/yamaguchi-map.png')"
				alt=""
			/>
		</div>
    </svg-card>
  </v-col>
</template>

<script>
import SvgCard from '@/components/SvgCard.vue'

export default {
	components: {
		SvgCard
	},
	data() {
		const MapUpdate = this.$store.state.data.mapupdate

		const data = {
			MapUpdate
		}

		return data
	}
}
</script>
<style lang="scss">
.mapImage {
  img {
    width: 96%;
    @include lessThan(959) {
      width: 100%;
    }
  }
}
.Graph-Desc {
  width: 100%;
  margin: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>