"use client";
import { useAuth, UserButton } from "@clerk/nextjs";

function page() {
  const { userId } = useAuth();
  if (!userId) return;

  return (
    <div>
      <UserButton />
      <div>hello</div>
    </div>
  );
}
export default page;
