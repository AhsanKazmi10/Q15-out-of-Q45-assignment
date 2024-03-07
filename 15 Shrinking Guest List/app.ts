// guest invite ka liya arry banaya ha.

let Guest_List:string[]=['Imran Khan','Nawaz Shareef','Altaf Hussain'];
// for(let i=0; i< Guest_List.length;i++){
//     console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n')
// }

//absent gest ko new gest sa replace kiya ha.
let absent_Gest:string=('Imran khan');
let new_Gest:string=('Kamran tassori');
Guest_List[0]=new_Gest;

// for(let i=0; i< Guest_List.length;i++){
//     console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n')
// }

//absent gest ka massage print kiya ha.
console.log(`Dear Mr ${absent_Gest} is not comming to a dinner.`); 

//more gest add kiya hn.

console.log('\n\nGood news! We find big tabel So wer are inviting 3 more gest\n\n');

Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2 , 0 ,`Maryam Nawaz`);
Guest_List.push('Bilawal bhutto zardari');

// 6 gest ka arry ko print karaya ha 
for(let i=0; i< Guest_List.length;i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is pleasure to invite you to dinner.,\n\nThank You!\n\n');
}
//sorry massage to gest for not inviting.
console.log(`\n\nSorry! we can not arrange big table,only two peoples will be invited.\n\n`);

//yahan gest remove kiya hn.
while(Guest_List.length > 2 ){
    let remove_gest=Guest_List.pop();
    console.log(`\n\nSorry Mr.  ${remove_gest} You are not invited for Dinner\n\n`);
}

for(let i=0; i< Guest_List.length;i++){
    console.log('Dear Mr. ' + Guest_List [i] + ',\n\n You are still Invited .\n\nThank You!\n\n');
}

Guest_List.splice(0,2);
console.log(Guest_List);


