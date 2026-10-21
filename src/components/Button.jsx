const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      <img src="/assets/contact.svg" alt="Play Icon" className="w-5 h-5" />
      {name}
    </button>
  );
};

export default Button;
