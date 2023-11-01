// import { useState } from "react";
// export default function Post({ title, description, author, dateCreated, complete, dateCompleted }) {
    
    
//       function formatDate(dateString) {
//           if (dateString) {  
//             const date = new Date(dateString);
//             const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//             return formattedDate;
//           }
//           return "Not Applicable";
//         }
        
//         function formatDateTime(dateTime) {
//             if (dateTime) {
//               return dateTime.toLocaleString(); // Format with date, time, and seconds
//             }
//             return "Not Applicable";
//           }
//           const chicagoTime = new Date().toLocaleString("en-US", {
//             timeZone: "America/Chicago",
//           });
        
//             const [isComplete, setIsComplete] = useState(complete);
//             const [completionDate, setCompletionDate] = useState(dateCompleted);
          
//            /* function handleCompleteToggle() {
//                 setIsComplete(!isComplete);
            
//                 if (!completionDate) {
//                   const currentDate = new Date().toISOString().slice(0, 10);
//                   setCompletionDate(currentDate);
//                 } else {
//                   setCompletionDate('');
//                 }
//               }
//               */
//               function handleCompleteToggle() {
//                 setIsComplete(!isComplete);
            
//                 if (!completionDate) {
//                   // Get the current time in the Chicago time zone (Central Time Zone)
//                   const chicagoTime = new Date().toLocaleString("en-US", {
//                     timeZone: "America/Chicago",
//                   });
            
//                   // Set the completion date to Chicago time
//                   setCompletionDate(new Date(chicagoTime));
//                 } else {
//                   setCompletionDate('');
//                 }
//               }
    
//         return (
//             <div>
//       <h3>{title}</h3>
//       <div>{description}</div>
//       <br />
//       <i>Written by <b>{author}</b></i>
//       <div><i>Date Created: <b>{formatDateTime(Date(dateCreated))}</b></i></div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={isComplete}
//             onChange={handleCompleteToggle}
//           /> Complete
//         </label>
//       </div>
//       {isComplete && (
//         <div>
//           <i>Date Completed: <b>{formatDateTime(Date(completionDate))}</b></i>
//         </div>
//       )}
//     </div>
//   );
// }
              
    
    
    
    
    
import React, { useState } from "react";

export default function Post({ post }) {


    
  function formatDate(dateString) {
    if (dateString) {  
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      return formattedDate;
    }
    return "Not Applicable";
  }

  function formatDateTime(dateTime) {
    if (dateTime) {
      return dateTime.toLocaleString(); // Format with date, time, and seconds
    }
    return "Not Applicable";
  }

  const [isComplete, setIsComplete] = useState(post.complete);
  const [completionDate, setCompletionDate] = useState(post.dateCompleted);

  function handleCompleteToggle() {
    setIsComplete(!isComplete);

    if (!completionDate) {
      // Get the current time in the Chicago time zone (Central Time Zone)
      const chicagoTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Chicago",
      });

      // Set the completion date to Chicago time
      setCompletionDate(new Date(chicagoTime));
    } else {
      setCompletionDate('');
    }
  }

  return (
    <div>
      <h3>{post.title}</h3>
      <div>{post.content}</div>
      <br />
      <i>Written by <b>{post.author}</b></i>
      <div><i>Date Created: <b>{formatDateTime(new Date(post.dateCreated))}</b></i></div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isComplete}
            onChange={handleCompleteToggle}
          /> Complete
        </label>
      </div>
      {isComplete && (
        <div>
          <i>Date Completed: <b>{formatDateTime(new Date(completionDate))}</b></i>
        </div>
      )}
    </div>
  );
}
