/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/02/2024 - 12:58:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/02/2024
    * - Author          : 
    * - Modification    : 
**/
import React, { createContext, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const helmetContext = createContext("");

export const HelmetProvider = ({ children }) => {
  const [focus, setFocus] = useState(true);
  const [title, setTitle] = useState("MEDONMA");
  const [description, setDescription] = useState("MEDONMA");

  useEffect(() => {
    if (!title) setTitle("MEDONMA");
    if (!description) setDescription("MEDONMA");
  }, [title, description]);

  useEffect(() => {
    const handleBlur = () => setFocus(false);
    const handleFocus = () => setFocus(true);

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <helmetContext.Provider value={{ setTitle, setDescription }}>
      <>
        <Helmet>
          <title>{`${focus ? " " + title : " Offline :) | "}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        {children}
      </>
    </helmetContext.Provider>
  );
};

export function useHelmet() {
 return useContext(helmetContext);
}