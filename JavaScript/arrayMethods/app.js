const colors = [];

console.log(colors);

colors.push('Indigo');
colors.push('Blue');
colors.push('Green');
colors.push('Yellow');
colors.push('Orange');
colors.push('Red');

console.log(colors);

colors.unshift('Violet');
colors.unshift('Pink');
colors.push('Black');

console.log(colors);

colors.pop();

console.log(colors);

colors.shift();

console.log(colors);

const includesColor = colors.includes('Violet');

console.log(includesColor);

const pinkIndex = colors.indexOf('Pink');

console.log(pinkIndex);

colors.reverse();

console.log(colors);

const warmColors = colors.slice(0, 3);

console.log(warmColors);

warmColors.splice(1,0,'Tangerine');

console.log(warmColors);

warmColors.splice(1,1);

console.log(warmColors);

warmColors.sort();

console.log(warmColors);