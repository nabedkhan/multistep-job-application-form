import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CoverLetterState {
  content: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: CoverLetterState = {
  content: "",
  error: null,
  isLoading: false
};

export const generateCoverLetter = createAsyncThunk(
  "coverLetter/generate",
  async (content: string) => {
    const response = await fetch("/api/cover-letter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });

    if (!response.ok) {
      throw new Error("Failed to generate cover letter");
    }

    const data = await response.json();
    return data.result.content;
  }
);

const coverLetterSlice = createSlice({
  name: "coverLetter",
  initialState,
  reducers: {
    resetCoverLetter: (state) => {
      state.content = "";
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateCoverLetter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(generateCoverLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = action.payload;
      })
      .addCase(generateCoverLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  }
});

export const { resetCoverLetter } = coverLetterSlice.actions;
export default coverLetterSlice.reducer;
