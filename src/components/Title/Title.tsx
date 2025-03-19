interface TitleProps {
  username: string;
}

export const Title = ({ username }: TitleProps) => {
  return <h3 className="fw-bold mb-3">Todo List: {username}</h3>;
};
