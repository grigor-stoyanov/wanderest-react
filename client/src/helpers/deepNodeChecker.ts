export function deepNodeChecker(child: HTMLElement, parent: HTMLElement) {
  let node: HTMLElement | null = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentElement;
  }
  return false;
}
