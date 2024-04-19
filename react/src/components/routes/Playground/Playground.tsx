import WithoutToken from './WithoutToken';
import WithToken from './WithToken';

const Playground: React.FC = () => {
  return (
    <>
      <h1>Playground</h1>

      <p>What happens when making an API request without/with a token?</p>

      <h2>Response without token</h2>
      <WithoutToken />

      <h2>Response with token</h2>
      <WithToken />
    </>
  );
};

export default Playground;
