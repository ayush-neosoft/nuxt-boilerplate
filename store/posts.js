export const state = () => ({
  list: []
})

export const mutations = {
  add (state, payload) {
    state.list.unshift({
      content: payload.content,
      author: payload.author,
      timestamp: new Date()
    })
  },

  remove (state, { post }) {
    state.list.splice(state.list.indexOf(post), 1)
  },



}