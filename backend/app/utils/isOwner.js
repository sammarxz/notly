const isOwner = (user, note) => {
  if(JSON.stringify(user._id) === JSON.stringify(note.author._id)) {
    return true;
  }

  return false;
}

module.exports = isOwner;
