import Link from "next/link";

import TextList from "../../components/texts/TextList";

const TEMP_TEXTS = [
  { id: 1, title: "My first text", datetime: "1/31/20", itemCount: 5 },
  { id: 2, title: "My second text", datetime: "2/31/20", itemCount: 3 },
  { id: 3, title: "My third textty text", datetime: "3/31/20", itemCount: 5 },
  { id: 4, title: "My last text", datetime: "4/31/20", itemCount: 12 },
];

const Texts = () => {
  return (
    <div>
      <TextList texts={TEMP_TEXTS} />
    </div>
  );
};

export default Texts;
