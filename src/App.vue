<script>
import Intro from "./components/intro.vue";
import Formula from "./components/formula.vue";
import cubeData from './static/cfop.json'
import Btn from "./components/btn.vue";

export default {
  components: {Btn, Formula, Intro},
  data() {
    return {
      toggleIntro: true,
      toggleF2L: false,
      toggleOLL: false,
      togglePLL: false,
      cubeData: cubeData,
    }
  },
  computed: {
    introShow() {
      return this.toggleIntro ? 'show' : ''
    },
    ollShow() {
      return this.toggleOLL ? 'show' : ''
    },
    f2lShow() {
      return this.toggleF2L ? 'show' : ''
    },
    pllShow() {
      return this.togglePLL ? 'show' : ''
    },
  },
  /*
    mainColor2 蓝字：左食指
    mainColor3 红字：右拇指
    mainColor 橙字：无名指
    未找到公式颜色规律，暂时注释掉
  * */
  /*methods: {
    addPLLColors() {
      for (let pllKey in this.cubeData.cfop.formula.pll) {
        let tmpText = this.cubeData.cfop.formula.pll[pllKey]['text']
        tmpText = tmpText.replace(/D2|D|D’|M|M’2|M’|U/g, '<span class="mainColor">$&</span>')
        tmpText = tmpText.replace(/F’|U’|u’/g, '<span class="mainColor2">$&</span>')
        tmpText = tmpText.replace(/F’|F’UF|U’|f’|u’/g, '<span class="mainColor3">$&</span>')
        this.cubeData.cfop.formula.pll[pllKey]['text'] = tmpText
        // console.log("obj." + pllKey + " = " + this.cubeData.cfop.formula.pll[pllKey]['text']);
      }
    }
  },
  created() {
    this.addPLLColors();
  },*/
  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    // `this` refers to the component instance.
  }
}
</script>

<template>
  <btn v-model:toggle-intro="toggleIntro" v-model:toggle-f2-l="toggleF2L" v-model:toggle-o-l-l="toggleOLL"
       v-model:toggle-p-l-l="togglePLL" :cube-data="cubeData"/>
  <div class="cfopModule">
    <intro show-i-d="introData" :show-class="introShow" :common-data="cubeData.cfop.common"/>
    <formula show-i-d="f2lData" :show-class="f2lShow" :common-data="cubeData.cfop.common"
             :formula-data="this.cubeData.cfop.f2l"/>
    <formula show-i-d="ollData" :show-class="ollShow" :common-data="cubeData.cfop.common"
             :formula-data="this.cubeData.cfop.oll"/>
    <formula show-i-d="pllData" :show-class="pllShow" :common-data="cubeData.cfop.common"
             :formula-data="this.cubeData.cfop.pll"/>
  </div>

  <!-- TOP按钮 -->
  <div id="back-to-top" class="back-to-top"></div>

</template>