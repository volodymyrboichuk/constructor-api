
export const materialReducer = (state, {type, ...payload}) => {
    console.log(state)
    switch (type) {
        case 'INIT_CONTENT':
          return [...payload.data];
        default:
          throw new Error();
      }
}