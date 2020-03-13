import { mapState, mapActions } from 'vuex'

export const commonMixin = {
  computed: {
    ...mapState('common', {
      device: state => state.device,
      channel: state => state.channel
    })
  },
  methods: {
    ...mapActions('common', [
      'setDevice', 'setChannel'
    ])
  }
}
