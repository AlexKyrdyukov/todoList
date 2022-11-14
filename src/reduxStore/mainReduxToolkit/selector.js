import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = createSelector(
  ({ todos }) => todos,
  ({ filter }) => filter,
  (todos, filter) => {
    selectFilter.counter = 0;
    return todos.filter((item) => {
      if (item.completed) {
        selectFilter.counter++;
      }
      if (filter === "completed") {
        return item.completed;
      }
      if (filter === "active") {
        return !item.completed;
      }
      return item;
    });
  }
);
