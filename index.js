function scuberGreetingForFeet(x){
  // Write your code here!
  if (x<=400){
    return 'This one is on me!';
  } else if (x>2000&x<=2500){
    return 'I will gladly take your thirty bucks.';
  } else if (x > 2500){
    return 'No can do.'
  }else {
}
}

function ternaryCheckCity(e){
  // Write your code here!
  if (e === 'NYC'){
   return 'Ok, sounds good.';
  }
  else if (e === 'Pittsburgh') {
   return "No go.";
  }
}

function switchOnCharmFromTip(m){
  // Write your code here!
  if ( m ==='generous') {
    return "Thank you so much.";
  }else if ( m === 'not as generous'){
    return 'Thank you.';
  }else if( m=== 'thanks for everything'){
    return 'Bye.';

  }
} 