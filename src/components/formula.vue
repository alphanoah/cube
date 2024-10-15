<template>
  <section :class="'section collapse multi-collapse ' + showClass" :id="showID">
    <div class="grid flex">
      <div class="unit">
        <span :class="'cfop' + formulaData.abbr"></span>
        <div class="title">
          <span class="abbr mainColor">{{ formulaData.abbr }}</span>
          <p>{{ formulaData.name }}</p>
        </div>
        <div class="hide-btn d-print-none">
          <button class="btn btn-primary" type="button" @click="sort">
            <i class="bi bi-arrow-clockwise"></i>
          </button>
          <button class="btn btn-primary" type="button" data-bs-toggle="modal"
                  :data-bs-target="'#jsonViewer' + formulaData.abbr">
            查看公式
          </button>
        </div>
      </div>
      <div class="unit desc">
        <template v-for="value in formulaData.desc">
          {{ value }} <br/>
        </template>
      </div>
      <div class="unit desc">
        <div v-html="commonData.fingering"></div>
      </div>
    </div>
    <draggable
        class="grid flex"
        :id="showID + 'unit'"
        :component-data="{
          tag: 'div',
          name: !drag ? 'flip-list' : null
        }"
        v-model="formulaData.formula"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        item-key="key"
    >
      <template #item="{ element, index }">
        <div
            :class="
                element.fixed ? 'fa fa-anchor unit' : 'glyphicon glyphicon-pushpin unit'
              "
            @click="element.fixed = !element.fixed"
            aria-hidden="true"
            :data-index="index"
        >
          <div class="orderNum">{{ (element.id < 10 ? '0' : '') + element.id }}</div>
          <div class="exampleImg">
            <img :src="element.image" alt="">
          </div>
          <div class="codeText">
            <p v-html="element.html"></p>
            <div class="overlay d-print-none" data-bs-toggle="modal"
                 :data-bs-target="'#formulaViewer' + formulaData.abbr + element.id">
              <i class="bi bi-zoom-in"></i>
            </div>
          </div>

          <div class="hide-btn d-print-none">
            <button type="button" class="btn btn-clipboard" data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="Copy to clipboard">
              <i class="bi bi-clipboard"></i>
            </button>
            <button class="btn btn-outline-dark btn-zoom-in" type="button" @click="showGan(formulaData.abbr,element.id)">
              <i class="bi bi-zoom-in"></i>
            </button>
          </div>
          <formula-viewer :value="element" :abbr="formulaData.abbr"/>
        </div>
      </template>
    </draggable>

    <json-viewer :value="formulaData.formula" :abbr="formulaData.abbr"/>
  </section>
</template>

<script>
import draggable from "vuedraggable";
import {Tooltip} from 'bootstrap'
import ClipboardJS from "clipboard";
import JsonViewer from "./json-viewer.vue";
import FormulaViewer from "./formula-viewer.vue";

export default {
  name: "formula",
  props: ['showID', 'showClass', 'formulaData', 'commonData'],
  components: {
    FormulaViewer,
    JsonViewer,
    draggable
  },
  data() {
    return {
      drag: false
    };
  },
  methods: {
    sort() {
      this.formulaData.formula = this.formulaData.formula.sort((a, b) => a.id - b.id);
    },
    showGan(abbr,id){
      let cubePopType = "First2LayerSticker"
      if (abbr === "F2L"){
        cubePopType = "First2LayerSticker"
      }
      if (abbr === "OLL"){
        cubePopType = "orientationLayers"
      }
      if (abbr === "PLL"){
        cubePopType = "permutationLayers"
      }
      id -= 1
      window.open("http://localhost:63342/cube/gancubeDemo/2.html?cubePopType="+cubePopType+"&cubePopId="+id, '', 'width=1000,height=400,menubar=no,toolbar=no,status=no,scrollbars=yes')
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
    new ClipboardJS('.btn-clipboard', {
      text: function (trigger) {
        return trigger.parentElement.previousElementSibling.innerText
      }
    }).on('success', function (e) {
      // console.info('Action:', e.action);
      // console.info('Text:', e.text);
      // console.info('Trigger:', e.trigger);
      e.clearSelection();

      const n = e.trigger.querySelector(".bi"), o = Tooltip.getInstance(e.trigger);
      o.setContent({".tooltip-inner": "Copied!"}),
          e.trigger.addEventListener("hidden.bs.tooltip", () => {
            o.setContent({".tooltip-inner": "Copy to clipboard"})
          }, {once: !0}),
          n.classList.replace("bi-clipboard", "bi-check2"),
          e.clearSelection(),
          // Revert button label after 2 seconds
          setTimeout(() => {
            n.classList.replace("bi-check2", "bi-clipboard")
            // o.setContent({".tooltip-inner": "Copy to clipboard"})
          }, 2e3)
    }).on('error', function (e) {
      // console.error('Action:', e.action);
      // console.error('Trigger:', e.trigger);
      const s = /mac/i.test(navigator.userAgent) ? "\u2318" : "Ctrl-", o = `Press ${s}C to copy`,
          n = bootstrap.Tooltip.getInstance(e.trigger);
      n.setContent({".tooltip-inner": o})
    })
  }
}
</script>
