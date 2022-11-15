import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = createSelector(
  ({ todos }) => todos,
  ({ filter }) => filter,
  (todos, filter) => {
    let counter = 0;

    return {
      array: todos.filter((item) => {
        if (item.completed) {
          counter++;
        }
        if (filter === "completed") {
          return item.completed;
        }
        if (filter === "active") {
          return !item.completed;
        }
        return item;
      }),
      counter,
    };
  }
);
