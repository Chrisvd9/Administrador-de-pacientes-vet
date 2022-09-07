const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-500 text-white text-center p-3 mb-3">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
