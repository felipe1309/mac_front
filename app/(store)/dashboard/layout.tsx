"use client";
import { layout } from "../../../types/layout";
import { useContextUser } from "../../../hooks/useContextUser";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const layout = ({ children }: layout) => {
  const { userState } = useContextUser();
  const router = useRouter();
  useEffect(() => {
    if (userState?.tipo !== "admin") {
      router.replace("/");
    }
  }, [userState]);

  return <>{children}</>;
};

export default layout;
