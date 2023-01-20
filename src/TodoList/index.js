import './TodoList.css';

function TodoList(props) {
  const {
    error,
    loading,
    searchedTodos,
    children,
    onEmptyTodos,
    onError,
    onLoading,
    render,
    totalTodos,
    onEmptySearchResults,
    searchText,
  } = props;

  const renderFunc = children || render;

  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmptyTodos()}
      {!!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchResults(searchText)}

      {/* {searchedTodos.map((todo) => render(todo))} */}
      {!loading && !error && searchedTodos.map(renderFunc)}
      {/* <ul>{children}</ul> */}
    </section>
  );
}

export { TodoList };
