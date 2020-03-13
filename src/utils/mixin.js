import { mapState, mapActions } from 'vuex'

export const commonMixin =  {
  computed: {
    ...mapState('common', {
      device: state => state.device
    })
  },
  methods: {
    ...mapActions('common', [
      'setDevice'
    ])
  }
}