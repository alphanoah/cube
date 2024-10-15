<template>
  <div class="hide-btn d-print-none">
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#introData"
            :aria-expanded="toggleIntro" @click="introClick" aria-controls="introData">{{ introBtn }}
    </button>
    <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#f2lData"
            :aria-expanded="toggleF2L" @click="f2lClick" aria-controls="f2lData">{{ f2lBtn }}
      <span class="badge text-bg-light">{{ totalF2L }}</span>
    </button>
    <button class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#ollData"
            :aria-expanded="toggleOLL" @click="ollClick" aria-controls="ollData">{{ ollBtn }}
      <span class="badge text-bg-light">{{ totalOLL }}</span>
    </button>
    <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#pllData"
            :aria-expanded="togglePLL" @click="pllClick" aria-controls="pllData">{{ pllBtn }}
      <span class="badge text-bg-light">{{ totalPLL }}</span>
    </button>
    <button class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
            aria-expanded="false" @click="allClick" aria-controls="introData f2lData ollData pllData">切换全部
    </button>
  </div>
</template>
<script>
export default {
  name: 'btn',
  props: ["toggleIntro", "toggleF2L", "toggleOLL", "togglePLL", "cubeData"],
  emits: ['update:toggleIntro', 'update:toggleF2L', 'update:toggleOLL', 'update:togglePLL'],
  computed: {
    introBtn() {
      return (this.toggleIntro ? '隐藏' : '显示') + '介绍模块'
    },
    ollBtn() {
      return (this.toggleOLL ? '隐藏' : '显示') + 'OLL'
    },
    f2lBtn() {
      return (this.toggleF2L ? '隐藏' : '显示') + 'F2L'
    },
    pllBtn() {
      return (this.togglePLL ? '隐藏' : '显示') + 'PLL'
    },

    totalF2L() {
      return this.cubeData.cfop.f2l.formula.length
    },
    totalOLL() {
      return this.cubeData.cfop.oll.formula.length
    },
    totalPLL() {
      return this.cubeData.cfop.pll.formula.length
    },
  },
  methods: {
    introClick: function (e) {
      this.$emit('update:toggleIntro', !this.toggleIntro)
      // console.log(e.currentTarget.getAttribute('aria-controls'))
    },
    f2lClick: function () {
      this.$emit('update:toggleF2L', !this.toggleF2L)
    },
    ollClick: function () {
      this.$emit('update:toggleOLL', !this.toggleOLL)
    },
    pllClick: function () {
      this.$emit('update:togglePLL', !this.togglePLL)
    },
    allClick: function () {
      this.$emit('update:toggleIntro', !this.toggleIntro)
      this.$emit('update:toggleF2L', !this.toggleF2L)
      this.$emit('update:toggleOLL', !this.toggleOLL)
      this.$emit('update:togglePLL', !this.togglePLL)
    }
  },
}
</script>