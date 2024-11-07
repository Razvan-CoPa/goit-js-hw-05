const getUsersWithFriend = (allUsers, friendName) => {
  return allUsers.filter(user => user.friends.includes(friendName));
}