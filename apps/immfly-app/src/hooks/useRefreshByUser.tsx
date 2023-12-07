import { useState } from 'react';

export const useRefreshByUser = (callback: () => Promise<unknown>) => {
  const [isRefetchingByUser, setIsRefetchingByUser] = useState(false);

  const refetchByUser = async () => {
    setIsRefetchingByUser(true);

    try {
      await callback();
    } finally {
      setIsRefetchingByUser(false);
    }
  };

  return { isRefetchingByUser, refetchByUser };
};
