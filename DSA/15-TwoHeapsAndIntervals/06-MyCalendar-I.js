// https://leetcode.com/problems/my-calendar-i/description/

/**
 * Approach:
 * We need to maintain a calendar of events and ensure no new event overlaps
 * with any existing event.
 *
 * Idea:
 * We use a simple Array to store the successfully booked intervals. For every
 * new booking request, we iterate through the array and check for intersections.
 * Two intervals `[start1, end1)` and `[start2, end2)` OVERLAP strictly if:
 * `end1 > start2 && start1 < end2`. If this condition is met for any existing
 * meeting, we immediately return false. If we check all meetings and find no
 * overlaps, we push the new meeting to our calendar and return true.
 *
 * Steps:
 * 1. Constructor: Initialize `this.calendar` as an empty array.
 * 2. Book Method:
 *    - Loop through every `meeting` in `this.calendar`.
 *    - Extract `existingStart` and `existingEnd` from the `meeting`.
 *    - Apply the Overlap Rule: If `end > existingStart && start < existingEnd`,
 *      we found a double-booking! Return `false`.
 *    - If the loop finishes without returning, push `[start, end]` into
 *      `this.calendar`.
 *    - Return `true`.
 *
 * Time Complexity: O(N) per query, O(N^2) total
 * - For each booking request, we potentially scan all previously booked meetings.
 *   For N queries, this results in O(N^2) time. Given N <= 1000, this is extremely
 *   fast and perfectly acceptable. (Note: Using a custom Binary Search Tree could
 *   optimize this to O(log N) per query, but a simple Array is the standard baseline).
 *
 * Space Complexity: O(N)
 * - We store up to N meetings in our calendar array.
 */

var MyCalendar = function () {
  // 1. Initialize our calendar array to store the intervals
  this.calendar = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function (startTime, endTime) {
  // 2. Check the new meeting against every existing meeting
  for (let i = 0; i < this.calendar.length; i++) {
    const existingMeeting = this.calendar[i];
    const existingStart = existingMeeting[0];
    const existingEnd = existingMeeting[1];

    // --- THE GOLDEN OVERLAP RULE ---
    // Overlap happens if: New finishes strictly after Existing starts
    // AND New starts strictly before Existing finishes.
    if (endTime > existingStart && startTime < existingEnd) {
      return false; // Double booked! Reject it.
    }
  }

  // 3. No overlaps found! It's safe to book.
  this.calendar.push([startTime, endTime]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
