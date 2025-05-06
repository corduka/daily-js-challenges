const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

// Calculate BMIs
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`);    
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`);    
}