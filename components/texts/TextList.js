import { useRouter } from "next/router";

const TextList = ({ texts }) => {
  const router = useRouter();
  const textNav = (id) => {
    router.push("/texts" + id);
  };

  return (
    <div>
      <ul>
        {texts.map((text) => (
          <li key={text.id} onClick={() => textNav(text.id)}>
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
