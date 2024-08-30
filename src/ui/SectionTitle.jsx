const SectionTitle = ({ title, titleNo }) => {
  return (
    <h2 className="text-2xl font-semibold hidden md:inline-flex items-center">
      <span className="text-base md:text-lg text-designColor mr-2">
        {titleNo}.
      </span>{" "}
      {title}
      <span className="md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
