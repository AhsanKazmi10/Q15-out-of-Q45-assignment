let Guest_List:string[]=['Imran Khan','Nawaz Shareef','Altaf Hussain'];
for(let i=0; i< Guest_List.length;i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n')
}
let absent_Gest:string=('Imran khan');
let new_Gest:string=('Kamran tassori');
Guest_List[0]=new_Gest;
for(let i=0; i< Guest_List.length;i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n');
}
console.log(`Dear Mr ${absent_Gest} is not comming to a dinner.`);