import { UnderlineIcon } from "@radix-ui/react-icons";

import { Toggle } from "netzo/ui/components/ui/toggle.tsx";

export default () => {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <UnderlineIcon className="h-4 w-4" />
    </Toggle>
  );
};