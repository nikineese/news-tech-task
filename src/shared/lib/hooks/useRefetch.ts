import { useEffect } from "react";

export const useRefetch = (refetch: () => void, deps: any[]) => {
  useEffect(() => refetch(), deps);
};
