const SectionTitle = ({ title }) => {
  return (
    <div className="py-10 flex justify-center">
      <div className="section relative">
        <div className="section-devider -left-28"></div>
        <div className="title text-4xl font-courgette">{title}</div>
        <div className="section-devider -right-28"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
