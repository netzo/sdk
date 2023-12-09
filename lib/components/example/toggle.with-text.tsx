import { FontItalicIcon } from "../../deps/@radix-ui/react-icons.ts";

import { Toggle } from "../ui/toggle.tsx";

export default () => {
  return (
    <Toggle aria-label="Toggle italic">
      <FontItalicIcon className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  );
};
