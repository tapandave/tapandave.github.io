import React, { Component } from 'react';

const Avatar = ({ img, alt }) => {
  return (
    <div className="avatar">
        <img src = {img} alt = {alt || 'Portfolio'}/>
    </div>
  );
}

export default Avatar;
