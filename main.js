
let lab1 = [5,5,5,5,10,10];
let lab2 = [5,5,5,5,5,5,10];
let lab3 = [5,10,10,15];
let lab45 = [10,5,5,5,5,5,10,10,10,10,5];
let lab6 = [5,5,10,5,5,10];
let lab8 = [5,10,10,10,5];
let quiz1 = [36];



function main(lab1,lab2,lab3,lab45,lab6,lab8) {
function get_sum(lab) {
	let sum=0;
	for (let i=0; i<lab.length; i+=1) {
	sum += lab[i];
		}
			return sum;
}
let sums=[get_sum(lab1),get_sum(lab2),get_sum(lab3),get_sum(lab45),get_sum(lab6),get_sum(lab8)];
function total(sums) {
	let total=0;
	for (let c=0; c<sums.length; c+=1){
		total += sums[c];
	}
	return total;
}
let total1=total(sums)
const results = {
	lab1: lab1,
	lab2: lab2,
	lab3: lab3,
	lab4and5: lab45,
	lab6: lab6,
	lab8: lab8,
	sum_of_each_lab: sums,
	quiz1: quiz1,
	total_score: (total1/280)*60 +(quiz1[0]/40)*40

}
return results;
}
results =main(lab1,lab2,lab3,lab45,lab6,lab8);
console.log(results)