// Centralized Font Awesome icon registration
// Import the icons you use across the app here and add them to the library.
// This avoids importing IconDefinition objects in many components and ensures
// the string/array form (e.g. ["fas","code"]) resolves at runtime.
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faProjectDiagram,
  faGraduationCap,
  faUsers,
  faBrain,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

// Register all icons used in the app
// allow explicit any here because we're avoiding a cross-package type mismatch
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _icons: any[] = [
  faCode,
  faProjectDiagram,
  faGraduationCap,
  faUsers,
  faBrain,
  faDatabase,
  faReact,
  faNodeJs,
];

// Cast to any to avoid cross-package type conflicts between fontawesome-common-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
library.add(...(_icons as any));

// No exports — this module only performs registration when imported.
