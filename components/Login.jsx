// // הגדרת מערך משתמשים קיימים במערכת
// const users = [
//     { username: 'user1', email: 'email1' },
//     { username: 'user2', email: 'email2' },
//     { username: 'user3', email: 'email3' }
//   ];
  
//   // פונקציה לבדיקת המשתמש והסיסמא
//   function login() {
//     // קבלת הערכים שהמשתמש הכניס
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
  
//     // בדיקה האם שם המשתמש והסיסמא קיימים במערכת
//     const user = users.find(u => u.username === username && u.email === email);
  
//     if (user) {
//       // אם המשתמש נמצא, עבור לדף הבא
//       window.location.href = 'next-page.html';
//     } else {
//       // אם המשתמש לא קיים, תציג הודעת שגיאה
//       alert('אינך קיים במערכת');
//     }
//   }
  