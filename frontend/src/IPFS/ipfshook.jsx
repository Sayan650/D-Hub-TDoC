import { useState, useCallback } from "react";
import { create as createIpfsClient } from "ipfs-http-client";

const ipfs = createIpfsClient({ host: "", port: 5001, protocol: "https" });

const useIPFSUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [ipfsUri, setIpfsUri] = useState(null);
  const [error, setError] = useState(null);

  const uploadToIPFS = useCallback(async (fileOrDirectory) => {
    try {
      setUploading(true);
  
      let result;
      if (fileOrDirectory instanceof File) {
        result = await ipfs.add(fileOrDirectory);
        } else if (fileOrDirectory instanceof Blob) {
        
        result = await ipfs.add({
          content: fileOrDirectory,
          wrapWithDirectory: true,
        });
      } else {
        throw new Error("Unsupported upload type");
      }
  
      const uri = result.path;
      setIpfsUri(`https://ipfs.io/ipfs/${uri}`);
    } catch (error) {
      setError("Error uploading to IPFS");
      console.error("IPFS Upload Error:", error);
    } finally {
      setUploading(false);
    }
  }, [ipfs]);
  

  return { uploadToIPFS, uploading, ipfsUri, error };
};

export default useIPFSUpload;
