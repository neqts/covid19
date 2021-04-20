import React from 'react';

const Loading = () => {
    return ( 
    <div style={{height:"100vh",display:"flex", justifyContent:"center",alignItems:"center"}}>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden"></span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden"></span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden"></span>
</div>
    </div> );
}
 
export default Loading;