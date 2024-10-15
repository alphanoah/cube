<template>
  <div class="modal fade" :id="'jsonViewer' + abbr" tabindex="-1" :aria-labelledby="'jsonViewer' + abbr + 'Label'"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="'jsonViewer' + abbr + 'Label'">{{ abbr }}公式</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <pre>{{ valueString }}</pre>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const props = {
  abbr: {
    required: true,
    type: String
  },
  value: {
    required: true
  }
};
export default {
  name: "json-viewer",
  props,
  computed: {
    valueString() {
      const newArr = this.value.map(({id, text}) => {
        return {id, text};
      });
      return JSON.stringify(newArr, null, 2);
    }
  }
};
</script>
<style scoped>
pre {
  text-align: start;
}
</style>
