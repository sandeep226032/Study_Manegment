import { Suspense } from "react";
import Signup from "./signuppage.js";;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading login form...</div>}>
      <Signup />
    </Suspense>
  );
}
