import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import Navbar from '../../Components/Navbar/Navbar';
import './Repo.scss';
import useIPFSUpload from "../../IPFS/ipfshook";

const Repo = () => {

  const onDrop = useCallback((acceptedFiles) => {
    console.log('Dropped files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });



  return (
    <div>
      <Navbar />
      <div className="repo-container">
        <div className="repo-main">
          <div className="repo-header">
            <h2>D-Hub_TDoC_Blockchain</h2>
            <div className="public-badge">Public</div>
          </div>
          <div className="branch-dropdown">
            <select>
              <option value="main">Main</option>
              <option value="master">Master</option>
            </select>
          </div>
          <div className="files-list">
            <table>
              <thead>
                <tr>
                  <th>Rishav Raj Kumar</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dhub.sol</td>
                  <td>initial commit</td>
                  <td>2 days ago</td>
                </tr>
                <tr>
                  <td>main.js</td>
                  <td>initial commit</td>
                  <td>2 days ago</td>
                </tr>
                <tr>
                  <td>README.md</td>
                  <td>initial commit</td>
                  <td>2 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="readme-container">
            <div className="readme-header">
              <h3>README.md</h3>
            </div>
            <div className="readme-body">
              <p>This project is an implementation of a basic blockchain in JavaScript.</p>
            </div>
          </div>
          <div {...getRootProps()} className="drag-drop-container">
            <input {...getInputProps()} />
            <button>Upload Files</button>
          </div>
        </div>
        <div className="repo-sidebar">
          <div className="about">
            <h3>About</h3>
            <p>This project is an implementation of a basic blockchain in JavaScript.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Repo;
