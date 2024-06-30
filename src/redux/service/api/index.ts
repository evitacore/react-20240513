import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_ENDPOINT } from "../../../constants/endpoints";
import { RestaurantType } from "../../../types/restaurant";
import { DishType } from "../../../types/dish";
import { ReviewFormData, ReviewType } from "../../../types/review";
import { UserType } from "../../../types/user";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["Review", "Restaurant"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_ENDPOINT }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => ({
        url: "/restaurants",
      }),
    }),
    getDishesByRestaurantId: builder.query<DishType[], string>({
      query: (restaurantId) => ({
        url: "/dishes",
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query<ReviewType[], string>({
      query: (restaurantId) => ({
        url: "/reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Review" as const, id })),
              { type: "Review" as const, id: "All" },
              { type: "Restaurant" as const, id: restaurantId },
            ]
          : [{ type: "Restaurant" as const, id: restaurantId }],
      // keepUnusedDataFor: 5
    }),
    getUsers: builder.query<UserType[], void>({
      query: () => ({
        url: "/users",
      }),
    }),
    getDishById: builder.query<DishType, string>({
      query: (dishId) => ({
        url: `/dish/${dishId}`,
      }),
    }),
    createReview: builder.mutation<
      ReviewType[],
      { restaurantId: string; newReview: ReviewFormData }
    >({
      query: ({ restaurantId, newReview }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: { ...newReview, userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99" },
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Restaurant" as const, id: restaurantId },
      ],
    }),
    updateReview: builder.mutation<ReviewType[], ReviewType>({
      query: (review) => ({
        url: `/review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result, _, review) => [
        { type: "Review" as const, id: review.id },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useGetDishByIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = apiService;
