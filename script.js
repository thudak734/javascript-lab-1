const firstName = "Tom";
const age = 62;
const birthday = "August 30th";
pineapplePizza = true;
lifeEvents = [
  "I became a super hero",
  "I graduated bootcamp",
  "I learned to ride a bicycle",
  "I won a gold medal at the olympics",
];

if (pineapplePizza) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years of age and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${firstName} and I do not like pineapples on pizza. I am currently ${age} years of age and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let counter = 1;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    console.log(counter);
    counter++;
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

//extended challenge
while (true) {
  let hours = 60;
  let wage = 12;

  if (hours > 40) {
    const pay = wage * 40 + (hours - 40) * (wage * 1.5);
    const weeks = Math.floor(1000000 / pay);
    console.log(
      `You got paid this much with overtime $${pay}. It will take ${weeks} weeks to make a million dollars.`
    );
    break;
  } else {
    pay = wage * hours;
    console.log(`You earned this much with no overtime $${pay}`);
    break;
  }
}
