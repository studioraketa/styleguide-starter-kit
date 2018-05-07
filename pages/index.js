import { Title, Pattern, Layout } from 'raketa-styleguide';

export default () => (
  <Layout>
    <div className="spacing-both">
      <div className="container">
        <h2>What is a design system?</h2>
        <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.</p>
        <br/>

        <h2>Fundamentals</h2>
        <ul>
          <li><a href="/typography">Typography</a></li>
          <li><a href="/grid">Grid</a></li>
          <li><a href="/colors">Colors</a></li>
          <li><a href="/forms">Form elements</a></li>
        </ul>
        <br/>

        <h2>Pattern Library</h2>
        <ul>
          <li><a href="/components">Component library</a></li>
          <li><a href="/pages">Page compositions</a></li>
        </ul>
        <br/>
      </div>
    </div>
  </Layout>
);
