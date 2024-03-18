/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className=" h-screen w-full max-w-4xl mx-auto p-2 border border-red-500">{children}</div>
  );
};

export default Container;
