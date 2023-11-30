const SectionTitle = ({ title }) => {
  return (
    <div className="py-10 flex justify-center">
      <div className="section relative">
        <div className="section-devider lg:-left-28 md:left-3 left-1/3  lg:top-0 md:top-0 -top-5"></div>
        <div className="title lg:text-4xl text-2xl font-courgette">{title}</div>
        <div className="section-devider lg:-right-28 right-1/3 top-12"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
