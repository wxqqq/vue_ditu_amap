export const incrementCounter = function ({dispatch, state}) {
	console.log(state.count)
	dispatch('INCREMENT', 1)
}
