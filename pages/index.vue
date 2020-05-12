<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url="
        'https://www.pref.yamaguchi.lg.jp/cms/a11000/sodan/koronasoudan.html'
      "
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <confirmed-cases-number-card />
      <confirmed-cases-attributes-card />
      <tested-number-card />
      <confirmed-cases-details-card />
      <!--<telephone-advisory-reports-number-card />-->
      <consultation-desk-reports-number-card />
      <!--<metro-card />
      <agency-card-->
      <yamaguchi-map-card />
    </v-row>
  </div>
</template>

<i18n src="./index.i18n.json"></i18n>

<script>
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'

//import LastUpdate from '@/data/last_update.json'
import News from '@/data/news.json'
import PatientsCnt from '@/data/patients_cnt.json'
import Patients from '@/data/patients.json'
import Inspections from '@/data/inspections.json'
import Hospitalizations from '@/data/hospitalizations.json'
import Querents from '@/data/querents.json'
import MapUpdate from '@/data/map_update.json'

// import formatGraph from '@/utils/formatGraph'
// import formatTable from '@/utils/formatTable'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
// import MetroCard from '@/components/cards/MetroCard.vue'
// import AgencyCard from '@/components/cards/AgencyCard.vue'
import YamaguchiMapCard from '@/components/cards/YamaguchiMapCard.vue'

export default {
  components: {
    PageHeader,
    WhatsNew,
    StaticInfo,
    TestedNumberCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesDetailsCard,
    // TelephoneAdvisoryReportsNumberCard,
	ConsultationDeskReportsNumberCard,
	YamaguchiMapCard
    // MetroCard,
    // AgencyCard
  },
  data() {
    // 退院者グラフ
    // const dischargesGraph = formatGraph(Data.discharges_summary.data)
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )
	const LastUpdate = this.$store.state.data.lastupdate
	const News = this.$store.state.data.news

    const data = {
	  PatientsCnt,
	  Patients,
	  Inspections,
	  Hospitalizations,
	  Querents,
	  MapUpdate,
      // dischargesGraph,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('山口県内の最新感染動向'),
        date: LastUpdate
	  },
	  newsItems: News.newsItems
    }
    return data
  },
  head() {
    return {
      title: this.$t('山口県内の最新感染動向'),
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yamaguchi.stopcovid19.jp/"
            },
            "headline": "【山口県】山口県内の最新感染動向 | 新型コロナウイルス感染症対策サイト",
            "datePublished": "2020-03-22 00:00:00+0900",
            "dateModified": "2020-04-11 15:19:41+0000",
            "author": {
                "@type": "Person",
                "name": "【山口県】新型コロナウィルス感染症対策サイト運営管理人"
            },
            "description": "当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、山口県内外の有志が開設したものです。",
            "image": {
                "@type": "ImageObject",
                "url": "https://yamaguchi.stopcovid19.jp/logo.png",
                "width": 110,
                "height": 31
            },
            "publisher": {
                "@type": "Organization",
                "name": "【山口県】新型コロナウィルス感染症対策サイト運営管理人",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://yamaguchi.stopcovid19.jp/logo.png",
                    "width": 110,
                    "height": 31
                }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
