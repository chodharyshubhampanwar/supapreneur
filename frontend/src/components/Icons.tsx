import React from "react";
import LinksButton from "./Icon/Links";
import { Globe } from "lucide-react";

const IconButtonsGroup: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a href={"https://www.producthunt.com/posts/screenhint"}>
        <LinksButton
          icon={(props) => <Globe {...props} />}
          label="Website link"
        />
      </a>
      {/* <LinksButton
        icon={(props) => <Save {...props} />}
        label="Save"
        onClick={() => console.log("Save clicked")}
      />
      <LinksButton
        icon={(props) => <Share {...props} />}
        label="Share"
        onClick={() => console.log("Share clicked")}
      /> */}
    </div>
  );
};

export default IconButtonsGroup;
