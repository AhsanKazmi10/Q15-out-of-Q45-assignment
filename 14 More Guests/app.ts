let Guest_List:string[]=['Imran Khan','Nawaz Shareef','Altaf Hussain'];
// for(let i=0; i< Guest_List.length;i++){
//     console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n')
// }
let absent_Gest:string=('Imran khan');
let new_Gest:string=('Kamran tassori');
Guest_List[0]=new_Gest;
for(let i=0; i< Guest_List.length;i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n');
}
console.log(`Dear Mr ${absent_Gest} is not comming to a dinner.`); 
console.log('\n\nGood news! We find big tabel So wer are inviting 3 more gest\n\n');
Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2 , 0 ,`Maryam Nawaz`);
Guest_List.push('Bilawal bhutto zardari');

for(let i=0; i< Guest_List.length;i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n');
}