import Container from 'react-bootstrap/Container';

export const Main = () => {
  return (
    <Container
      className="
        app-container
        vh-100
        w-100
        d-flex
        align-items-center
        justify-content-center
        flex-column
      "
    >
      <h1 className="bold">Todo App</h1>
    </Container>
  );
};
