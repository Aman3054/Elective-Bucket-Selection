const ElectiveCard = ({ title, description, salaryInfo, onSelect }) => {
  return (
    <div className="card elective-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-body-text">{description}</p>
      <p className="card-salary">{salaryInfo}</p>
      <button type="button" className="btn-primary w-100" onClick={onSelect}>
        Select
      </button>
    </div>
  );
};

export default ElectiveCard;

