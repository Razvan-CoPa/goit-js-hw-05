const getUserNames = (users) => {
    return users.flatMap(user => user.name);
}