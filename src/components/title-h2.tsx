type Props = {
  title: string;
};

const TitleH2 = ({ title }: Props) => {
  return <h2 className="title-h2">{title}</h2>;
};

export default TitleH2;
