import './TittleSection.css'

const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="title-section">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default TitleSection;