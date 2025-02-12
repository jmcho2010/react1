import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import PostList from './List';

function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostList />
        </div>
      </Provider>
    );
  }

export default App;