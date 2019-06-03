<template>
  <div class="satisfaction-slider">
    <vue-slider
      v-model="satisfaction"
      :data="options"
      :process="process1"
      :dot-size="30"
    >
      <template v-slot:tooltip>
        <SliderInputTooltip :satisfaction-level="satisfaction" />
      </template>
    </vue-slider>
    <p>{{ satisfaction }}</p>
  </div>
</template>

<script>
import SliderInputTooltip from '@/components/SliderInputTooltip'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    components: {
        VueSlider,
        SliderInputTooltip
    },
    data () {
        return {
            satisfaction: 'neutral',
            options: ['unhappy', 'fairly-unhappy', 'neutral', 'fairly-happy', 'happy'],
            process1: dotsPos => [[50, dotsPos[0]]]
        }
    }
}
</script>

<style lang="scss">
.satisfaction-slider {
    padding-top: 50px;
    .tooltip-smiley {
        padding: 5px;
        height: 50px;
        path {
           fill: #B87BF4;
           stroke: #B87BF4;
           stroke-width: 0;
        }
    }
    .vue-slider-process {
        background: linear-gradient(0.25turn, #4ADDE8, #25D9FA);
        // background-color: linear-gradient(0.25turn, #4ADDE8, #25D9FA);
    }
}
</style>
