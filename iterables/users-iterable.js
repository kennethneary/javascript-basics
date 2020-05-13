class Users {
    constructor(users) {
        this.users = users;
    }

    [Symbol.iterator]() {
        let i = 0;
        let users = this.users;

        return{
            next() {
                if (i < users.length) {
                    return {
                        done: false,
                        value: users[i++] 
                    }
                }
                return {
                    done: true
                }
            }
        }
    }

}

const users = new Users([
    {name: 'Sam' },
    {name: 'John' },
    {name: 'Bill' }
]);

const usersIterator = users[Symbol.iterator]();

console.log(usersIterator.next().value);
console.log(usersIterator.next().value);
console.log(usersIterator.next().value);

for (const user of users) {
    console.log(user.name);
}

console.log(...users);