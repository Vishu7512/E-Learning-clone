// AdminPanel.js

import React, { useState } from 'react';
import './Admin.css';

const AdminPanel = () => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    instructor: '',
  });

  const [courses, setCourses] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCourses([...courses, course]);
    setCourse({
      title: '',
      description: '',
      instructor: '',
    });
  };

  return (
    <div>
      <h2>Add Courses</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={course.title}
            onChange={handleInputChange}
            placeholder="Enter course title"
            required
          />
        </div>
        <div>
        
          <label htmlFor="description"> Description: </label>
          <input
            id="description"
            name="description"
            value={course.description}
            onChange={handleInputChange}
            placeholder="course description"
            required
          />
        </div>
        <div>
          <label htmlFor="instructor">Instructor:</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={course.instructor}
            onChange={handleInputChange}
            placeholder="Enter instructor's name"
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
      <hr />
      <h2>Added Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.title}</strong> - {course.instructor}
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
