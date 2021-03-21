//Object, tuple, enum
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Arif Pehlivan",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// for (const role of person.role) {
//     console.log(role);
//   }

enum Role {
 ADMIN,
 AUTHOR,
 READ_ONLY
};

const person = {
    name: "Arif Pehlivan",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };



console.log(person.role);
alert(`${person.name} ${person.age}`);
``;
