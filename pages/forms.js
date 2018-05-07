import { Title, Pattern, Layout } from 'raketa-styleguide';

export default () => (
  <div>
    <Layout>
      <Title>Form Elements</Title>

      <Pattern title="Buttons" description="">
        <div className="container">
          <p>Regular size:</p>

          <button type="button" className="btn-primary">
            Primary
          </button>
          <button type="button" className="btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn-text">
            Text button
          </button>
        </div>

        <br />

        <div className="container">
          <p>Large size:</p>

          <button type="button" className="btn-primary lg">
            Primary
          </button>
          <button type="button" className="btn-secondary lg">
            Secondary
          </button>
          <button type="button" className="btn-text lg">
            Text button
          </button>
        </div>
      </Pattern>

      <Pattern title="Elements" description="">
        <div className="container">
          <div className="form-group">
            <label className="form-label">Your name</label>
            <input
              type="text"
              placeholder="First, last name"
              className="form-control"
            />
          </div>

          <div className="form-group has-error">
            <label className="form-label">Work e-mail</label>
            <input
              type="email"
              placeholder="E-mail..."
              className="form-control"
            />
            <span className="error-text">Please fill-in your email</span>
          </div>

          <div className="form-group">
            <label className="form-label">Country</label>
            <select className="form-control">
              <option value="">Please select...</option>
            </select>
          </div>

          <div className="form-group checkbox">
            <label>
              <input type="checkbox" /> I agree to the{' '}
              <a href="#">terms and conditions</a>.
            </label>
          </div>

          <div className="form-group radio-group">
            <label>
              <input type="radio" name="size" /> S size
            </label>
            <label>
              <input type="radio" name="size" /> M size
            </label>
            <label>
              <input type="radio" name="size" /> L size
            </label>
          </div>
        </div>
      </Pattern>
    </Layout>
  </div>
);
