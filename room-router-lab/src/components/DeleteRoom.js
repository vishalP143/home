import React from 'react';

const DeleteRoom = ({ id, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      onDelete(id);
    }
  };

  return (
    <button className="btn btn-delete" onClick={handleDelete}>
      Delete Room
    </button>
  );
};

export default DeleteRoom;