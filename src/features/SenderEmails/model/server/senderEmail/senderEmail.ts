// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ThunkConfig } from "app/providers/StorProvider/config/StateSchema";


// interface LoginByUsernameProps {
//   name: string;
//   email: string;
//   phone?: string;
//   company?: string;
//   project?: string;
// }

// export const loginByUsername = createAsyncThunk<
//   string,
//   LoginByUsernameProps,
//   ThunkConfig<string>
// >(
//   "login/loginByUsername",
//   async (authData, { dispatch, extra, rejectWithValue }) => {
//     try {
//       const response = await extra.api.post<string>("/login", authData);
//       if (!response.data) {
//         throw new Error();
//       }
//       // dispatch(userActions.setAuthData(response.data));

//       // extra?.navigate?.("/about")

//       return response.data;
//     } catch (e) {
//       console.log(e);
//       return rejectWithValue("error");
//     }
//   },
// );