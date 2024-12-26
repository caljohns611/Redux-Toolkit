import { createSlice } from '@reduxjs/toolkit';

const InitialState = {
    exercise: [],
};

const ExerciseSlice = createSlice({
    name: 'exercises',
    InitialState,
    reducers: {
        addExercise: (state, action) => {
            state.exercise.push(action.payload);
        },
        deletExercise: (state, action) => {
            state.exercise = state.exercise.filter(
                (exercise) => exercise.id !== action.payload
            );
        },
    },
});

export const  { addExercise, deletExercise } = ExerciseSlice.actions;
export default ExerciseSlice.reducer;