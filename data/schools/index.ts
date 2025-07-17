
import { skemaData } from "./skema";
import { gemData } from "./gem";
import { kedgeData } from "./kedge";
import { neomaData } from "./neoma";
import { edhecData } from "./edhec";

// Export des données des écoles
export {
  skemaData,
  gemData,
  kedgeData,
  neomaData,
  edhecData
};

// Add emlyon to the exports
export const emlyonData = {
  id: "emlyon",
  name: "EM Lyon Business School",
  slug: "emlyon"
};
