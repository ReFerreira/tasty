import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        const foodIndex = draft.findIndex((p) => p.id === action.food.id);

        if (foodIndex >= 0) {
          draft[foodIndex].amount += 1;
        } else {
          draft.push({
            ...action.food,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const foodIndex = draft.findIndex((p) => p.id === action.id);

        if (foodIndex >= 0) {
          draft.splice(foodIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, (draft) => {
        const foodIndex = draft.findIndex((p) => p.id === action.id);

        if (foodIndex >= 0) {
          draft[foodIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
