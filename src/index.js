// TODO: Render the `App` component to the DOM
// ReactDOM.render(<App searchYouTube={window.searchYouTube}/>, document.getElementById('app'));

// added script tags
// <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
// npm install --save react-router-dom
// import { BrowserRouter, Match, Router, Route, Link } from 'react-router';


// const Router = () => {
//   return (
//     <Router >
//       <App searchYouTube={window.searchYouTube}/>
//     </Router>
//   );
// };

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match pattern="/" component={App} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById('app'));
