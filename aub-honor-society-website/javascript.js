

    // Fill this array of 2-size arrays with all the FAQ questions and their answers
    // Follow the format:
    // [" Add the Question Here",
    //      "Add the Answer here"],
let questions = [
    ["How do I join the Honor Society?",
        "You need to apply to early admission and maintain a 3.5 GPA or higher during your time at AUB."
    ],

    ["Test119u229282",
        "Test"
    ],
];


            // [ "MONTH", MONTH NUMBER , "DAY", "START TIME", "END TIME", "EVENT NAME"]   
let events = [
    { month: "SEP", month_NUM: 9, day: 10, start_time: "10:00 pm", end_time: "2:00 am", event_name: "The Office Trivia", img_link: "Images/imgforevent.jpeg"},
    { month: "SEP", month_NUM: 9, day: 5, start_time: "10:00 pm", end_time: "0", event_name: "The Office Trivia2", img_link: "Images/img2.jpeg"},
    { month: "MAY", month_NUM: 5, day: 3, start_time: "5:00 pm", end_time: "6:00 pm", event_name: "First Induction Ceremony", img_link: "Images/imgforevent.jpeg"},
];


fillFAQ();
fillUpcomingEvents();



function fillFAQ() {
    
    const container = document.querySelector("body main #faqs");

    for(let i = 0; i<questions.length; i++) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const para = document.createElement("p");

        summary.textContent = questions[i][0];
        para.textContent = questions[i][1];

        summary.className="faq-dropdown";
        para.className="faq-full";

        details.appendChild(summary);
        details.appendChild(para);

        container.appendChild(details);

    }

}



function fillUpcomingEvents() {
    
    const container = document.querySelector("body main #events .upcoming-box");

            // [ "MONTH", MONTH NUMBER , "DAY", "START TIME", "END TIME", "EVENT NAME"]   
    let oldEvents = [];

    // Get today's date
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // JS months are 0-based
    const currentDay = today.getDate();

    // Filter events
    events = events.filter(event => {
        // Check if event date is before today
        if (event.month_NUM < currentMonth || (event.month_NUM === currentMonth && event.day < currentDay)) {
            oldEvents.push(event);
            return false; // remove from events
        }
        return true; // keep in events
    });

    events.sort((a, b) => {
        if (a.month_NUM === b.month_NUM) {
            return a.day - b.day; // same month → sort by day
        }
        return a.month_NUM - b.month_NUM; // different months → sort by month
    });



    for(let i = 0; i<events.length; i++) {
        const pictext = document.createElement("div");
        const pic = document.createElement("div");
        const text = document.createElement("div");
        const textleft = document.createElement("div");
        const textright = document.createElement("div");

        const month = document.createElement("div");
        const day = document.createElement("div");
        const time = document.createElement("div");
        const event = document.createElement("div");


        const img = document.createElement("img");

        pictext.className="pic-text";
        pic.className="upcoming-pic";
        text.className="upcoming-text";
        textleft.className = "text-left";
        textright.className = "text-right";
        month.className = "text-month";
        day.className = "text-day";
        time.className = "text-time";
        event.className = "text-event";  
        
        
        month.textContent = events[i].month;
        day.textContent= events[i].day + "";
        if (events[i].end_time != 0) {
            time.textContent= events[i].start_time + " - " + events[i].end_time;
        }
        else {
            time.textContent= events[i].start_time;
        }

        event.textContent= events[i].event_name;
        
        img.src = events[i].img_link;
        pic.appendChild(img);
        pictext.appendChild(pic);
        textleft.appendChild(month);
        textleft.appendChild(day);
        textright.appendChild(time);
        textright.appendChild(event);
        text.appendChild(textleft);
        text.appendChild(textright);
        pictext.appendChild(text);
        container.appendChild(pictext);

    }

    const OLDcontainer = document.querySelector("body main #events .old-box");
    for(let i = 0; i<oldEvents.length; i++) {
            const pictext = document.createElement("div");
            const pic = document.createElement("div");
            const text = document.createElement("div");
            const textleft = document.createElement("div");
            const textright = document.createElement("div");

            const month = document.createElement("div");
            const day = document.createElement("div");
            const time = document.createElement("div");
            const event = document.createElement("div");


            const img = document.createElement("img");

            pictext.className="pic-text";
            pic.className="upcoming-pic";
            text.className="upcoming-text";
            textleft.className = "text-left";
            textright.className = "text-right";
            month.className = "text-month";
            day.className = "text-day";
            time.className = "text-time";
            event.className = "text-event";  
            
            
            month.textContent = oldEvents[i].month;
            day.textContent= oldEvents[i].day + "";
            if (oldEvents[i].end_time != 0) {
                time.textContent= oldEvents[i].start_time + " - " + oldEvents[i].end_time;
            }
            else {
                time.textContent= oldEvents[i].start_time;
            }

            event.textContent= oldEvents[i].event_name;
            
            img.src = oldEvents[i].img_link;
            pic.appendChild(img);
            pictext.appendChild(pic);
            textleft.appendChild(month);
            textleft.appendChild(day);
            textright.appendChild(time);
            textright.appendChild(event);
            text.appendChild(textleft);
            text.appendChild(textright);
            pictext.appendChild(text);
            OLDcontainer.appendChild(pictext);

        }

}

