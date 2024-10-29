type ButtonProps = {
  num: string;
};

const Button = ({ num }: ButtonProps) => {
  return <button>{num}</button>;
};

export default Button;
