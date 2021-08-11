const TextList = ({ texts }) => {
  return (
    <div>
      <ul>
        {texts.map((text) => (
          <li key={text.id}>
            <h3>{text.title}</h3>
            <p>{text.datetime}</p>
            <p>{text.itemCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextList;
