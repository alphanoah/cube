<template>
  <div class="modal fade" :id="'formulaViewer' + abbr + value.id" tabindex="-1"
       :aria-labelledby="'formulaViewer' + abbr + value.id + 'Label'"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="'formulaViewer' + abbr + value.id + 'Label'">{{ abbr }} -
            {{ (value.id < 10 ? '0' : '') + value.id }}公式</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="formula-detail">
            <div class="f-img">
              <img :src="`src/assets/images/${ value.image }`" alt="">
            </div>
            <span class="f-code" v-html="value.html"></span>
          </div>
        </div>
        <!--        <div class="modal-footer">-->
        <!--          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
const props = {
  abbr: {
    required: true,
    // type: String
  },
  value: {
    required: true
  }
};
export default {
  name: "formula-viewer",
  props,
  computed: {
    // valueString() {
    //   return this.value
    //   // const newArr = this.value.map(({id, text}) => {
    //   //   return {id, text};
    //   // });
    //   // return JSON.stringify(newArr, null, 2);
    // }
  }
};
</script>
<style scoped>
pre {
  text-align: start;
}
</style>
