// #1 Singly Linked List - ROTATE EXERCISE

// method should rotate all the nodes in the list by some number passed in
// Ex. 1 -> 2 -> 3 -> 4 -> 5 rotated by two would be 3 -> 4-> 5 -> 1 -> 2

// within singly linked list class:
// *** writing "function" to avoid error, but wouldn't in actual implementation ***
function rotate(num) {
    let count = 0
    if (num >= 0) {

       while (count < num) {
        // if num is positive, every rotation pushes the values to the left
        // So, the previous head becomes the tail, and the previous head's next node becomes the head
           let prevHead = this.head
           let prevTail = this.tail
           let prevHeadNext = this.head.next
           
           prevHead.next = null
           this.tail = prevHead
           this.head = prevHeadNext
           prevTail.next = prevHead
           
           count++
       }
   } else {
    // When num is negative, rotation is reversed to the right
    // So, the previous tail becomes the head, and the second to last node becomes the new tail
       while (count > num) {
           let prevHead = this.head
           let prevTail = this.tail
           let current = this.head
           // Need to loop to get the second to last node... this will hurt time complexity, but only with negative nums.  
           // This method would be easier to implement with doubly linked list
           for (let i = 1; i < this.length - 1; i++) {
               current = current.next
           }
           this.head = prevTail
           prevTail.next = prevHead
           this.tail = current
           current.next = null
           
           count--
       }
   }
   return this
}