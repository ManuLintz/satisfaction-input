import { mount } from '@vue/test-utils'
import SatisfactionForm from '@/components/SatisfactionForm.vue'
import SatisfactionInput from '@/components/SatisfactionInput.vue'
import VueSlider from 'vue-slider-component'

const wrapper = mount(SatisfactionForm, {
    stubs: {
        UnhappySmiley: true,
        FairlyUnhappySmiley: true,
        NeutralSmiley: true,
        HappySmiley: true,
        FairlyHappySmiley: true
    }
})

describe('SatisfactionForm.vue', () => {
    it('component mounts correctly', () => {
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it('when slider is untouched, emitted value should be "neutral"', () => {
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted().submit[0][0]).toBe('neutral')
    })

    it('when vue-slider is set to "happy", emitted value should be "happy"', () => {
        wrapper.find(SatisfactionInput).find(VueSlider).vm.$emit('change', 'happy')
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted().submit[1][0]).toBe('happy')
    })
})
