/**
 * @typedef {import("@prismicio/client").Content.IframeSlice} IframeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IframeSlice>} IframeProps
 * @param {IframeProps}
 */
const Iframe = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for iframe (variation: {slice.variation}) Slices
    </section>
  );
};

export default Iframe;
