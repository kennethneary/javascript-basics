class UsersGen {
    constructor(users) {
        this.users = users;
    }

    *getIterator() {
        for (const i in this.users) {
            yield this.users[i];
        }
    }

}

const allUsers = new UsersGen([
    {name: 'Sam' },
    {name: 'John' },
    {name: 'Bill' }
]);

let usersIterator = allUsers.getIterator();

console.log(usersIterator.next().value);
console.log(usersIterator.next().value);
console.log(usersIterator.next().value);

usersIterator = allUsers.getIterator();
for (const user of usersIterator) {
    console.log(user.name);
}

usersIterator = allUsers.getIterator();
console.log(...usersIterator);