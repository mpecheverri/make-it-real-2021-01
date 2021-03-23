
const averageAge = (string,letterStartLastName) => {
    const arrayPersons = string.split('\n');
    let sum = 0;
    let count = 0;

    arrayPersons.forEach(line => {
        if (line !== '') {
            const dataPerson = line.split(';');
            const name = dataPerson[1].split(' ')
            const lastName = name[1];
            const age = dataPerson[3];
           
            if (lastName.toUpperCase().startsWith(letterStartLastName.toUpperCase())){
                sum += Number(age);
                count++;
            }            
        }
    });

    return count === 0 ? 0 : sum/count;
}

module.exports = {averageAge};