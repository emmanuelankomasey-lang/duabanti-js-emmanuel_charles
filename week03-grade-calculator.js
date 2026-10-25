const args = process.argv.slice(2);
console.log(args); 

const scores = [10, 54, 95];
console.log(scores);

function isValidScore(score){
    if (score >= 0 && score <= 100){
        return true;
    }
    else{
        return false;
    }
}

function getGrade(score){
    if (!isValidScore(score)){
        return 'Invalid score';
    }

    if (score >= 90){
        return 'A';
    }
    else if (score >= 80){
        return 'B';
    }
    else if (score >=70){
        return 'C';
    }
    else if (score >= 50){
        return 'D'; 
        }
    return 'F';
}