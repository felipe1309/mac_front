"use client"
import { useEffect } from "react";
import { useContextUser } from "../../hooks/useContextUser";
const page = () => {
  const {userState} = useContextUser()
  useEffect(() => {
    console.log(userState)
  }, [userState])
  
  return <div>home</div>;
};

export default page;
