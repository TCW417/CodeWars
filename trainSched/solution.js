function reachDestination(distance, speed) {
  let timeToDest = Math.round((distance/speed)*2)/2;
  return `The train will be there in ${timeToDest} ${(timeToDest === 1 ? 'hour.' : 'hours.')}`;
}