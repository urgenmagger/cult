import {useState, useEffect} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

interface NetworkStatus {
  isConnected: boolean;
  isInitialized: boolean;
}

const useNetworkStatus = (): NetworkStatus => {
  const [isConnected, setIsConnected] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected);
      setIsInitialized(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {isConnected, isInitialized};
};

export default useNetworkStatus;
