import print from "./lib/modules";

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

print("Bienvenido");
greet("Maddison", new Date());