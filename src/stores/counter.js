import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: null,
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    increment(state) {
      state.count++
    }
  }
})

export default store

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0
//   }),
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })