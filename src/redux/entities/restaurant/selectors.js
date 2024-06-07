export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantReviewIds = (state, id) => selectRestaurantById(state, id)?.reviews;

export const selectRestaurantDishIds = (state, id) => selectRestaurantById(state, id)?.dish;

export const selectInitialRestaurant = (state) => selectRestaurantIds(state)[0];
