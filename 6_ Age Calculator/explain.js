// userInput.max = new Date().toISOString().split("T")[0];
let currentDate = new Date();
console.log(currentDate); //2024-06-29T02:37:17.674Z

/** toISOString() হল একটি মেথড, যা তারিখ এবং সময়কে ISO 8601 ফরম্যাটে রূপান্তরিত করে। এটি তারিখ এবং সময়কে একটি স্ট্রিং হিসেবে প্রদান করে */

let isoString = new Date().toISOString();
console.log(isoString); //2024-06-29T02:39:10.082Z
/**
 *  2024-06-29 হল তারিখ (বছর-মাস-দিন)
    T হল দিন এবং সময়ের মধ্যে বিভাজক
    15:20:40.000Z হল সময় (ঘন্টা:মিনিট:সেকেন্ড.মিলিসেকেন্ড)

 */

/**
 *  .split("T")
    split("T") একটি মেথড, যা স্ট্রিংকে T দিয়ে দুই ভাগে বিভক্ত করে। এটা স্ট্রিং অ্যারের একটি উপাদান তৈরি করে।
 */
let dateTimeParts = isoString.split("T");
console.log(dateTimeParts);

/** [0] হল একটি অ্যারের প্রথম উপাদান। আমাদের স্ট্রিং অ্যারের প্রথম উপাদান হল তারিখ।  */

let dateOnly = dateTimeParts[0];
console.log(dateOnly);

/** userInput.max দিয়ে আমরা HTML ইনপুট ফিল্ডের সর্বোচ্চ তারিখ নির্ধারণ করছি। এর মানে হল, ব্যবহারকারী বর্তমান তারিখের পরে কোনো তারিখ নির্বাচন করতে পারবে না। */

// let userInput = document.getElementById("date"); // HTML ইনপুট ফিল্ড ধরার জন্য
// userInput.max = new Date().toISOString().split("T")[0]; // সর্বোচ্চ তারিখ নির্ধারণ
