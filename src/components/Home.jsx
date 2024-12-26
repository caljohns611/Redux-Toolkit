import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from '../Slices/ExerciseSlice';
import { Button, ListGroup, Form } from 'react-bootstrap';

const Exercises = () => {
  const [exerciseName, setExerciseName] = useState('');
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (exerciseName.trim()) {
      const newExercise = {
        id: Date.now(),
        name: exerciseName,
      };
      dispatch(addExercise(newExercise));
      setExerciseName('');
    }
  };

  const handleDeleteExercise = (id) => {
    dispatch(deleteExercise(id));
  };

  return (
    <div>
      <h2>Exercise Log</h2>
      <Form onSubmit={handleAddExercise}>
        <Form.Group controlId="exerciseName">
          <Form.Label>Exercise Name</Form.Label>
          <Form.Control
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            placeholder="Enter exercise name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Exercise
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {exercises.map((exercise) => (
          <ListGroup.Item key={exercise.id} className="d-flex justify-content-between align-items-center">
            {exercise.name}
            <Button variant="danger" onClick={() => handleDeleteExercise(exercise.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Exercises;