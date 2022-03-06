import { useEffect } from "react";

function useComponentDidMount(cb: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(cb, []);
}

export default useComponentDidMount;
