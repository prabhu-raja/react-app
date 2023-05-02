import { categories } from '../../App';

const ExpenseForm = () => {
  return (
    <>
      {/* Description */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>

      {/* Amount */}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="number" id="amount" className="form-control" />
      </div>

      {/* Category */}
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary">Submit</button>
    </>
  );
};

export default ExpenseForm;
