import { createSlice } from "@reduxjs/toolkit";

// 초기 값
const initialState = {
  iteminfo: "",
  // artistid: {},
};

// 스토어 이름
export const infoContainerStore = createSlice({
  name: "InformationContainer",
  initialState,
  reducers: {
    // 값을 전달할때는 action의 payload로 가져오면 됨.

    saveItemInfo: (state, action) => {
      state.iteminfo = action.payload;
    },
  },
});

// 저장하고자 하는 액션별 props
export const { saveItemInfo } = infoContainerStore.actions;
// export const { saveItemInfo,saveItemInfo } = infoContainerStore.actions;

export default infoContainerStore.reducer;
