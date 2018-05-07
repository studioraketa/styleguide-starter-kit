import { Title, Pattern, Layout } from 'raketa-styleguide';

import widgets from '../patterns';

const renderWidgets = (widgets) => Object.keys(widgets).map((w, idx) => {
  const widget = widgets[w];

  return (
    <Pattern key={w} title={widget.title} description="">
      {React.createElement(widget, Object.assign({containerSettings: {}}, widget.defaults))}
    </Pattern>
  );
});

export default () => (
  <Layout>
    <Title>Pattern Library</Title>

    {renderWidgets(widgets)}
  </Layout>
);
