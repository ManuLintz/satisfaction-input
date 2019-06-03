<template>
  <div class="tooltip">
    <UnhappySmiley
      v-if="satisfactionLevel === 'unhappy'"
      key="unhappy"
      class="tooltip-smiley"
    />
    <FairlyUnhappySmiley
      v-if="satisfactionLevel === 'fairly-unhappy'"
      key="fairly-unhappy"
      class="tooltip-smiley"
    />
    <NeutralSmiley
      v-if="satisfactionLevel === 'neutral'"
      key="neutral"
      class="tooltip-smiley"
    />
    <HappySmiley
      v-if="satisfactionLevel === 'happy'"
      key="happy"
      class="tooltip-smiley"
    />
    <FairlyHappySmiley
      v-if="satisfactionLevel === 'fairly-happy'"
      key="fairly-happy"
      class="tooltip-smiley"
    />
  </div>
</template>

<script>
import UnhappySmiley from '@/assets/svg/smiley-unhappy.svg'
import FairlyUnhappySmiley from '@/assets/svg/smiley-fairly-unhappy.svg'
import NeutralSmiley from '@/assets/svg/smiley-neutral.svg'
import HappySmiley from '@/assets/svg/smiley-happy.svg'
import FairlyHappySmiley from '@/assets/svg/smiley-fairly-happy.svg'

export default {
    name: 'SatisfactionInputTooltip',
    components: {
        UnhappySmiley,
        FairlyUnhappySmiley,
        NeutralSmiley,
        HappySmiley,
        FairlyHappySmiley
    },
    props: {
        satisfactionLevel: {
            type: String,
            required: true
        }
    }
}
</script>
