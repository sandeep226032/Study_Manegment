import { Suspense } from "react";
import LoginPage from "./loginpage.js";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading login form...</div>}>
      <LoginPage />
    </Suspense>
  );
}
