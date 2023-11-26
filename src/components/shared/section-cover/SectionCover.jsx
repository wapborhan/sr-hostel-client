import SectionTitle from "../section-title/SectionTitle";

const SectionCover = ({ title }) => {
  return (
    <div className="menu-bg bg-fixed bg-no-repeat bg-cover text-white pt-36">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={title} />
      </div>
    </div>
  );
};

export default SectionCover;
