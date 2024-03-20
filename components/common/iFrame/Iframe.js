const Iframe = ({ data }) => {
  const { iframe, max_width, height } = data.primary;
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: max_width + "px", height: height + "px" }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    />
  );
};

export default Iframe;
