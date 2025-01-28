const ErrorMessage = ({items}) => {
  return <>{items.length === 0 && <p>I am hungry</p>}</>;
};

export default ErrorMessage;
