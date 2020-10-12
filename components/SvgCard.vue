<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:button>
      <!--
      <p class="Graph-Desc">
        {{
          $t(
            '（注）山口県から情報が提供されていないため、あくまでも参考値となります'
          )
        }}
      </p>
	    -->
    </template>
    <slot />
    <template v-slot:footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<!-- i18n src="./SvgCard.i18n.json"></i18n -->

<style lang="scss" scoped>
/*
.SvgCard {
  ::v-deep svg {
    width: 100%;
  }
  .Graph-Desc {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
    color: $gray-3;
  }
}
*/
.DataView {
  &Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script>
import DataView from '@/components/DataView.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default {
  components: { DataView, OpenDataLink },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      // required: false,
      default: ''
    }
  }
}
</script>
