import { Button, Text, Wrapper } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Text>Don't wait just seat and drive</Text>
      <Button to={'/catalog'}>Cars Catalog</Button>
    </Wrapper>
  );
}
