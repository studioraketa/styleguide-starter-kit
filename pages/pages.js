import { Title, Layout } from 'raketa-styleguide';

export default () => (
  <div>
    <Layout>
      <Title>Pages</Title>

      <div className="container">
        <p>Sample pages:</p>
        <ul>
          <li><a href="/home">Homepage</a></li>
        </ul>
      </div>
    </Layout>
  </div>
);
