const getTotalBalanceByGender = (clients, gender) =>{
    return clients.filter(client => client.gender === gender).reduce((acc, clients)=> acc + clients.balance, 0);
}