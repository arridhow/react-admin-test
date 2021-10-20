import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { PostCreate, PostEdit, PostList } from "./components";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
      </Admin>
    </div>
  );
}

export default App;
