type Props = {
  title: string;
  className?: string;
  onClick?: any;
};

const ButtonMain = (props: Props) => {
  return (
    <button onClick={props.onClick} className={`btn-main ${props.className}`}>
      {props.title}
    </button>
  );
};

export default ButtonMain;
