import { useState, useEffect } from "react";
import publicIP from "react-native-public-ip";

const usePublicIp = () => {
  const [publicIpV4, setPublicIpV4] = useState();

  useEffect(() => {
    publicIP()
      .then(ip => {
        setPublicIpV4(ip)
      })
      .catch(error => {
        console.log(error);
      }, [publicIpV4]);
  })
  return { publicIpV4 }
}

export default usePublicIp;