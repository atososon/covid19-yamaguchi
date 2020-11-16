<template>
  <div class="StaticInfo">
    <span>{{ text }}</span>
    <div v-if="btnText" class="StaticInfo-Button">
      <external-link :url="url">
        {{ btnText }}
      </external-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ExternalLink from '~/components/ExternalLink.vue'
export default Vue.extend({
  components: { ExternalLink },
  props: {
    url: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    }
  }
})
</script>
<style lang="scss">
.StaticInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: $white;
  border: 1px solid $gray-4;
  box-shadow: $shadow;
  border-radius: 4px;
  padding: 0.5em 1em;
  @include font-size(14);
  &-Button {
    flex: 1 0 auto;
    text-align: right;
    > a {
      text-decoration: none;
      color: $main-color !important;
      @include button-text('sm');
      &:hover {
        color: $white !important;
      }
    }
    @include lessThan($small) {
      margin-top: 4px;
    }
  }
}
</style>
