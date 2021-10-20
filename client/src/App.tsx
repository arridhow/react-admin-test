import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { PostList } from "./components";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource name="posts" list={PostList} />
      </Admin>
    </div>
  );
}

export default App;
