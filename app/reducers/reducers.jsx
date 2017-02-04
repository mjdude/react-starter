export var exampleReducer = (state = 'example' , action) => {
  switch (action.type) {
    case 'EXAMPLE_STATE':
      return action.state;
    default:
      return state;
  }
}
