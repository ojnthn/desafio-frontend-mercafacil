import { shallowMount } from '@vue/test-utils';
import Card from "@/components/Card.vue";

import CharacterInterface from "@/schema/Character.interface";

describe('Card.vue', () => {
    const character: CharacterInterface = {
      name: "Rick",
      image: "",
      status: "Alive",
      species: "Human",
      location: {
        name: "Earth"
      }
    }
    const wrapper = shallowMount(Card, {
      props: { character }
    })

    // Monta uma instância e inspeciona a saída de renderização
    it('renders the correct card content', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
})