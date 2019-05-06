
let quit = false;
let balance = 0;

//prompt user for input//
while (quit === false) {
  let input = prompt('enter your next activity');


//    if(input === 'q') {
//      quit = true;
//    } else if (input === 'b') {
//        alert(balance);
//    } else if (input === 'w') {
//        let withdrawel = prompt('enter withdrawel amount');
//        balance = balance - withdrawel
//        alert(balance);
//    } else if (input === 'd') {
//        let deposit = prompt('enter deposit amount');
//        balance = balance + deposit
//        alert(balance);
//    }
//}

switch (input) {
    case 'q': {
      quit = true;
      break;
    }
    case 'b': {
      alert(balance);
      break;
    }
    case 'w': {
      let withdrawel = prompt('enter withdrawel amount');
      balance = balance - withdrawel
      alert(balance);
      break;
    }
    case 'd': {
      let deposit = prompt('enter deposit amount');
      balance = balance + deposit
      alert(balance);
      break;
    }


  }
}
