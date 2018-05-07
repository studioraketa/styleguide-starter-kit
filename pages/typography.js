import { Title, Layout, Highlight } from 'raketa-styleguide';

export default () => (
  <div>
    <Layout>
      <Title>Typography</Title>

      <div className="container">
        <h1>
          Lorem ipsum dolor sit nostrum necessitatibus ipsum dolor
          <Highlight>H1</Highlight>
        </h1>
        <p>
          Lorem ipsum dolor sit amet <a href="#">this is a link</a> elit.
          Cupiditate nostrum necessitatibus nisi deserunt illum similique, nam
          eius perspiciatis enim aliquam doloremque accusantium dolorem quos omnis
          quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus
          consequatur nobis explicabo, earum deleniti reiciendis pariatur
          perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium
          molestiae deserunt rem sunt. Eius, nihil atque nobis obcaecati adipisci
          eligendi, inventore. Cupiditate magnam adipisci inventore eius repellat.
          Non odit, laudantium fugit, ea aut inventore illum amet aspernatur autem
          saepe, excepturi cupiditate dicta consequuntur quisquam at quod cum
          nesciunt! Nulla eveniet saepe aperiam doloremque esse quam omnis, magnam
          repellendus.
        </p>

        <h2>
          Lorem ipsum dolor sit amet nostrum necessitatibus nam eius enim sit amet
          consectetur <Highlight>H2</Highlight>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          nostrum necessitatibus nisi deserunt illum similique, nam eius
          perspiciatis enim aliquam doloremque accusantium dolorem quos omnis
          quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus
          consequatur nobis explicabo, earum deleniti reiciendis pariatur
          perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium
          molestiae deserunt rem sunt. Eius, nihil atque nobis obcaecati adipisci
          eligendi, inventore. Cupiditate magnam adipisci inventore eius repellat.
          Non odit, laudantium fugit, ea aut inventore illum amet aspernatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          nostrum necessitatibus nisi deserunt illum similique, nam eius
          perspiciatis enim aliquam doloremque accusantium dolorem.
        </p>

        <h3>
          Lorem ipsum dolor sit <br /> orem ipsum dolor sit amet
          <Highlight>H3</Highlight>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          nostrum necessitatibus nisi deserunt illum similique, nam eius
          perspiciatis enim aliquam doloremque accusantium dolorem quos omnis
          quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus
          consequatur nobis explicabo, earum deleniti reiciendis pariatur
          perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium
          molestiae deserunt rem sunt.
        </p>

        <h4>
          Lorem ipsum dolor sit amet orem <br /> consectetur adipisicing elit
          <Highlight>H4</Highlight>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          nostrum necessitatibus nisi deserunt illum similique, nam eius
          perspiciatis enim aliquam doloremque accusantium dolorem quos omnis
          quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus
          consequatur nobis explicabo, earum deleniti reiciendis pariatur
          perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium
          molestiae deserunt rem sunt.
        </p>

        <h5>
          Lorem ipsum dolor sit amet <br /> dolor sit amet consectetur adipisicing
          elit <Highlight>H5</Highlight>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          nostrum necessitatibus nisi deserunt illum similique, nam eius
          perspiciatis enim aliquam doloremque accusantium dolorem quos omnis
          quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus
          consequatur nobis explicabo, earum deleniti reiciendis pariatur
          perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium
          molestiae deserunt rem sunt.
        </p>

        <h6>
          Lorem ipsum dolor sit amet lorem ipsum dolor <br /> sit amet consectetur
          adipisicing elit <Highlight>H6</Highlight>
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          nostrum necessitatibus nisi deserunt illum similique, nam eius
          perspiciatis enim aliquam doloremque accusantium dolorem quos omnis
          quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus
          consequatur nobis explicabo, earum deleniti reiciendis pariatur
          perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium
          molestiae deserunt rem sunt.
        </p>
      </div>

      <div className="container">
        <h3>Unordered List</h3>

        <ul>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
        </ul>

        <h3>Ordered List</h3>
        <ol>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
          <li>Lorem ipsum dolor sit amet similique</li>
        </ol>

        <h3>Blockquote</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          voluptates, rerum nisi est iste ratione, eveniet nesciunt, error vitae
          dicta aperiam nostrum sequi aspernatur, tempore harum commodi quod at.
          Ex.
        </p>
        <blockquote>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            debitis, est! Asperiores ducimus animi impedit deleniti fuga amet
            iusto eveniet."
          </p>
          <p>- Lorem ipsum dolor sit amet</p>
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          voluptates, rerum nisi est iste ratione, eveniet nesciunt, error vitae
          dicta aperiam nostrum sequi aspernatur, tempore harum commodi quod at.
          Ex.
        </p>

        <h3>Tables</h3>
        <table>
          <thead>
            <tr>
              <th>Header content 1</th>
              <th>Header content 2</th>
              <th>Header content 3</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Body content 1</td>
              <td>Body content 2</td>
              <td>Body content 3</td>
            </tr>
            <tr>
              <td>Body content 4</td>
              <td>Body content 5</td>
              <td>Body content 6</td>
            </tr>
            <tr>
              <td>Body content 7</td>
              <td>Body content 8</td>
              <td>Body content 9</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>Footer content 1</td>
              <td>Footer content 2</td>
              <td>Footer content 3</td>
            </tr>
          </tfoot>
        </table>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          voluptates, rerum nisi est iste ratione, eveniet nesciunt, error vitae
          dicta aperiam nostrum sequi aspernatur, tempore harum commodi quod at.
          Ex.
        </p>
      </div>
    </Layout>
  </div>
);
