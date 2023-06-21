import { createSlice } from "@reduxjs/toolkit";

const skeletonSlice = createSlice({
  name: "skeleton-slice",
  initialState: {
    skeletonDisplay: "block",
    contentDisplay: "hidden"
  },
  reducers: {
    skeleton: () => {
      return {
        skeletonDisplay: "block",
        contentDisplay: "hidden"
      }
    },
    content: () => {
      return {
        skeletonDisplay: "hidden",
        contentDisplay: ""
      }
    }
  }
});

const skeletonReducer = skeletonSlice.reducer;
const {skeleton, content} = skeletonSlice.actions;

export default skeletonReducer;
export {skeleton, content};