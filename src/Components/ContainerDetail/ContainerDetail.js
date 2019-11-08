import React from 'react';

const ContainerDetail = props => {
  const { desc, title, date, status, index, genre } = props;

  const color =
    status === 'Available' ? 'light-green-text text-accent-4' : 'red-text';

  return (
    <div className='left detail-container'>
      <h5 className={`right ${color} text-status`}>{status}</h5>
      <a className='btn z-depth-0' href={`${index}#`}>
        {genre}
      </a>
      <h4>{title}</h4>
      <span style={{ fontWeight: 'bold' }}>{date}</span>
      <p
        style={{
          marginTop: '20px'
        }}
        dangerouslySetInnerHTML={{ __html: desc }}>
        {/* {desc} */}
      </p>
    </div>
  );
};

export default ContainerDetail;
