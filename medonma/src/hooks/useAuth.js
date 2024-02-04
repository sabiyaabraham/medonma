/**
 * @description      : Index.js
 * @author           : Sreehari k p, Sabiya Abraham
 * @group            : Team MEDONMA
 * @created          : 03/02/2024 - 11:34:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/02/2024
 * - Author          : Sreehari k p, Sabiya Abraham
 * - Modification    : create
 **/
import { useContext } from "react";

// auth provider
import AuthContext from "../contexts/AuthContext";

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("context must be use inside provider");

  return context;
};

export default useAuth;
