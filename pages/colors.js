import { Title, Palette, Layout } from 'raketa-styleguide';

const COLORS = [
  { label: 'primary-darker' ,color: '#1C0C61' },
  { label: 'primary' ,color: '#311B92' },
  { label: 'primary-lighter' ,color: '#6251AD' },
  { label: 'success' ,color: '#3CB371' },
];

const MONO = [
  { label: 'true-black' ,color: '#000' },
  { label: 'black' ,color: '#19181F' },
  { label: 'darker-gray' ,color: '#56545E' },
  { label: 'dark-gray' ,color: '#73717B' },
  { label: 'gray' ,color: '#B2B1B6' },
  { label: 'light-gray' ,color: '#DBDADE' },
  { label: 'lighter-gray' ,color: '#F3F2F4' },
  { label: 'white' ,color: '#fefefe' },
  { label: 'true-white' ,color: '#fff' },
];

export default () => (
  <div>
    <Layout>
      <Title>Colors</Title>

      <Palette colors={COLORS} />
      <Palette colors={MONO} />
    </Layout>
  </div>
);
