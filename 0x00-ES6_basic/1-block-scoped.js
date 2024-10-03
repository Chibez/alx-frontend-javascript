export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // block-scoped within 'if'
    let task2 = false; // block-scoped within 'if'
  }

  return [task, task2];
}
