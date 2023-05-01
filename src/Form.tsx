import { FormEvent, useRef, useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });
  const handleSubmit = (evt: FormEvent) => {
    console.log(person);
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={person.name}
          className="form-control"
          onChange={(evt) => setPerson({ ...person, name: evt.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          value={person.age}
          className="form-control"
          onChange={(evt) => setPerson({ ...person, age: evt.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
