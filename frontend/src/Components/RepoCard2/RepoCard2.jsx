import React from 'react';
import './RepoCard2.scss';

const RepoCard2 = ({ name, description, language, forks }) => {
  return (
    <div className="repo-card-2">
      <div className="repo-card-2-header">
        <h3 className="repo-card-2-name">{name}D-Hub_TDoC</h3>
        <p className="repo-card-2-description">{description}</p>
      </div>
      <div className="repo-card-2-footer">
        <span className="repo-card-2-stat">{forks}forked from lugnitdgp/TDoC<i className="fa fa-code-fork"></i></span>
        <div className="repo-card-2-language">
          <span className="repo-card-2-language-badge">{language}🟡 JavaScript</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RepoCard2;
