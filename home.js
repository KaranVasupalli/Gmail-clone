document.addEventListener("DOMContentLoaded", function() {
    // Compose Email Popup
    const composeBtn = document.querySelector('.compose-btn');
    const composePopup = document.getElementById('compose-popup');
    const closeBtn = document.querySelector('.close');
    

    composePopup.style.display = 'none';


    composeBtn.addEventListener('click', () => {
        composePopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        composePopup.style.display = 'none';
    });

    
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('click', () => {
        
        composePopup.style.display = 'none';
    });

    // Sample data for emails
    const emails = [
        { from: 'example1@gmail.com', subject: 'Meeting Reminder', body: 'Don\'t forget about the meeting tomorrow.' },
        { from: 'example2@gmail.com', subject: 'Vacation Plans', body: 'Let\'s discuss our vacation plans for next month.' },
       
    ];

    const emailList = document.querySelector('.email-list');
    emails.forEach(email => {
        const emailItem = document.createElement('div');
        emailItem.classList.add('email');
        emailItem.innerHTML = `
            <div class="email-header">
                <div>${email.from}</div>
                <div>${email.subject}</div>
            </div>
            <div class="email-body">${email.body}</div>
        `;
        emailList.appendChild(emailItem);
    });
});











let obj = [
  {
    name: "karan",
    spantext: "Here's to Geekster",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Tata",
    spantext: "Upcoming Company Announcement",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "02.03 pm",
  },
  {
    name: "geekster",
    spantext: "Company News and Updates",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "3:01 pm",
  },
  {
    name: "Dream11",
    spantext: "Update on Dream 11 contest",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "06:44 am",
  },
  {
    name: "ipl",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "01.34 pm",
  },
  {
    name: "amazon",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "02.06 pm",
  },
  {
    name: "sales force",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "zomoto",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "swiggy",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "microsoft",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "accenture",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "cred",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "apple",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "flipkart",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "mamaearth",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "youtube",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "google",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "gemini",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
];
  
  function plusLabel(obj) {
    console.log(obj);
    let p = document.createElement("div");
    p.className = "inbox-message-item message-default-unread";
  
    p.innerHTML = `
    <div class="checkbox">
    <button class="btn">
        <!-- <img src="./app/assets/icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"> -->
        <input type="checkbox" name="" id="">
        
    </button>
</div>
<!-- <div class="message-group-hidden">
    <button class="btn-alt btn-nofill drag-indicator">
        <img src="./app/assets/icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled">
    </button>
</div> -->
<div>
    <button class="btn star" style="margin: 0;">
        <span class="material-symbols-outlined">
            star
        </span>
    </button>
</div>
<div class="message-default">
    <div class="message-sender message-content">
        <span>${obj.name}</span>
    </div>
    <div class="message-subject message-content">
        <span class="spantext">${obj.spantext}</span>
    </div>
    <div class="message-seperator message-content"> - </div>
    <div class="message-body message-content">
        <span>${obj.text}</span>
    </div>
    <div class="gap message-content"> &nbsp; </div>
    <div class="message-date center-text">
        <span class="span-time">${obj.time}</span>
    </div>
</div>
<div class="message-group-hidden">
    <div class="inbox-message-item-options">
        <button class="btn">
            <span class="material-symbols-outlined">
                archive
            </span>
        </button>
        <button class="btn delete-btn">
            <span class="material-symbols-outlined">
                delete
            </span>
        </button>
        <button class="btn">
            <span class="material-symbols-outlined">
                mark_as_unread
            </span>
        </button>
        <button class="btn">
            <span class="material-symbols-outlined">
                snooze
            </span>
        </button>
    </div>
</div>
          `;
  
    let pluslab = document.getElementById("mailss");
  
    
    pluslab.appendChild(p);
  }
  
  obj.forEach((objItem) => {
    plusLabel(objItem);
  });
  
  
  
  // delelte Btn JavaScript
  
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
          this.closest('.message-default-unread').style.display = 'none';
      });
  });
  
  